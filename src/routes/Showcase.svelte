<script>
	export let content = ''
	export let text = ''
	export let ref = ''
</script>

<div class="container">
	<a href={ref}><h1>{text}</h1></a>
	<p class="content">{content}</p>
</div>

<style>
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
		background-color: #111111;
		height: 222px;
		border: 2px solid;
		border-color: #8159d8;
	}

	.content {
		transition: color 0.3s ease;
		font-family: 'Syne';
		font-weight: 400;
		font-size: 12px;
		color: white;
		opacity: 20%;
		margin-left: 16px;
		margin-right: 16px;
	}

	a:hover {
		text-decoration: none;
		color: #071e58;
	}
</style>
