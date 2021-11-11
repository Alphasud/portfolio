<script>
	import Header from '$lib/Header.svelte';
	import '../app.css';
	import { fade, fly } from 'svelte/transition';
  	import { darkTheme } from "/src/store.js";
  	
	let darkMode;

  	darkTheme.subscribe(value => {
    	darkMode = value;
  	});

	let visible = true;
	setTimeout(() => {visible = false}, 1000);
	let slide = false;
	setTimeout(() => {slide = true}, 100);
</script>
<div class={!darkMode ? 'wrapper' : 'wrapper dark'}>
	{#if visible}
		<div transition:fade="{{ duration: 2000 }}" class="loader">
	{#if slide}
		<h1 in:fly="{{ y: -1000, duration: 1500 }}">Hello 👋</h1>
	{/if}
	</div>
	{/if}
	<Header />
	<main>
		<slot />
	</main>
	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>


<style>
.wrapper {
  width: 90%;
  min-height: 100vh;
  margin: 0 auto;
  transition: color 0.5s ease-in, background-color 0.2s ease-in;
  background-color: var(--light);
  color: var(--dark);
}
@media screen and (min-width: 1100px) {
  .wrapper {
    width: 100rem;
    margin: 0 auto;
  }
}	
.loader {
	position: absolute;
	visibility: visible;
	top: 0;
	left: 0;
	min-height: 100vh;
	width: 100%;
	z-index: 100;
	background-color: var(--dark);
	color: aliceblue;
	display: flex;
	justify-content: center;
	align-items: center;
}

	h1 {
		margin-top: -10rem;
		font-size: 5rem;
	}
	main {
  		display: flex;
  		flex-direction: column;
  		transition: all 0.1s ease;
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
