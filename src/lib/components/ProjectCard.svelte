<script>
	export let data;
</script>

<div class="shadow-md rounded-lg overflow-clip max-w-max">
	<img src={data.img} class="w-full max-h-60 object-cover" />
	<div class="p-8">
		<div class="flex flex-wrap items-center">
			<h2 class="text-2xl font-medium mb-2">{data.title}</h2>
			<div class="flex">
				{#each data.tags as tag}
					<div>
						{tag}
					</div>
				{/each}
			</div>
		</div>
		<p class="max-w-prose">{data.description}</p>
	</div>
</div>
