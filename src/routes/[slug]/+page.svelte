<script>
	export let data
</script>

<h1><a href="/">&#60 </a>{data.post.title}</h1>
<span />
<div class="image-page">
	{#if data.post.image2 || data.post.image3}
		<div class="multimg-page">
			<!-- <img src={data.post.image} alt="error" /> -->
			{#if data.post.image2}
				<img src={data.post.image2} alt="error" />
			{/if}
			{#if data.post.image3}
				<img src={data.post.image3} alt="error" />
			{/if}
			{#if data.post.image4}
				<img src={data.post.image4} alt="error" />
			{/if}
		</div>
	{:else}
		<div class="single-image">
			<img src={data.post.image} alt="error" />
		</div>
	{/if}
</div>

<style>
	a {
		font-family: monospace;
		color: #071e58;
	}

	.image-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 50vw;
	}

	.image-page img {
		margin-top: 10px;
		width: 70%;
		height: auto;
		border-radius: 5px;
	}

	.multimg-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.multimg-page img {
		margin-top: 10px;
		width: 50%;
		height: auto;
		border-radius: 5px;
	}

	h1 {
		font-family: monospace;
		color: #071e58;
		margin: 4px;
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
