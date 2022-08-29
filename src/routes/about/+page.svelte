<script context="module">
	export const prerender = true;
	export const hydrate = false;
</script>

<svelte:head>
	<title>Chris Mostert | Over mij</title>
	<meta
		name="description"
		content="Met mijn technische achtergrond heb ik skills in zowel Software Engineering als Data Science / Machine Learning, en een passie voor beide. 
	Het liefst combineer ik deze twee skillsets om complexe problemen op te lossen én de oplossing te implementeren door hoogwaardige software te schrijven.

	Gedreven, leergierig en met oog voor detail, dat is hoe ik te werk ga. Ik bijt me graag vast in een project met een passie voor het bedenken van creatieve oplossingen van boeiende problemen.
Met mijn behulpzame houding werk ik graag met enthousiaste collega's van exploratieve data-analyse tot implementatie naar een resultaat van hoge kwaliteit."
	/>
</svelte:head>

<h1 class="text-6xl mb-4">Over <strong class="text-accent">mij</strong></h1>
<div class="flex flex-wrap-reverse items-end gap-x-8 gap-y-4">
	<div>
		<p class="max-w-prose text-xl">
			Met mijn technische achtergrond heb ik skills in zowel Software Engineering als Data Science /
			Machine Learning, en een passie voor beide. Het liefst combineer ik deze twee skillsets om
			complexe problemen op te lossen én de oplossing te implementeren door hoogwaardige software te
			schrijven.
		</p>
		<a href="/CV.pdf">
			<button
				class="mt-8 border-2 pb-2 pt-1 px-4 font-semibold text-2xl text-accent border-accent hover:text-white hover:bg-accent transition"
			>
				CV
			</button>
		</a>
	</div>
	<img src="images/portrait.jpg" alt="Portretfoto" class="w-32 rounded-lg mx-auto" />
</div>
