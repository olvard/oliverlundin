<script>
	import { onMount } from 'svelte'

	let text = ''
	const originalText = 'OLIVER LUNDIN'

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
	<div class="corner">
		<!-- <img src={logo} alt="logo" /> -->
		<h1><a href="/">{text}</a></h1>
		<!-- <h1 class="offset">Lundin</h1> -->
	</div>

	<div class="nav">
		<!-- <a href="mailto:oliver.lundin@live.se"><h1 class="nav">PROJECTS</h1></a> -->
		<a href="mailto:oliver.lundin@live.se"><h1>CONTACT</h1></a>
	</div>
</header>

<style>
	header {
		display: flex;
		/* flex-direction: column; */
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		padding-top: 50px;
	}

	h1 {
		/* display: inline-block; */
		font-family: 'Modak', cursive;
		color: #071e58;
		margin: 0px;
		padding-bottom: 0px;
		font-size: 34px;
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
		color: #071e58;
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

	.corner {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.nav {
		width: 50%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.nav h1 {
		font-size: 30px;
		/* padding-right: 100px; */
	}
</style>
