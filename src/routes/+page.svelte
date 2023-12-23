<script>
	import Showcase from './Showcase.svelte'

	export let data
</script>

<svelte:head>
	<title>Oliver Lundin - Projects</title>
	<meta name="description" content="" />
</svelte:head>

<section class="grid-container">
	{#each data.summaries as { title, content, link, image, image2, image3, image4 }}
		<Showcase {content} text={title} {link} {image} {image2} {image3} {image4} />
	{/each}
</section>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, 287px); /* Set a fixed width for each item */
		gap: 20px; /* Adjust the gap between items as needed */
		width: 1000px;
		justify-content: center;
	}

	@media (max-width: 1000px) {
		.grid-container {
			width: 80%;
		}
	}
</style>
