<script>
	export let data;
</script>

<div class="shadow-md rounded-lg overflow-clip max-w-2xl">
	<img src={data.img} class="w-full max-h-60 object-cover" />
	<div class="p-8">
		<div class="flex flex-col">
			<h2 class="text-2xl font-medium">{data.title}</h2>
			<div class="flex flex-wrap gap-x-2 mb-2">
				{#each data.tags as tag}
					<div>
						{tag}
					</div>
				{/each}
			</div>
		</div>
		<p>{data.description}</p>
	</div>
</div>
