<script>
	import { onMount } from "svelte"

	let text = ""
	const originalText = "OLIVER LUNDIN"

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
		<h1>{text}</h1>
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
		font-family: "Modak", cursive;
		color: #071e58;
		margin: 0px;
		padding-bottom: 0px;
		font-size: 34px;
	}

	a {
		/* color: #ffc971; */
		transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
	}

	a:hover {
		color: #fff;
		box-shadow: inset 200px 0 0 0 #54b3d6;
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
