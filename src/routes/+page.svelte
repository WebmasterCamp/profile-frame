<script lang="ts">
	import Cropper from 'svelte-easy-crop';
	import getCroppedImg, { addFrame } from '../utils/crop';
	import Button from '../components/Button.svelte';
	import InputFile from '../components/InputFile.svelte';
	import Link from '../components/Link.svelte';
	import BranchOption from '../components/BranchOption.svelte';
	import { Branch } from '$lib/constants/branch';

	let image = '';
	let croppedImage = '';
	let croppedImageWithFrame: Promise<string | null>;
	let crop = { x: 0, y: 0 };
	let zoom = 1;
	let files: FileList;
	let pixelCrop = { x: 0, y: 0, width: 0, height: 0 };
	let branch: Branch = Branch.PROGRAMMING;

	// Update the image data when a new file is selected
	function onFileSelected() {
		if (files && files[0]) {
			const reader = new FileReader();
			reader.readAsDataURL(files[0]);
			reader.onload = () => {
				image = reader.result as string;
			};
			croppedImage = '';
			croppedImageWithFrame = Promise.resolve(null);
		}
	}

	async function previewCrop(e: CustomEvent) {
		pixelCrop = e.detail.pixels;
	}

	async function cropImage() {
		const newImage = await getCroppedImg(image, pixelCrop);
		if (newImage) croppedImage = newImage;
	}

	async function frameImage(image: string, branch: Branch) {
		if (typeof window !== 'undefined' && image && branch) {
			const newImage = await addFrame(image, branch);
			return newImage;
		}
		return null;
	}

	$: croppedImageWithFrame = frameImage(croppedImage, branch);
</script>

<main class="flex flex-col items-center justify-center w-full h-full gap-8 p-4 mt-10">
	<h1 class="font-bold text-4xl">Profile Framing</h1>
	<div class="flex flex-col gap-2">
		<BranchOption bind:value={branch} />
		<InputFile id="file" type="file" accept="image/*" bind:files on:change={onFileSelected} />
	</div>
	{#if image && !croppedImage}
		<Cropper {image} bind:crop bind:zoom on:cropcomplete={previewCrop} aspect={1} />
		<div class="absolute bottom-4 z-50">
			<Button on:click={cropImage}>Crop Image</Button>
		</div>
	{/if}

	<!-- {#if image && !croppedImage}
		<h2>Preview</h2>
		<div class="h-[400px] w-[400px] relative border-2 border-slate-500 overflow-hidden">
			<img class="prof-pic" src={previewImage} alt="Profile example" />
		</div>
	{/if} -->

	{#await croppedImageWithFrame then data}
		{#if data !== null}
			<div class="flex flex-col gap-3 items-center">
				<h1 class="font-bold text-4xl text-center">Result</h1>
				<div class="border-2 border-slate-500">
					<img src={data} alt="Cropped profile" />
				</div>
				<Link href={data} download="profile.png" class="w-full text-center">Download</Link>
			</div>
		{/if}
	{/await}
</main>