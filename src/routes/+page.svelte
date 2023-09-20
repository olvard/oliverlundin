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
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<div class="projects">
			PROJECTS
			<br />
			<svg width="150" height="5" xmlns="http://www.w3.org/2000/svg">
				<line x1="0" y1="0" x2="150" y2="0" stroke="#ffc971" stroke-width="5" />
			</svg>
		</div>
	</h1>

	{#each data.summaries as { slug, title, image }}
		<a href="/{slug}"><Showcase imageSrc={image} text={title} /></a>
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
		max-width: 1200px; /* Set a maximum width for the gallery */
		margin: 0 auto;
	}

	h1 {
		width: 100%;
		font-family: "Odibee sans";
		color: #ffc971;
	}

	a {
		display: flex;
		width: max-content;
		align-items: center;
		justify-content: center;
	}

	.projects {
		display: inline-block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 100px 0;
	}
</style>
