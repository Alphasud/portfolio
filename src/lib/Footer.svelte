<script>
	import {isFormVisible} from "/src/store.js";
	let isVisible;
  	isFormVisible.subscribe(value => {
    	isVisible = value;
  	});
</script>
<footer class={isVisible ? "blur" : ""}>
	<p>Charles Denneulin <i class="far fa-copyright fa-rotate-180"></i>{new Date().getFullYear()}.</p>
	<p>Happily coded with SvelteKit :)</p>
	<a href="https://github.com/Alphasud/portfolio" target="_blank" rel="noopener noreferrer"><i class="fas fa-chevron-left"></i> Source Code <i class="fas fa-chevron-right"></i></a>
	<p>Thanks, <a href="https://kit.svelte.dev">kit.svelte.dev</a></p>
</footer>

<style lang="scss">
footer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 40px;
	p {margin: 0;text-align: center;}
	a {font-weight: bold;}
}
@media (max-width: 480px) {
	footer {
		padding: 30px 0;
	}
}
</style>