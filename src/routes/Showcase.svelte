<script>
	import { Link } from 'svelte-routing'
	export let imageSrc = ''
	export let text = ''

	function handleImageError() {
		console.error('Image could not be loaded.')
	}
</script>

<div class="container">
	<img src={imageSrc} alt="error" on:error={handleImageError} />

	<div class="card2">
		<h1>{text}</h1>
	</div>
</div>

<style>
	img {
		max-width: 80%;
		max-height: 80%; /* Adjust the maximum image height as needed */
		border-radius: 5px;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 40px -10px;
		margin-top: 20px;
		border-style: solid;
		border-width: 10px;
		border-color: white;
	}

	h1 {
		margin-top: 16px; /* Adjust spacing between image and text */
		margin-left: 16px;
		margin-right: 16px;
		font-size: 22px; /* Adjust text size as needed */
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		/* text-decoration: none;
		color: black;
		padding: 10px 10px 10px 10px; */
		/* width: fit-content; */
	}

	.container {
		width: 40%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.card2 {
		background-color: white;
		width: 50%;
		margin-top: -25px;
		/* display: flex;
		align-items: center;
		justify-content: center; */
		box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 40px -20px;
		border-radius: 5px;
	}
</style>
