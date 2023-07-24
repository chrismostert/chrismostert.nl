<script>
	export let href,
		external = false,
		smaller = false,
		icon;
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons';
</script>

<a data-sveltekit-preload-data={!external && 'hover'} {href}>
	<button
		class={`border-2 pb-2 pt-1 px-4 font-semibold ${
			smaller ? 'text-lg' : 'text-2xl'
		} text-accent border-accent hover:text-white hover:bg-accent transition`}
	>
		<div class="flex items-center gap-x-2">
			{#if icon == 'github'}
				<Fa icon={faGithub} />
			{:else if icon == 'link'}
				<Fa icon={faGlobe} />
			{/if}
			<slot />
		</div>
	</button>
</a>
