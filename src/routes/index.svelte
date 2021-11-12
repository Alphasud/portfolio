<script context="module">
	export const prerender = true;
</script>
<script>
	import Presentation from '$lib/Presentation.svelte';
	import Techno from '$lib/Techno.svelte';
	import ContactForm from '$lib/ContactForm.svelte';
	import Projects from '$lib/Projects.svelte';
	import { currentLang } from "/src/store.js";
	import {data, projects, contact} from '../data.js';

	let lang;
	let currentLanguageData;
	let currentLanguageProjects;
	let currentLanguageContact;

  	currentLang.subscribe(value => {
    	lang = value;
  	});

	$: switch(lang) {
		case 'french':
			currentLanguageData = data.flatMap(el => {
				return el.french;
			});
			currentLanguageProjects = projects.flatMap(el => {
			return el.french;
			});
			currentLanguageContact = contact.flatMap(el => {
			return el.french;
			});
		break;
			case 'english':
			currentLanguageData = data.flatMap(el => {
				return el.english;
			});
			currentLanguageProjects = projects.flatMap(el => {
			return el.english;
			});
			currentLanguageContact = contact.flatMap(el => {
			return el.english;
			});
		break;
			case 'spanish':
			currentLanguageData = data.flatMap(el => {
				return el.spanish;
			});
			currentLanguageProjects = projects.flatMap(el => {
			return el.spanish;
			});
			currentLanguageContact = contact.flatMap(el => {
			return el.spanish;
			});
		break;
		default:
			currentLanguageData = data.flatMap(el => {
				return el.french;
			});	
			currentLanguageProjects = projects.flatMap(el => {
			return el.french;
			});	
			currentLanguageContact = contact.flatMap(el => {
			return el.french;
			});
	};
</script>

<svelte:head>
	<title>Charles Denneulin</title>
</svelte:head>
<div class="top">
	<Presentation data={currentLanguageData} />
	<Techno data={currentLanguageData} />	
</div>
<Projects projects={currentLanguageProjects.reverse()} lang={lang}/>
<ContactForm contact={currentLanguageContact}/>

	

<style lang="scss">
$dark: #202124;

.top {
  display: flex;
  flex-wrap: nowrap;
  flex-basis: 100%;
}
@media screen and (max-width: 800px) {
  .top {
    flex-wrap: wrap;
  }
}
</style>
