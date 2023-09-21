<script>
	import welcome from "$lib/images/svelte-welcome.webp"
	import mtd from "$lib/images/mtd.jpg"
	import possumtory from "$lib/images/possumtory.png"
	import merit from "$lib/images/merit.jpg"
	import Showcase from "./Showcase.svelte"

	export let data
	console.log(data)
</script>

<svelte:head>
	<title>Oliver Lundin - Projects</title>
	<meta name="description" content="Svelte demo app" />
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
		flex: 0.6;
		padding: 20px; /* Add some spacing around the items */
		max-width: 90vw; /* Set a maximum width for the gallery */
		margin: 0 auto;
	}
</style>
