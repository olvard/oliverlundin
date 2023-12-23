<script>
	import { onMount } from 'svelte'

	let text = ''
	const originalText = 'Oliver Lundin.'

	onMount(() => {
		// Function to simulate typing effect
		function typeText() {
			if (text.length < originalText.length) {
				text = originalText.slice(0, text.length + 1)
				setTimeout(typeText, 120)
			}
		}

		typeText()
	})
</script>

<header>
	<div class="title">
		<h1><a href="/">{text}</a></h1>
		<h2>Projects</h2>
	</div>
</header>

<style>
	header {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
		flex: 0.6;
		padding-top: 0px;
		background-color: #000000;
		width: 100vw;
	}

	.title {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		width: 900px;
	}

	h1 {
		font-family: 'Switzer';
		font-weight: 900;
		margin: 0px;
		padding-bottom: 0px;
		color: #d9d9d9;
		text-align: center;
		font-size: 34px;
		line-height: normal;
		margin-bottom: -5px;
		margin-top: 15px;
	}

	h2 {
		margin: 0px;
		color: #d9d9d9;
		text-align: center;
		font-family: 'Switzer';
		font-weight: 900;
		font-size: 18px;
		line-height: normal;
		margin-bottom: 1px;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 16px;
			margin-top: 10px;
		}

		h2 {
			font-size: 12px;
			margin-top: 0px;
			margin-bottom: 5px;
		}

		.title {
			margin-left: 15px;
		}
	}

	a {
		overflow: visible;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		-webkit-transition: color 0.4s;
		transition: color 0.4s;
		color: #d9d9d9;
	}

	a:hover {
		text-decoration: none;
	}
</style>
