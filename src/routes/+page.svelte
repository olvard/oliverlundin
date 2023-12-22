<script>
	import Showcase from './Showcase.svelte'

	export let data
	console.log(data)
</script>

<svelte:head>
	<title>Oliver Lundin - Projects</title>
	<meta name="description" content="" />
</svelte:head>

<section class="grid-container">
	{#each data.summaries as { slug, title, content }}
		<Showcase {content} text={title} ref="/{slug}" />
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
