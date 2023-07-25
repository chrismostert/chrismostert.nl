<script>
	import AccentedButton from '$lib/components/AccentedButton.svelte';
	import portrait from '$lib/images/portrait.jpg?run';
	import Img from '@zerodevx/svelte-img';
</script>

<svelte:head>
	<title>Chris Mostert | Over mij</title>
	<meta
		name="description"
		content="Gedreven, leergierig en met oog voor detail, dat is hoe ik te werk ga. Ik bijt me graag vast in een project met een passie voor het bedenken van creatieve oplossingen van boeiende problemen. Met mijn behulpzame houding werk ik graag met enthousiaste collega's van exploratieve data-analyse tot implementatie naar een resultaat van hoge kwaliteit."
	/>
</svelte:head>

<div class="my-4">
	<h1 class="text-6xl mb-4">Over <strong class="text-accent">mij</strong></h1>
	<div class="flex flex-wrap-reverse items-end gap-x-8 gap-y-4">
		<div>
			<p class="max-w-prose text-xl">
				Met mijn technische achtergrond heb ik skills in zowel Software Engineering als Data Science
				/ Machine Learning, en een passie voor beide. Het liefst combineer ik deze twee skillsets om
				complexe problemen op te lossen én de oplossing te implementeren door hoogwaardige software
				te schrijven.
			</p>
			<div class="mt-4">
				<AccentedButton href="/CV.pdf">CV</AccentedButton>
			</div>
		</div>
		<Img src={portrait} alt="Portretfoto" class="rounded-lg w-32 h-32" />
	</div>
</div>
