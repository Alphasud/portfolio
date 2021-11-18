<script context="module">
	export const prerender = true;

	export async function load({ fetch }) {
		const presentationsUrl = `https://shielded-escarpment-11714.herokuapp.com/presentations`;
		const projectsUrl = `https://shielded-escarpment-11714.herokuapp.com/projects`;
		const presentationsRes = await fetch(presentationsUrl);
		const projectsRes = await fetch(projectsUrl);
		if (presentationsRes.ok && projectsRes.ok) {
			return {
				props: {
					presentationsData : await presentationsRes.json(),
					projectsData: await projectsRes.json()
				}
			};
		}
		return {
			presentationsStatus : presentationsRes.status,
			projectsStatus: projectsRes.status,
			error: new Error(`Could not load data`)
		};
	}
</script>
<script>
	export let presentationsData;
	export let projectsData;

	import Presentation from '$lib/Presentation.svelte';
	import Techno from '$lib/Techno.svelte';
	import ContactForm from '$lib/ContactForm.svelte';
	import Projects from '$lib/Projects.svelte';
	import { currentLang } from "/src/store.js";
	import {contact} from '../data.js';

	let currentLanguageData;
	let currentLanguageProjects;
	let currentLanguageContact;

	$: switch($currentLang) {
		case 'french':
			currentLanguageData = presentationsData.flatMap(el => {
				return el.french;
			});
			currentLanguageProjects = projectsData.flatMap(el => {
			return el.french;
			});
			currentLanguageContact = contact.flatMap(el => {
			return el.french;
			});
		break;
			case 'english':
			currentLanguageData = presentationsData.flatMap(el => {
				return el.english;
			});
			currentLanguageProjects = projectsData.flatMap(el => {
			return el.english;
			});
			currentLanguageContact = contact.flatMap(el => {
			return el.english;
			});
		break;
			case 'spanish':
			currentLanguageData = presentationsData.flatMap(el => {
				return el.spanish;
			});
			currentLanguageProjects = projectsData.flatMap(el => {
			return el.spanish;
			});
			currentLanguageContact = contact.flatMap(el => {
			return el.spanish;
			});
		break;
		default:
			currentLanguageData = presentationsData.flatMap(el => {
				return el.french;
			});	
			currentLanguageProjects = projectsData.flatMap(el => {
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
	<Presentation data={currentLanguageData} lang={$currentLang} />
	<Techno data={currentLanguageData} />	
</div>
<Projects projects={currentLanguageProjects.reverse()} lang={$currentLang}/>
<ContactForm contact={currentLanguageContact} lang={$currentLang}/>

	

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
