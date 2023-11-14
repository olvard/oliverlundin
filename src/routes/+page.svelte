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
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		padding: 0px;
		/* width: 100vw;	 */
	}

	@media (max-width: 768px) {
		section {
			max-width: 100vw;
		}
	}
</style>
