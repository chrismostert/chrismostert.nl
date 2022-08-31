<script>
	import SocialIcons from '$lib/components/SocialIcons.svelte';
</script>

<div class="absolute top-1/2 -translate-y-1/2">
	<slot />
</div>
<div class="absolute bottom-4">
	<SocialIcons />
</div>
