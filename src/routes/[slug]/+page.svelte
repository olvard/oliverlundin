<script>
	export let data
</script>

<h1>{data.post.title}</h1>
<!-- <div>{@html data.post.image}</div> -->
<div class="image-page"><img src={data.post.image} alt="error" /></div>

<style>
	.image-page {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 60vw;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 40px -10px;
	}

	h1 {
		font-family: 'Odibee sans';
		color: #ffc971;
	}

	.image-page img {
		width: 65%;
		border-style: solid;
		border-width: 10px;
		border-color: white;
		/* box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 40px -10px; */
		margin: 5px;
	}
</style>
