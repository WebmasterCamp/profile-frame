import { Branch } from '$lib/constants/branch';
import CTSrc from '../lib/assets/YWC20/CT.png';
import DSScr from '../lib/assets/YWC20/DS.png';
import MKSrc from '../lib/assets/YWC20/MK.png';
import PGSrc from '../lib/assets/YWC20/PG.png';
import SPSrc from '../lib/assets/YWC20/SP.png';
import BGSrc from '../lib/assets/YWC20/SPBG.png';
import CTBG from '../lib/assets/YWC20/CTBG.png';
import DSBG from '../lib/assets/YWC20/DSBG.png';
import MKBG from '../lib/assets/YWC20/MKBG.png';
import PGBG from '../lib/assets/YWC20/PGBG.png';

import resizeImageData from 'resize-image-data';

const DEFAULT_WIDTH = 1440;
const DEFAULT_HEIGHT = 1440;
const OFFSET = (1440 - 1280) / 2 * 0;

async function selectImageFromBranch(branch: Branch) {
	switch (branch) {
		case Branch.MARKETING:
			return await createImage(MKSrc);
		case Branch.PROGRAMMING:
			return await createImage(PGSrc);
		case Branch.DESIGN:
			return await createImage(DSScr);
		case Branch.CONTENT:
			return await createImage(CTSrc);
		case Branch.SPECIAL:
			return await createImage(SPSrc);
		default:
			return await createImage(SPSrc);
	}
}
function selectBackgroundFromBranch(branch: Branch): string {
	switch (branch) {
		case Branch.MARKETING:
			return MKBG;
		case Branch.PROGRAMMING:
			return PGBG;
		case Branch.DESIGN:
			return DSBG;
		case Branch.CONTENT:
			return CTBG;
		case Branch.SPECIAL:
			return BGSrc;
		default:
			return BGSrc; // fallback
	}
}


export function createImage(url: string): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.addEventListener('load', () => resolve(image));
		image.addEventListener('error', (error) => reject(error));
		image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
		image.src = url;
	});
}

export function toImageData(image: HTMLImageElement): ImageData {
	const canvas = document.createElement('canvas');
	canvas.width = image.width;
	canvas.height = image.height;

	const ctx = canvas.getContext('2d');
	if (!ctx) {
		throw new Error('Canvas context is null');
	}

	ctx.drawImage(image, 0, 0);
	return ctx.getImageData(0, 0, image.width, image.height);
}

export async function toHTMLImageElement(imageData: ImageData): Promise<HTMLImageElement> {
	const canvas = document.createElement('canvas');
	canvas.width = imageData.width;
	canvas.height = imageData.height;

	const ctx = canvas.getContext('2d');
	if (!ctx) {
		throw new Error('Canvas context is null');
	}

	ctx.putImageData(imageData, 0, 0);
	return await createImage(canvas.toDataURL('image/png', 1.0));
}

export function getRadianAngle(degreeValue: number) {
	return (degreeValue * Math.PI) / 180;
}

/**
 * Returns the new bounding area of a rotated rectangle.
 */
export function rotateSize(width: number, height: number, rotation: number) {
	const rotRad = getRadianAngle(rotation);

	return {
		width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
		height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height)
	};
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
export default async function getCroppedImg(
	imageSrc: string,
	pixelCrop: { x: number; y: number; width: number; height: number },
	rotation = 0,
	flip = { horizontal: false, vertical: false },
	desiredSize = { width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT }
): Promise<string | null> {
	const image = await createImage(imageSrc);
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');

	if (!ctx) {
		return null;
	}

	const rotRad = getRadianAngle(rotation);

	// calculate bounding box of the rotated image
	const { width: bBoxWidth, height: bBoxHeight } = rotateSize(image.width, image.height, rotation);

	// set canvas size to match the bounding box
	canvas.width = bBoxWidth;
	canvas.height = bBoxHeight;

	// translate canvas context to a central location to allow rotating and flipping around the center
	ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
	ctx.rotate(rotRad);
	ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
	ctx.translate(-image.width / 2, -image.height / 2);

	// draw rotated image
	ctx.drawImage(image, 0, 0);

	// croppedAreaPixels values are bounding box relative
	// extract the cropped image using these values
	const data = ctx.getImageData(pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height);

	// Scale image data to desired size
	const resizedData = await resizeImageData(data, desiredSize.width, desiredSize.height);
	if (!resizedData) {
		return null;
	}
	const resizedImage = await toHTMLImageElement(
		new ImageData(resizedData.data, desiredSize.width, desiredSize.height)
	);

	// set canvas width to final desired crop size - this will clear existing context
	canvas.width = desiredSize.width;
	canvas.height = desiredSize.height;

	// paste generated rotate image at the top left corner
	ctx.drawImage(resizedImage, 0, 0, desiredSize.width, desiredSize.height);

	// As Base64 string
	return canvas.toDataURL('image/png', 1.0);
}

export async function addFrame(
	imageSrc: string,
	branch: Branch,
	desiredSize = { width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT }
) {
	// Prepare image, bedge, and background
	const [image, badge, background] = await Promise.all([
		createImage(imageSrc),
		selectImageFromBranch(branch),
		createImage(selectBackgroundFromBranch(branch))

	]);

	// Preoare background
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');

	if (!ctx) {
		return null;
	}

	canvas.width = desiredSize.width;
	canvas.height = desiredSize.height;
	ctx.drawImage(background, 0, 0, desiredSize.width, desiredSize.height);
	ctx.drawImage(
		image,
		OFFSET,
		OFFSET,
		desiredSize.width - 2 * OFFSET * 0,
		desiredSize.height - 2 * OFFSET * 0
	);
	ctx.drawImage(badge, 0, 0, desiredSize.width, desiredSize.height);

	// As Base64 string
	return canvas.toDataURL('image/png', 1.0);
}
