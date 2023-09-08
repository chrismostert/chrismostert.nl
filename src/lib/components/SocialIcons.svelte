<script>
	import Fa from 'svelte-fa';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="flex items-center">
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
		href="mailto:mail@chrismostert.nl"
		class="hover:scale-110 hover:-translate-y-1 transition"
		aria-label="Email"
		rel="external"
	>
		<Fa icon={faEnvelope} size="2x" />
	</a>
</div>
