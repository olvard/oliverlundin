<script>
	import Header from './Header.svelte'
	import './styles.css'
	import bar from '$lib/images/bar.svg'
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>

	<footer>
		<p>Made by Oliver Lundin</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	p {
		font-family: 'Syne';
		color: antiquewhite;
		opacity: 20%;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		justify-content: center;
		align-items: center;
		/*max-width: 64rem;*/
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;

		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer p {
		font-family: monospace;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
