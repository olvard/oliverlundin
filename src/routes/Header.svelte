<script>
	import { page } from '$app/stores'
	import logo from '$lib/images/logo.svg'
	import mail from '$lib/images/mail.svg'
</script>

<header>
	<div class="corner">
		<img src={logo} alt="logo" />
	</div>

	<div class="corner">
		<a href="mailto:oliver.lundin@live.se"><h1>CONTACT</h1></a>
	</div>
</header>

<style>
	header {
		display: flex;
		/* flex-direction: column; */
		justify-content: center;
		align-items: center;
		flex: 0.6;
		padding-top: 50px;
	}

	h1 {
		font-family: 'Odibee sans';
		color: #ffc971;
		margin: 0 0 0 0;
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
		width: 40%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.corner img {
		width: 50%;
		height: 50%;
		object-fit: contain;
	}
</style>
