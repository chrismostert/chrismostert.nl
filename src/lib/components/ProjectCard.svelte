<script>
	export let data;
</script>

<div class="shadow-md rounded-lg overflow-clip max-w-2xl">
	<img src={data.img} alt={`Cover image for ${data.title}`} class="w-full h-52 object-cover" />
	<div class="p-8">
		<div class="flex flex-col">
			<h2 class="text-2xl font-medium">{data.title}</h2>
			<div class="flex flex-wrap gap-x-2 mb-2 mt-2">
				{#each data.tags as tag}
					<div
						class="transition-colors text-accent font-semibold border-2 px-2 border-accent hover:bg-accent hover:text-white cursor-pointer"
					>
						{tag}
					</div>
				{/each}
			</div>
		</div>
		<p>
			<svelte:component this={data.description} />
		</p>
	</div>
</div>
