<script>
	import {isFormVisible} from "/src/store.js";
	let isVisible;
  	isFormVisible.subscribe(value => {
    	isVisible = value;
  	});
</script>
<footer class={isVisible ? "blur" : ""}>
	<p>Charles Denneulin <i class="far fa-copyright fa-rotate-180"></i>{new Date().getFullYear()}.</p>
	<p>Happily coded with <strong>SvelteKit</strong> and <strong>Strapi</strong> :)</p>
	<p class="source-code">
		<i class="fas fa-chevron-left"></i>
		Source Code:
		<a href="https://github.com/Alphasud/portfolio" target="_blank" rel="noopener noreferrer">Front-End </a>
		/
		<a href="https://github.com/Alphasud/portfolio-strapi-backend" target="_blank" rel="noopener noreferrer"> Back-End</a>
		<i class="fas fa-chevron-right"></i>
	</p>
	<p>Deployed on <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a> and <a href="https://www.heroku.com/home" target="_blank" rel="noopener noreferrer">Heroku</a></p>
	<p>Thanks, <a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer">kit.svelte.dev</a> and <a href="https://strapi.io/" target="_blank" rel="noopener noreferrer">strapi.io</a></p>
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
.source-code {font-weight: 700;}
@media (max-width: 480px) {
	footer {
		padding: 30px 0;
	}
}
</style>