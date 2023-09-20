<script>
	export let text
	export let imageSrc
</script>

<div class="image-page">
	<img src={imageSrc} alt={text} />
	<p>{text}</p>
</div>

<style>
	.image-page img {
		width: 20%;
	}
</style>
