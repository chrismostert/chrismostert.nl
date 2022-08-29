<script>
	import '../app.css';
	import Fa from 'svelte-fa';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="max-w-6xl mx-auto px-4">
	<div class="flex h-screen items-center">
		<div>
			<slot />
		</div>
	</div>
	<div class="flex items-center absolute bottom-0 mb-4">
		<a
			href="https://www.linkedin.com/in/chrismostert/"
			class="mr-3 hover:scale-110 hover:-translate-y-1 transition"
			aria-label="Linkedin"
			rel="external"
			><Fa icon={faLinkedin} size="2x" />
		</a>
		<a
			href="https://github.com/chrismostert"
			class="mr-3 hover:scale-110 hover:-translate-y-1 transition"
			aria-label="Github"
			rel="external"
		>
			<Fa icon={faGithub} size="2x" />
		</a>
		<a
			href="mailto:chrismostert0@gmail.com"
			class="hover:scale-110 hover:-translate-y-1 transition"
			aria-label="Email"
			rel="external"
		>
			<Fa icon={faEnvelope} size="2x" />
		</a>
	</div>
</div>
