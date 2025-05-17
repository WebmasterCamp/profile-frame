<script lang="ts">
	import Cropper from 'svelte-easy-crop';
	import getCroppedImg, { addFrame, createImage } from '../utils/crop';
	import Button from '../components/Button.svelte';
	import InputFile from '../components/InputFile.svelte';
	import LoadingSrc from '$lib/assets/loading.svg';
	import { Branch } from '$lib/constants/branch';
	import PreviewSrc from '$lib/assets/preview.png';
	import { onMount } from 'svelte';
	import { removeBackground } from '@imgly/background-removal';
	import reuploadSrc from '$lib/assets/reupload.svg';

	let image = '';
	let croppedImage: string | null = null;
	let croppedImageWithFrame: string | null = null;
	let crop = { x: 0, y: 0 };
	let zoom = 1;
	let files: FileList;
	let pixelCrop = { x: 0, y: 0, width: 0, height: 0 };
	let branch: Branch = Branch.SPECIAL;
	let removeBg = false;
	let removeBGStatus = false;
	let uploaded = false;
	let processedImage: string;
	let processedImageWithBg = '';
	let processedImageNoBg = '';
	let fileInputRef: HTMLInputElement;

	function onFileSelected() {
		if (files && files[0]) {
			image = '';
			const reader = new FileReader();
			reader.readAsDataURL(files[0]);
			reader.onload = () => {
				image = reader.result as string;
			};
			croppedImage = null;
			croppedImageWithFrame = null;
			removeBGStatus = false;
			uploaded = true;
			processedImageWithBg = '';
			processedImageNoBg = '';
		}
	}

	async function previewCrop(e: CustomEvent) {
		pixelCrop = e.detail.pixels;
	}

	async function handleRemoveBackground() {
		if (!uploaded) return;
		if (removeBg) {
			if (processedImageNoBg) {
				processedImage = processedImageNoBg;
			} else {
				removeBGStatus = true;
				const blob = await fetch(image).then((res) => res.blob());
				const result = await removeBackground(blob);
				if (result instanceof Blob) {
					processedImageNoBg = URL.createObjectURL(result);
					processedImage = processedImageNoBg;
					removeBGStatus = false;
				}
			}
		} else {
			processedImageWithBg = processedImageWithBg || image;
			processedImage = processedImageWithBg;
		}

		const newImage = await getCroppedImg(processedImage, pixelCrop);
		if (newImage) {
			croppedImage = newImage;
			croppedImageWithFrame = await frameImage(croppedImage, branch);
		}
	}

	async function cropImage(
		image: string,
		pixelCrop: { x: number; y: number; width: number; height: number }
	) {
		let processedImage = image;
		const newImage = await getCroppedImg(processedImage, pixelCrop);
		if (newImage) {
			croppedImage = newImage;
			croppedImageWithFrame = await frameImage(croppedImage, branch);
		}
		handleRemoveBackground();
	}

	async function frameImage(image: string, branch: Branch) {
		if (typeof window !== 'undefined' && image && branch) {
			const newImage = await addFrame(image, branch);
			return newImage;
		}
		return null;
	}

	async function changeBranch() {
		if (croppedImage) {
			croppedImageWithFrame = await frameImage(croppedImage, branch);
		}
	}

	function recropImage() {
		croppedImage = null;
		croppedImageWithFrame = null;
	}

	function triggerFileInput() {
		fileInputRef?.click();
	}

	onMount(async () => {
		const previewImage = await createImage(PreviewSrc);
		const size = 1458;
		await cropImage(PreviewSrc, {
			x: (previewImage.width - size) / 2,
			y: (previewImage.height - size) / 2,
			width: size,
			height: size
		});
		image = PreviewSrc;
	});
</script>

<main class="flex flex-col items-center justify-center w-full h-full gap-4 p-4 mt-2">
	<div class="h-[6vh]" />

	<div class="flex flex-col gap-3 items-center">
		{#if croppedImageWithFrame}
			<div
				class="relative img-container w-auto aspect-square max-h-[360px]"
				on:click={triggerFileInput}
			>
				<img
					src={croppedImageWithFrame}
					alt="Cropped profile"
					width="400"
					height="400"
					class="rounded-lg shadow-lg aspect-square w-auto max-h-[360px]"
				/>

				<div
					class="hover-overlay text-center text-white text-lg font-semibold flex flex-col text-white"
				>
					<img src={reuploadSrc} alt="reupload" class="h-12 w-auto text-white [filter:invert(1)]" />
					Upload Image
				</div>
			</div>

			<label class="flex w-full items-center gap-3 cursor-pointer select-none">
				<div class="flex flex-col gap-2">
					<span class="text-sm text-white">Remove Background</span>
					<div class="flex items-center justify-between gap-2 w-full">
						<div class="relative">
							<input
								type="checkbox"
								bind:checked={removeBg}
								on:change={handleRemoveBackground}
								class="sr-only peer"
							/>
							<div
								class="w-14 h-8 bg-gray-500 peer-checked:bg-pink-500 transition-colors duration-300"
							/>
							<div
								class="absolute left-1 top-1 w-6 h-6 bg-white transition-transform duration-300 peer-checked:translate-x-5"
							/>
						</div>
						{#if removeBGStatus}
							<img src={LoadingSrc} alt="Loading" class="h-12 [filter:invert(1)] animate-spin" />
						{/if}
					</div>
				</div>
			</label>
			<div class="flex w-full flex-col gap-2">
				<div class="flex gap-2 flex-col w-full">
					<span class="text-sm text-white">Template</span>
					<select bind:value={branch} on:change={changeBranch} class="w-full p-4 rounded-lg">
						<option value="SP">YWC20</option>
						<option value="PG">Web Programming</option>
						<option value="CT">Web Content</option>
						<option value="MK">Web Marketing</option>
						<option value="DS">Web Design</option>
					</select>
				</div>

				<div class="flex gap-2 flex-col w-full">
					<!-- Hidden input used for reupload -->
					<input
						id="file"
						type="file"
						accept="image/*"
						bind:files
						bind:this={fileInputRef}
						on:change={onFileSelected}
						class="hidden"
					/>
				</div>

				<div class="flex w-full justify-between">
					<a
						href={croppedImageWithFrame}
						download="profile.png"
						class="w-[160px] px-4 py-2 font-bold rounded-lg text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white"
						>Download</a
					>

					<button
						class="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
						on:click={recropImage}
					>
						<div class="bg-[rgb(25,2,0)] text-white rounded-lg px-4 py-2 text-center w-[160px]">
							Recrop-Image
						</div>
					</button>
				</div>
			</div>
		{:else}
			<img src={LoadingSrc} alt="Loading" class="h-12 animate-spin [filter:invert(1)]" />
		{/if}
	</div>

	{#if image && !croppedImage}
		<Cropper {image} bind:crop bind:zoom on:cropcomplete={previewCrop} aspect={1} />
		<div class="absolute bottom-4 z-50">
			<Button on:click={() => cropImage(image, pixelCrop)}>Crop image</Button>
		</div>
	{/if}
</main>

<style>
	.hover-overlay {
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.4);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.3s ease;
		border-radius: 0.5rem;
	}

	.img-container:hover .hover-overlay {
		opacity: 1;
		cursor: pointer;
	}
</style>
