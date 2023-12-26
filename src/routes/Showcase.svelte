<script>
	import { GalleryImage, Lightbox, LightboxGallery } from 'svelte-lightbox'

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
	<h1 role="none" on:click={openLightbox} on:keydown={handleKeyPress} tabindex="-1">{text}</h1>
	<p role="none" on:click={openLightbox} on:keydown={handleKeyPress} tabindex="-1" class="content">{content}</p>

	{#if link}
		<a href={link} target="_blank"
			>View more <svg
				xmlns="http://www.w3.org/2000/svg"
				width="14"
				height="14"
				viewBox="0 0 247 248"
				fill="none"
				style="margin-left: 5px; vertical-align: middle;"
			>
				<path
					d="M88.2249 32.4445H62.8249C47.0189 32.4445 39.11 32.4445 33.073 35.5206C27.7626 38.2262 23.4482 42.5406 20.7426 47.851C17.6665 53.888 17.6665 61.7969 17.6665 77.6029V184.847C17.6665 200.653 17.6665 208.553 20.7426 214.589C23.4482 219.899 27.7626 224.222 33.073 226.927C39.1041 230 47.0034 230 62.7784 230H170.11C185.885 230 193.773 230 199.804 226.927C205.114 224.222 209.444 219.895 212.149 214.585C215.222 208.554 215.222 200.663 215.222 184.888V159.444M229.333 88.8889V18.3334M229.333 18.3334H158.778M229.333 18.3334L130.555 117.111"
					stroke="#8159D8"
					stroke-width="25"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg></a
		>
	{/if}

	<Lightbox>
		<LightboxGallery
			bind:programmaticController={lightboxController}
			arrowsConfig={{ color: 'white', character: 'hide' }}
		>
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
					<video controls>
						<source src={image4} type="video/mp4" playsinline />

						This videoformat is not supported on your browser.
						<track kind="captions" />
					</video>
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
		transition: transform 0.5s ease;
		transform-style: preserve-3d;
		perspective: 1000px;
		position: relative;
		overflow: hidden;
	}

	.container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(57, 57, 57, 0.1); /* Adjust the overlay color */
		transition: opacity 0.3s ease;
		pointer-events: none;
		z-index: 1;
		opacity: 0;
	}

	.container:hover::before {
		opacity: 1;
	}

	.container:hover {
		transform: rotateY(10deg) scale(1.05); /* Adjust the degree of rotation and scale */
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Adjust the shadow values */
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
		font-family: 'Switzer';
		font-weight: 600;
		color: #8159d8;
		position: absolute;
		bottom: 16px;
		left: 16px;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
