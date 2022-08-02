<script>
	import '../app.css';
	import Fa from 'svelte-fa';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="max-w-6xl mx-auto px-4">
	<div class="flex h-screen md:items-center">
		<div class="mt-4 md:mt-0">
			<slot />
		</div>
	</div>
	<div class="flex items-center absolute bottom-0 mb-4">
		<a
			href="https://www.linkedin.com/in/chrismostert/"
			class="mr-3 hover:scale-110 hover:-translate-y-1 transition"
			><Fa icon={faLinkedin} size="2x" />
		</a>
		<a
			href="https://github.com/chrismostert"
			class="mr-3 hover:scale-110 hover:-translate-y-1 transition"
		>
			<Fa icon={faGithub} size="2x" />
		</a>
		<a
			href="mailto:chrismostert0@gmail.com"
			class="hover:scale-110 hover:-translate-y-1 transition"
		>
			<Fa icon={faEnvelope} size="2x" />
		</a>
	</div>
</div>
