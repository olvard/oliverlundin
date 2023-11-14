<script>
	import Showcase from './Showcase.svelte'

	export let data
	console.log(data)
</script>

<svelte:head>
	<title>Oliver Lundin - Projects</title>
	<meta name="description" content="" />
</svelte:head>

<section>
	{#each data.summaries as { slug, title, image }}
		<Showcase imageSrc={image} text={title} ref="/{slug}" />
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap; /* Allow items to wrap to the next row */
		justify-content: center; /* Space items evenly */
		align-items: flex-start;
		padding: 0px; /* Add some spacing around the items */
		max-width: 100vw; /* Set a maximum width for the gallery */
	}

	@media (max-width: 768px) {
		section {
			max-width: 100vw;
		}
	}
</style>
