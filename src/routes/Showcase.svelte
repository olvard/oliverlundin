<script>
	import { GalleryImage, Lightbox, LightboxGallery } from 'svelte-lightbox'
	import git from '$lib/images/github.svg'

	export let content = ''
	export let text = ''
	export let link = ''
	export let image = ''
	export let image2 = ''
	export let image3 = ''
	export let image4 = ''

	let lightboxController

	function openLightbox() {
		lightboxController.open()
	}

	function handleKeyPress(event) {
		if (event.key === 'Enter') {
			event.preventDefault()
			openLightbox()
		}
	}
</script>

<div class="container">
	<h1 role="button" on:click={openLightbox} on:keydown={handleKeyPress} tabindex="0">{text}</h1>
	<p role="button" on:click={openLightbox} on:keydown={handleKeyPress} tabindex="0" class="content">{content}</p>

	{#if link}
		<a href={link}>Check it out here</a>
	{/if}

	<Lightbox>
		<LightboxGallery bind:programmaticController={lightboxController}>
			{#if image}
				<GalleryImage>
					<img src={image} alt="error" />
				</GalleryImage>
			{/if}
			{#if image2}
				<GalleryImage>
					<img src={image2} alt="error" />
				</GalleryImage>
			{/if}
			{#if image3}
				<GalleryImage>
					<img src={image3} alt="error" />
				</GalleryImage>
			{/if}
			{#if image4}
				<GalleryImage>
					<img src={image4} alt="error" />
				</GalleryImage>
			{/if}
		</LightboxGallery>
	</Lightbox>
</div>

<style>
	h1 {
		margin-top: 16px; /* Adjust spacing between image and text */
		margin-left: 16px;
		margin-right: 16px;
		font-size: 24px; /* Adjust text size as needed */
		font-family: 'Switzer', sans-serif;
		font-weight: 600;
		text-decoration: none;
		color: #d9d9d9;
		margin-bottom: 0px;
		cursor: pointer;
	}

	.container {
		position: relative;
		background-color: #111111;
		height: 222px;
		border: 2px solid;
		border-color: #8159d8;
		border-radius: 5px;
		transition: transform 0.3s ease; /* Adding transition for smooth animation */
	}

	.container:hover {
		transform: skew(-10deg); /* Adjust the skew angle as needed */
	}

	.content {
		transition: color 0.3s ease;
		font-family: 'Switzer', sans-serif;
		font-weight: 400;
		font-size: 14px;
		color: white;
		opacity: 30%;
		margin-left: 16px;
		margin-right: 16px;
		cursor: pointer;
	}

	a {
		text-decoration: none;
		font-family: monospace;
		color: #8159d8;
		position: absolute;
		bottom: 16px;
		left: 16px;
	}
</style>
