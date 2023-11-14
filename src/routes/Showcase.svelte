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
	<img src={imageSrc} alt="error" on:error={handleImageError} />

	<div class="card2">
		<a href={ref}><h1>{text}</h1></a>
	</div>
</div>

<style>
	img {
		width: 655px;
		height: 360px;
		border-radius: 5px;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 40px -10px;
		margin-top: 20px;
		border-style: solid;
		border-width: 10px;
		border-color: white;
	}

	img:hover {
		border-color: #f16040;
	}

	h1 {
		margin-top: 16px; /* Adjust spacing between image and text */
		margin-left: 16px;
		margin-right: 16px;
		font-size: 22px; /* Adjust text size as needed */
		font-family: monospace;
		text-decoration: none;
		color: black;
	}

	.container {
		width: 45%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.card2 {
		background-color: white;
		width: 50%;
		margin-top: -25px;
		overflow: hidden;
		transition: transform 0.3s ease;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 40px -20px;
		border-radius: 5px;
		display: flex;
		justify-content: center;
	}

	.card2:hover {
		transform: scale(1.1); /* Zoom in by 10% on hover */
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
			width: 90%;
			height: 300px;
		}
	}

	@media (max-width: 1068px) {
		.container {
			width: 100%;
		}

		img {
			width: 80%;
			height: 80%;
		}

		.card2 {
			width: 70%;
		}
	}
</style>
