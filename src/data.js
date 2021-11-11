const data = [
	{
		french: [
			{
				id: 1,
				name: 'Charles',
				fName: 'Denneulin',
				tagline: 'Développeur Front-End Junior',
				description: `Développeur React / Redux, je développe des interfaces modernes avec le soucis de l'esthétisme et de l'expérience utilisateur.`,
				photo: '/profilepicture.png',
				mail: 'c.denneulin@gmail.com',
				github: 'https://github.com/Alphasud',
				linkedin: 'https://www.linkedin.com/in/charlesdenneulin/',
				message: 'Adresse mail copiée dans le presse-papier !',
				resume:
					'https://jumbled-cord-e02.notion.site/Charles-Denneulin-7c8f33d0bda04e53a4170b75953ba160',
				toolTip: 'Voir mon CV.'
			}
		],
		english: [
			{
				id: 1,
				name: 'Charles',
				fName: 'Denneulin',
				tagline: 'Junior Front-End Web Developper',
				description: `React / Redux developer. Crafting modern, user oriented applications.`,
				photo: '/profilepicture.png',
				mail: 'c.denneulin@gmail.com',
				github: 'https://github.com/Alphasud',
				linkedin: 'https://www.linkedin.com/in/charlesdenneulin/',
				message: 'Mail address copied in the clipboard !',
				resume:
					'https://jumbled-cord-e02.notion.site/Charles-Denneulin-7c8f33d0bda04e53a4170b75953ba160',
				toolTip: 'See my resume (in French).'
			}
		],
		spanish: [
			{
				id: 1,
				name: 'Charles',
				fName: 'Denneulin',
				tagline: 'Desarollador Front-End Junior',
				description: `Desarollador React / Redux. Elaborando aplicaciones modernas orientadas al usario.`,
				photo: '/profilepicture.png',
				mail: 'c.denneulin@gmail.com',
				github: 'https://github.com/Alphasud',
				linkedin: 'https://www.linkedin.com/in/charlesdenneulin/',
				message: 'Dirección de correo copiada en el portapapeles !',
				resume:
					'https://jumbled-cord-e02.notion.site/Charles-Denneulin-7c8f33d0bda04e53a4170b75953ba160',
				toolTip: 'Ver mi CV (en francés).'
			}
		]
	},
];

const contact = [
	{
		french: [
			{
				email: 'Votre email',
				message: 'Votre Message',
				bouton: 'Envoyer',
				errorEmail: `Je vais avoir besoin d'une adresse mail 📧`,
				errorMessage: 'Dites-moi quelque chose...'
			}
		],
		english: [
			{
				email: 'Your email address',
				message: 'Your message',
				bouton: 'Submit',
				errorEmail: `Please, enter your email address 📧`,
				errorMessage: 'Say something...'
			}
		],
		spanish: [
			{
				email: 'Su correo electronico',
				message: 'Su mensaje',
				bouton: 'Enviar',
				errorEmail: `Introduce una dirección de correo electrónico por fa' 📧`,
				errorMessage: 'Dígame algo...'
			}
		]
	},
];

const projects = [
	{
		french: [
			{
				id: '0',
				title: `The Alchemist's Lair`,
				description: `Jeu textuel multi-choix avec UI`,
				techno: 'Java / Swing',
				photo: '/img/projectAlchemist.png',
				website: 'none',
				sourcecode: 'https://github.com/Alphasud/Alchemist_Game'
			},
			{
				id: '1',
				title: 'Natours',
				description: `Intégration d'une maquette pour un tour-operator fictif`,
				techno: 'HTML5 / CSS / Sass',
				photo: '/img/projet1.png',
				website: 'https://alphasud.github.io/Natours/',
				sourcecode: 'https://github.com/Alphasud/Natours'
			},
			{
				id: '2',
				title: `Canopée`,
				description: 'Intégration de trois maquettes pour des marques fictives',
				techno: 'HTML5 / CSS / Bootstrap',
				photo: '/img/projectCanopee.png',
				website: 'https://alphasud.github.io/Canopee/',
				sourcecode: 'https://github.com/Alphasud/Canopee/tree/gh-pages'
			},
			{
				id: '3',
				title: `Recipe Finder`,
				description: `App de recherche de recettes via une API`,
				techno: 'HTML5 / CSS / ReactJS / Edamam API',
				photo: '/img/projectRecipe.png',
				website: 'https://recipe-finder-9918d5.netlify.app/',
				sourcecode: 'https://github.com/Alphasud/recipe-app'
			},
			{
				id: '4',
				title: `Ghibli Studio Database`,
				description: `Divers choses sur l'univers Ghibli`,
				techno: 'HTML5 / CSS / ReactJS / Ghibli API',
				photo: '/img/projectGhibli.png',
				website: 'https://ghiblimovies.netlify.app/',
				sourcecode: 'https://github.com/Alphasud/Ghibli-Movie-Database'
			},
			{
				id: '5',
				title: 'Reservia',
				description: `Intégration d'une maquette pour une plateforme de réservation fictive`,
				techno: 'HTML5 / CSS',
				photo: '/img/projet2.png',
				website: 'https://alphasud.github.io/CharlesDenneulin_2_12012021',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_2_12012021'
			},
			{
				id: '6',
				title: 'ohmyfood',
				description: `Intégration de maquettes et d'animations CSS pour une App de réservation de repas`,
				techno: 'HTML5 / SCSS',
				photo: './img/projet3.png',
				website: 'https://alphasud.github.io/CharlesDenneulin_3_27012021/index.html',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_3_27012021'
			},
			{
				id: '7',
				title: 'GameOn',
				description: `Intégration d'une maquette et validation de formulaire`,
				techno: 'HTML5 / SCSS / Vanilla JS',
				photo: '/img/projet4.png',
				website: 'https://alphasud.github.io/GameOn-website-FR',
				sourcecode: 'https://github.com/Alphasud/GameOn-website-FR'
			},
			{
				id: '8',
				title: 'FishEye',
				description: `Intégration d'une maquette, orientée accessibilité (aria), filter, form, lightbox, sort, like button.`,
				techno: 'HTML5 / SCSS / Vanilla JS / ARIA / ESLint',
				photo: '/img/projet6.png',
				website: 'https://alphasud.github.io/CharlesDenneulin_6_18022021/',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_6_18022021'
			},
			{
				id: '9',
				title: 'Les Petits Plats',
				description: `Intégration d'une maquette, et création d'un algorithme de recherche`,
				techno: 'HTML5 / SCSS / Vanilla JS / ESlint',
				photo: '/img/projet7.png',
				website: 'https://alphasud.github.io/CharlesDenneulin_7_24032021/',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_7_24032021'
			},
			{
				id: '10',
				title: 'Kasa',
				description: `Intégration d'une maquette`,
				techno: 'HTML5 / SCSS / ReactJS / ReactRouter',
				photo: '/img/projet11.png',
				website: 'https://kasa-project.netlify.app/',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_11_17062021'
			},
			{
				id: '11',
				title: 'SportSee',
				description: `Intégration d'une maquette, construction de graphiques, données via API`,
				techno: 'HTML5 / SCSS / ReactJS / ReactRouter / Recharts',
				photo: '/img/projet12.png',
				website: 'none',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_12_13072021'
			},
			{
				id: '12',
				title: 'Argent Bank',
				description: `JWT Auth, user profile, CRUD, API`,
				techno: 'HTML5 / CSS / ReactJS / ReactRouter / Redux',
				photo: '/img/projet13.png',
				website: 'none',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_13_04092021'
			},
			{
				id: '13',
				title: 'HRnet',
				description: `Auth, CRUD, API, Filters, Sorting, Search, Pagination, Datepicker`,
				techno: 'HTML5 / CSS / ReactJS / Firebase',
				photo: '/img/projet14.png',
				website: 'https://hrnet.netlify.app/',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_14_07102021'
			}
		],
		english: [
			{
				id: '0',
				title: `The Alchemist's Lair`,
				description: `Multi-choices text game with UI`,
				techno: 'Java / Swing',
				photo: '/img/projectAlchemist.png',
				website: 'none',
				sourcecode: 'https://github.com/Alphasud/Alchemist_Game'
			},
			{
				id: '1',
				title: 'Natours',
				description: `Mockup integration`,
				techno: 'HTML5 / CSS / Sass',
				photo: '/img/projet1.png',
				website: 'https://alphasud.github.io/Natours/',
				sourcecode: 'https://github.com/Alphasud/Natours'
			},
			{
				id: '2',
				title: `Canopée`,
				description: 'Mockup integration for three fake brands',
				techno: 'HTML5 / CSS / Bootstrap',
				photo: '/img/projectCanopee.png',
				website: 'https://alphasud.github.io/Canopee/',
				sourcecode: 'https://github.com/Alphasud/Canopee/tree/gh-pages'
			},
			{
				id: '3',
				title: `Recipe Finder`,
				description: `App that fetches recipe from an API`,
				techno: 'HTML5 / CSS / ReactJS / Edamam API',
				photo: '/img/projectRecipe.png',
				website: 'https://recipe-finder-9918d5.netlify.app/',
				sourcecode: 'https://github.com/Alphasud/recipe-app'
			},
			{
				id: '4',
				title: `Ghibli Studio Database`,
				description: `Random stuff about the Ghibli movies`,
				techno: 'HTML5 / CSS / ReactJS / Ghibli API',
				photo: '/img/projectGhibli.png',
				website: 'https://ghiblimovies.netlify.app/',
				sourcecode: 'https://github.com/Alphasud/Ghibli-Movie-Database'
			},
			{
				id: '5',
				title: 'Reservia',
				description: `Mockup integration`,
				techno: 'HTML5 / CSS',
				photo: '/img/projet2.png',
				website: 'https://alphasud.github.io/CharlesDenneulin_2_12012021',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_2_12012021'
			},
			{
				id: '6',
				title: 'ohmyfood',
				description: `Mockup integration, CSS animations`,
				techno: 'HTML5 / SCSS',
				photo: '/img/projet3.png',
				website: 'https://alphasud.github.io/CharlesDenneulin_3_27012021/index.html',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_3_27012021'
			},
			{
				id: '7',
				title: 'GameOn',
				description: `Mockup integration and form validation`,
				techno: 'HTML5 / SCSS / Vanilla JS',
				photo: '/img/projet4.png',
				website: 'https://alphasud.github.io/GameOn-website-FR',
				sourcecode: 'https://github.com/Alphasud/GameOn-website-FR'
			},
			{
				id: '8',
				title: 'FishEye',
				description: `Mockup integration, accessibility (aria), filter, form, lightbox, sort, like button.`,
				techno: 'HTML5 / SCSS / Vanilla JS / ARIA / ESLint',
				photo: '/img/projet6.png',
				website: 'https://alphasud.github.io/CharlesDenneulin_6_18022021/',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_6_18022021'
			},
			{
				id: '9',
				title: 'Les Petits Plats',
				description: `Mockup integration and creation of a search algorithm`,
				techno: 'HTML5 / SCSS / Vanilla JS / ESlint',
				photo: '/img/projet7.png',
				website: 'https://alphasud.github.io/CharlesDenneulin_7_24032021/',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_7_24032021'
			},
			{
				id: '10',
				title: 'Kasa',
				description: `Mockup integration`,
				techno: 'HTML5 / SCSS / ReactJS / ReactRouter',
				photo: '/img/projet11.png',
				website: 'https://kasa-project.netlify.app/',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_11_17062021'
			},
			{
				id: '11',
				title: 'SportSee',
				description: `Mockup integration, graphic charts, data fetched from API`,
				techno: 'HTML5 / SCSS / ReactJS / ReactRouter / Recharts',
				photo: '/img/projet12.png',
				website: 'none',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_12_13072021'
			},
			{
				id: '12',
				title: 'Argent Bank',
				description: `JWT Auth, user profile, CRUD, API`,
				techno: 'HTML5 / CSS / ReactJS / ReactRouter / Redux',
				photo: '/img/projet13.png',
				website: 'none',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_13_04092021'
			},
			{
				id: '13',
				title: 'HRnet',
				description: `Auth, CRUD, API, Filters, Sorting, Search, Pagination, Datepicker`,
				techno: 'HTML5 / CSS / ReactJS / Firebase',
				photo: '/img/projet14.png',
				website: 'https://hrnet.netlify.app/',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_14_07102021'
			}
		],
		spanish: [
			{
				id: '0',
				title: `The Alchemist's Lair`,
				description: `Juego textual multi-opciónes con UI`,
				techno: 'Java / Swing',
				photo: '/img/projectAlchemist.png',
				website: 'none',
				sourcecode: 'https://github.com/Alphasud/Alchemist_Game'
			},
			{
				id: '1',
				title: 'Natours',
				description: `Integración de un diseño de página web`,
				techno: 'HTML5 / CSS / Sass',
				photo: '/img/projet1.png',
				website: 'https://alphasud.github.io/Natours/',
				sourcecode: 'https://github.com/Alphasud/Natours'
			},
			{
				id: '2',
				title: `Canopée`,
				description: 'Integración de diseños para 3 marquas ficticias',
				techno: 'HTML5 / CSS / Bootstrap',
				photo: '/img/projectCanopee.png',
				website: 'https://alphasud.github.io/Canopee/',
				sourcecode: 'https://github.com/Alphasud/Canopee/tree/gh-pages'
			},
			{
				id: '3',
				title: `Recipe Finder`,
				description: `App para buscar recetas`,
				techno: 'HTML5 / CSS / ReactJS / Edamam API',
				photo: '/img/projectRecipe.png',
				website: 'https://recipe-finder-9918d5.netlify.app/',
				sourcecode: 'https://github.com/Alphasud/recipe-app'
			},
			{
				id: '4',
				title: `Ghibli Studio Database`,
				description: `Cosas sobre las peliculas Ghibli`,
				techno: 'HTML5 / CSS / ReactJS / Ghibli API',
				photo: '/img/projectGhibli.png',
				website: 'https://ghiblimovies.netlify.app/',
				sourcecode: 'https://github.com/Alphasud/Ghibli-Movie-Database'
			},
			{
				id: '5',
				title: 'Reservia',
				description: `Integración de un diseño de página web`,
				techno: 'HTML5 / CSS',
				photo: '/img/projet2.png',
				website: 'https://alphasud.github.io/CharlesDenneulin_2_12012021',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_2_12012021'
			},
			{
				id: '6',
				title: 'ohmyfood',
				description: `Integración de un diseño de página web`,
				techno: 'HTML5 / SCSS',
				photo: '/img/projet3.png',
				website: 'https://alphasud.github.io/CharlesDenneulin_3_27012021/index.html',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_3_27012021'
			},
			{
				id: '7',
				title: 'GameOn',
				description: `Integración de un diseño de página web y validación de un formulario`,
				techno: 'HTML5 / SCSS / Vanilla JS',
				photo: '/img/projet4.png',
				website: 'https://alphasud.github.io/GameOn-website-FR',
				sourcecode: 'https://github.com/Alphasud/GameOn-website-FR'
			},
			{
				id: '8',
				title: 'FishEye',
				description: `Integración de un diseño, accesibilidad (aria), filter, form, lightbox, sort, botón de like.`,
				techno: 'HTML5 / SCSS / Vanilla JS / ARIA / ESLint',
				photo: '/img/projet6.png',
				website: 'https://alphasud.github.io/CharlesDenneulin_6_18022021/',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_6_18022021'
			},
			{
				id: '9',
				title: 'Les Petits Plats',
				description: `Integración de un diseño, y algoritmo de búsqueda`,
				techno: 'HTML5 / SCSS / Vanilla JS / ESlint',
				photo: '/img/projet7.png',
				website: 'https://alphasud.github.io/CharlesDenneulin_7_24032021/',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_7_24032021'
			},
			{
				id: '10',
				title: 'Kasa',
				description: `Integración de un diseño de página web`,
				techno: 'HTML5 / SCSS / ReactJS / ReactRouter',
				photo: '/img/projet11.png',
				website: 'https://kasa-project.netlify.app/',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_11_17062021'
			},
			{
				id: '11',
				title: 'SportSee',
				description: `Integración de un diseño, gráficos, datos de API`,
				techno: 'HTML5 / SCSS / ReactJS / ReactRouter / Recharts',
				photo: '/img/projet12.png',
				website: 'none',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_12_13072021'
			},
			{
				id: '12',
				title: 'Argent Bank',
				description: `JWT Auth, user profile, CRUD, API`,
				techno: 'HTML5 / CSS / ReactJS / ReactRouter / Redux',
				photo: '/img/projet13.png',
				website: 'none',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_13_04092021'
			},
			{
				id: '13',
				title: 'HRnet',
				description: `Auth, CRUD, API, Filters, Sorting, Search, Pagination, Datepicker`,
				techno: 'HTML5 / CSS / ReactJS / Firebase',
				photo: '/img/projet14.png',
				website: 'https://hrnet.netlify.app/',
				sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_14_07102021'
			}
		]
	}
];

export { data, projects, contact };
