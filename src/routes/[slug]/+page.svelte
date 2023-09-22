<script>
	export let data
</script>

<h1>{data.post.title}</h1>
<div class="image-page">
	{#if data.post.image2 || data.post.image3}
		<div class="image-grid">
			<img src={data.post.image} alt="error" />
			{#if data.post.image2}
				<img src={data.post.image2} alt="error" />
			{/if}
			{#if data.post.image3}
				<img src={data.post.image3} alt="error" />
			{/if}
		</div>
	{:else}
		<div class="single-image">
			<img src={data.post.image} alt="error" />
		</div>
	{/if}
</div>

<style>
	.image-page {
		display: flex;
		/* align-items: center; */
		justify-content: center;
		height: 100vh;
		width: 70vw;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 40px -10px;
	}

	h1 {
		font-family: 'Modak', cursive;
		color: #071e58;
	}

	.image-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
		grid-auto-rows: 240px;
	}

	.image-grid img {
		max-width: 100%;
		height: auto;
		border-radius: 5px;
	}

	.single-image {
		text-align: center;
	}

	.single-image img {
		max-width: 100%;
		height: auto;
		border-radius: 5px;
	}
</style>
