<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLSelectAttributes } from 'svelte/elements';

	let className: string = '';
	export { className as class };
	export let value: string = '';

	interface $$Props extends HTMLSelectAttributes {
		class?: string;
	}

	let select: HTMLSelectElement;
</script>

<select
	{...$$restProps}
	bind:value
	on:change
	class={twMerge(
		'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ',
		className
	)}
	bind:this={select}
>
	<option value="SP">YWC20</option>
	<option value="CT">Web Content</option>
	<option value="MK">Web Marketing</option>
	<option value="PG">Web Programming</option>
	<option value="DS">Web Design</option>
</select>
