<script>
	export let data
</script>

<div class="titlecard">
	<h1><a class="symbol" href="/">&#60 </a>{data.post.title}</h1>
	<span>{@html data.post.content}</span>
</div>
<div class="container">
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
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
	}

	.titlecard {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	a {
		font-family: monospace;
		color: #f16040;
	}

	.symbol {
		font-size: 38px;
	}

	span {
		width: 40vw;
		margin: 5px;
		padding: 5px;
		text-align: center;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 40px -10px;
		font-family: monospace;
		font-size: larger;
	}

	.image-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 80vw;
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
		font-family: 'Monomaniac One';
		color: gray;
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

	/* .container{
		width: auto;
	} */

	@media (max-width: 768px) {
		.container {
			max-width: 100vw;
			height: 100vh;
		}
		span {
			width: 90vw;
		}
		.image-page img {
			width: 90%;
		}
	}
</style>
