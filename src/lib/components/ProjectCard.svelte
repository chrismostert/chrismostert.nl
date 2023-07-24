<script>
	export let data;
	import { FxReveal as Img } from '@zerodevx/svelte-img';
	import AccentedButton from './AccentedButton.svelte';
</script>

<div class="shadow-md rounded-lg overflow-clip max-w-2xl">
	{#if data.img}
		<Img src={data.img} alt={`Cover image for ${data.title}`} class="w-full h-52 object-cover" />
	{/if}
	<div class="p-8">
		<div class="flex flex-col">
			<h2 class="text-4xl font-medium">{data.title}</h2>
			<div class="flex flex-wrap gap-x-2 gap-y-2 mb-4 mt-2">
				{#each data.tags as tag}
					<div
						class="transition-colors text-xs text-accent font-semibold border-2 px-2 border-accent hover:bg-accent hover:text-white cursor-pointer"
					>
						{tag}
					</div>
				{/each}
			</div>
		</div>

		<div class="project-description">
			<svelte:component this={data.description} />
		</div>

		<div class="mt-6 flex flex-wrap gap-x-2 gap-y-2">
			{#if data.link}
				<AccentedButton href={data.link} external={true} smaller={true} icon="link"
					>Website</AccentedButton
				>
			{/if}
			{#if data.code}
				<AccentedButton href={data.code} external={true} smaller={true} icon="github"
					>Code</AccentedButton
				>
			{/if}
		</div>
	</div>
</div>
