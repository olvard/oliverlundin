<script>
	import { onMount } from 'svelte'

	let text = ''
	const originalText = 'OLIVER LUNDIN.'

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
		<!-- <img src={logo} alt="logo" /> -->
		<h1><a href="/">{text}</a></h1>
		<h2>PROJECTS</h2>
		<!-- <h1 class="offset">Lundin</h1> -->
	</div>

	<!-- <div class="nav">
		<a href="mailto:oliver.lundin@live.se"><h1>CONTACT</h1></a>
	</div> -->
</header>

<style>
	header {
		display: flex;
		flex-wrap: wrap;
		/* justify-content: left; */
		align-items: flex-start;
		flex: 0.6;
		padding-top: 0px;
		margin: 0px;
		background-color: white;
		width: 100vw;
	}

	.title {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-left: 60px;
	}

	h1 {
		font-family: 'Monomaniac One';
		margin: 0px;
		padding-bottom: 0px;
		color: #f16040;
		text-align: center;
		font-family: Monomaniac One;
		font-size: 74px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-bottom: -35px;
		margin-top: -25px;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 40px;
		}
	}

	h2 {
		margin: 0px;
		color: #f16040;
		text-align: center;
		font-family: Monomaniac One;
		font-size: 42px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
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
		color: #f16040;
	}

	@keyframes eff24-move {
		30% {
			-webkit-transform: translate3d(0, -5px, 0) rotate(5deg);
			transform: translate3d(0, -5px, 0) rotate(5deg);
		}
		50% {
			-webkit-transform: translate3d(0, -3px, 0) rotate(-4deg);
			transform: translate3d(0, -3px, 0) rotate(-4deg);
		}
		80% {
			-webkit-transform: translate3d(0, 0, 0) rotate(-3deg);
			transform: translate3d(0, 0, 0) rotate(-3deg);
		}
		100% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
	}

	a:hover {
		-webkit-animation-name: eff24-move;
		animation-name: eff24-move;
		-webkit-animation-duration: 0.4s;
		animation-duration: 0.4s;
		-webkit-animation-timing-function: linear;
		animation-timing-function: linear;
		-webkit-animation-iteration-count: 1;
		animation-iteration-count: 1;
		text-decoration: none;
	}
</style>
