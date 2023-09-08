<script>
	export let data;
	import { FxReveal as Img } from '@zerodevx/svelte-img';
	import AccentedButton from './AccentedButton.svelte';
</script>

<div class="shadow-md rounded-lg overflow-clip max-w-2xl">
	<!-- Optional cover image -->
	{#if data.img}
		<Img src={data.img} alt={`Cover image for ${data.title}`} class="w-full h-52 object-cover" />
	{/if}

	<!-- Heading -->
	<div class="p-8">
		<div class="flex flex-col">
			<h2 class="text-4xl font-medium">{data.title}</h2>
			{#if data.tags}
				<div class="flex flex-wrap gap-x-2 gap-y-2 mt-2">
					{#each data.tags as tag}
						<div
							class="transition-colors text-xs text-accent font-semibold border-2 px-2 border-accent"
						>
							{tag}
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<!-- Body text -->
		<div class="project-description mt-4">
			<svelte:component this={data.description} />
		</div>

		<!-- Button logic -->
		{#if data.link || data.scholar || data.code || data.pdf}
			<div class="flex flex-wrap gap-x-2 gap-y-2 mt-6">
				{#if data.link}
					<AccentedButton href={data.link} external={true} smaller={true} icon="link"
						>Website</AccentedButton
					>
				{/if}

				{#if data.scholar}
					<AccentedButton href={data.scholar} external={true} smaller={true} icon="scholar">
						Scholar
					</AccentedButton>
				{/if}

				{#if data.pdf}
					<AccentedButton href={data.pdf} external={true} smaller={true} icon="pdf">
						PDF
					</AccentedButton>
				{/if}

				{#if data.code}
					{#if typeof data.code == 'string'}
						<AccentedButton href={data.code} external={true} smaller={true} icon="github"
							>Code</AccentedButton
						>
					{:else}
						{#each Object.entries(data.code) as codelink}
							<AccentedButton href={codelink[1]} external={true} smaller={true} icon="github"
								>{codelink[0]}</AccentedButton
							>
						{/each}
					{/if}
				{/if}
			</div>
		{/if}
	</div>
</div>
