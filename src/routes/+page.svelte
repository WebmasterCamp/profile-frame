<script lang="ts">
	import Cropper from 'svelte-easy-crop';
	import getCroppedImg, { addFrame, createImage } from '../utils/crop';
	import Button from '../components/Button.svelte';
	import InputFile from '../components/InputFile.svelte';
	import Link from '../components/Link.svelte';
	import BranchOption from '../components/BranchOption.svelte';
	import { Branch } from '$lib/constants/branch';
	import PreviewSrc from '$lib/assets/preview.png';
	import { onMount } from 'svelte';
	import { removeBackground } from '@imgly/background-removal';

	let image = '';
	let croppedImage: string | null = null;
	let croppedImageWithFrame: string | null = null;
	let crop = { x: 0, y: 0 };
	let zoom = 1;
	let files: FileList;
	let pixelCrop = { x: 0, y: 0, width: 0, height: 0 };
	let branch: Branch = Branch.PROGRAMMING;
	let removeBg = false; // <-- เพิ่มตัวแปรสำหรับ checkbox

	// Update the image data when a new file is selected
	function onFileSelected() {
		if (files && files[0]) {
			image = '';
			const reader = new FileReader();
			reader.readAsDataURL(files[0]);
			reader.onload = () => {
				image = reader.result as string;
			};
			// Reset the crop
			croppedImage = null;
			croppedImageWithFrame = null;
		}
	}

	async function previewCrop(e: CustomEvent) {
		pixelCrop = e.detail.pixels;
	}

	async function cropImage(
		image: string,
		pixelCrop: { x: number; y: number; width: number; height: number }
	) {
		let processedImage = image;

		if (removeBg) {
			// ลบพื้นหลัง
			const blob = await fetch(image).then((res) => res.blob());
			const result = await removeBackground(blob);
			processedImage = URL.createObjectURL(result);
		}

		const newImage = await getCroppedImg(processedImage, pixelCrop);
		if (newImage) {
			croppedImage = newImage;
			croppedImageWithFrame = await frameImage(croppedImage, branch);
		}
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

	// Initialize the preview image
	onMount(async () => {
		const previewImage = await createImage(PreviewSrc);
		const size = 400;
		await cropImage(PreviewSrc, {
			x: (previewImage.width - size) / 2,
			y: (previewImage.height - size) / 2,
			width: size,
			height: size
		});
		image = PreviewSrc;
	});
</script>

<main class="flex flex-col items-center justify-center w-full h-full gap-8 p-4 mt-10">
	<div>
		<h1 class="font-bold text-4xl text-center">Profile Frame</h1>
		<p>Suggested profile size: 1280 x 1280</p>
	</div>
	<label class="flex items-center gap-2">
		<input type="checkbox" bind:checked={removeBg} />
		Remove Background
	</label>
	<div class="flex flex-col gap-2">
		<BranchOption bind:value={branch} on:change={changeBranch} />
		<InputFile id="file" type="file" accept="image/*" bind:files on:change={onFileSelected} />
	</div>

	{#if image && !croppedImage}
		<Cropper {image} bind:crop bind:zoom on:cropcomplete={previewCrop} aspect={1} />
		<div class="absolute bottom-4 z-50">
			<Button on:click={() => cropImage(image, pixelCrop)}>Crop image</Button>
		</div>
	{/if}

	<div class="flex flex-col gap-3 items-center">
		<h1 class="font-bold text-4xl text-center">Result</h1>
		{#if croppedImageWithFrame}
			<div>
				<img src={croppedImageWithFrame} alt="Cropped profile" width="400" height="400" />
			</div>
			<Link href={croppedImageWithFrame} download="profile.png" class="w-full text-center"
				>Download</Link
			>
			<Button class="w-full text-center" variant="outlined" on:click={recropImage}
				>Re-crop image</Button
			>
		{:else}
			<div class="w-[400px] h-[400px] flex items-center justify-center bg-slate-100">
				<h1 class="text-lg">Loading...</h1>
			</div>
		{/if}
	</div>
</main>
