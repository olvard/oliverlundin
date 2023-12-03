<script>
	export let data
	import { GalleryImage, Lightbox, LightboxGallery, GalleryThumbnail } from 'svelte-lightbox'
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

				<LightboxGallery>
					<svelte:fragment slot="thumbnail">
						<div class="gallery">
							<GalleryThumbnail>
								<img src={data.post.image2} alt="Simple lightbox" />
							</GalleryThumbnail>
						</div></svelte:fragment
					>

					{#if data.post.image2}
						<GalleryImage>
							<img src={data.post.image2} alt="error" />
						</GalleryImage>
					{/if}
					{#if data.post.image3}
						<GalleryImage>
							<img src={data.post.image3} alt="error" />
						</GalleryImage>
					{/if}
					{#if data.post.image4}
						<GalleryImage>
							<img src={data.post.image4} alt="error" />
						</GalleryImage>
					{/if}
				</LightboxGallery>
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
		align-items: left;
		/* justify-content: center; */
	}

	.titlecard {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: left;
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
		text-align: left;
		font-family: 'Syne';
		font-weight: 400;
		font-size: larger;
		color: #d9d9d9;
	}

	.image-page {
		display: flex;
		flex-direction: row;
		align-items: left;
		justify-content: left;
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
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	/* .gallery {
		display: flex;
		flex-direction: row;
	} */

	.multimg-page img {
		margin-top: 10px;
		width: 50%;
		height: auto;
		border-radius: 5px;
	}

	h1 {
		font-family: 'Syne';
		color: #d9d9d9;
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
