<script>
	export let data;
</script>

<div class="shadow-md rounded-lg overflow-clip mt-4">
	<img src={data.img} class="w-full max-h-60 object-cover" />
	<div class="p-8">
		<h2 class="text-2xl font-medium mb-2">{data.title}</h2>
		<p class="max-w-prose">{data.description}</p>
	</div>
</div>
