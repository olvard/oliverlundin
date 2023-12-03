<script>
	import { Link } from 'svelte-routing'
	export let imageSrc = ''
	export let text = ''
	export let ref = ''

	function handleImageError() {
		console.error('Image could not be loaded.')
	}
</script>

<div class="container">
	<!-- <a class="picturelink" href={ref}><img src={imageSrc} alt="error" on:error={handleImageError} /></a> -->
	<img src={imageSrc} alt="error" on:error={handleImageError} />

	<a href={ref}><h1>{text}</h1></a>
</div>

<style>
	img {
		width: 260px;
		height: 160px;

		box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 40px -10px;
	}

	h1 {
		margin-top: 16px; /* Adjust spacing between image and text */
		margin-left: 16px;
		margin-right: 16px;
		font-size: 24px; /* Adjust text size as needed */
		font-family: 'Syne';
		font-weight: 700;
		text-decoration: none;
		color: #d9d9d9;
		margin-bottom: 0px;
	}

	.container {
		width: 35%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		margin-bottom: -10px;
		/* border-style: solid;
		border-width: 7px;
		border-color: #d9d9d9; */
	}

	a {
		transition: color 0.3s ease;
	}

	a:hover {
		text-decoration: none;
		color: #071e58;
	}

	@media (max-width: 1535px) {
		img {
			width: 100%;
			height: 250px;
			/* margin-top: 30px;
			margin-left: 20px; */
		}
	}

	@media (max-width: 1068px) {
		.container {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		img {
			width: 100%;
			height: 90%;
		}
	}
</style>
