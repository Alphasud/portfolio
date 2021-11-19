<script>
import { darkTheme, isFormVisible } from "/src/store.js";
	let darkMode;
    darkTheme.subscribe(value => {
        darkMode = value;
    });
    let isVisible;
    isFormVisible.subscribe(value => {
      isVisible = value;
    });
    export let projects;
    export let lang;
    let title;
    $: switch(lang) {
        case 'french' :
            title = 'Portfolio (ordre anti-chronologique)';
            break;
        case 'english':
            title = 'Portfolio (reverse chronological order)';
            break;
        case 'spanish':
            title = 'Portfolio (orden anticronológico)';
            break;
        default:
            title = 'Portfolio (ordre anti-chronologique)';
    }
</script>
<section class="{darkMode ? "projects white-border" : "projects"} {isVisible ? "blur" : ""}">
    <h1 class="projects__title">{title}</h1>
    <div class="projects__elements">
        {#each projects as element}
        <article class='projects__elements__item'>
            <a aria-label={element.projectPicture.alternativeText} href={element.websiteLink ? element.websiteLink : element.repoLink} class='projects__elements__item__image'target='_blank' rel='noopener noreferrer'>
                <img src={element.projectPicture.formats.thumbnail.url} alt={element.projectPicture.alternativeText}>
            </a>
            <h2 class='projects__elements__item__title'>{element.name}</h2>
            <p class='projects__elements__item__techno'>{element.stack}</p>
            <p class='projects__elements__item__description'>{element.description}</p>
            <a class={darkMode ? 'projects__elements__item__link dark-button' : 'projects__elements__item__link'} href={element.repoLink} target='_blank' rel='noopener noreferrer'>
            <span>
                <p>Source Code</p>
                <p>Source Code</p>
            </span>
            </a>
    {#if element.websiteLink}
        <a class={darkMode ? 'projects__elements__item__link dark-button' : 'projects__elements__item__link'} href={element.websiteLink} target='_blank' rel='noopener noreferrer'>
          <span>
            <p>Website</p>
            <p>Website</p>
          </span>
        </a>
    {/if}
      
</article>
{/each}
    </div>
</section>

<style lang="scss">

$light: #f1e9e9;
$dark: #202124;
$yellow: #ecec1a;
.projects {
  margin: 2rem 0;
  background-color: transparent;
  border: 2px solid $dark;
  border-radius: 10px;
  padding: 1rem;
  flex-basis: 100%;
  transition: all 0.25s ease-in;

  &__elements {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;

    &__item {
      height: 45rem;
      display: flex;
      align-items: center;
      flex-basis: 30%;
      flex-direction: column;
      margin: 1rem;

      &__description {
        height: auto;
        width: 90%;
        text-align: center;
        font-style: italic;
        line-height: 1.5;
        margin: 0 0 1rem 0;
      }

      &__techno {
        text-align: center;
        height: auto;
        width: 90%;
        font-weight: 700;
        margin:0;
      }

      &__title {
        text-align: center;
        height: 4rem;
        width: 30rem;
        margin: 0;
      }

      &__link {
        border: 2px solid currentColor;
        border-radius: 3rem;
        color: $dark;
        overflow: hidden;
        padding: 0 1rem;
        position: relative;
        text-decoration: none;
        transition: 0.2s transform ease-in-out;
        will-change: transform;
        z-index: 0;
        margin-bottom: 0.5rem;

        span {
          display: inline-block;
          position: relative;

          p {
            display: block;
            transition: transform 0.5s;
            line-height: 0.5em;
            margin: 0;
          }

          p:last-child {
            position: absolute;
            top: 0;
            left: 0;
            transform: translate3d(0, 100%, 0) scaleY(0) skewX(-30deg);
          }
        }

        &:hover {
          p:first-child {
            transform: translate3d(0, -100%, 0) scaleY(0) skewX(10deg);
          }

          p:last-child {
            transform: translate3d(0, 0, 0) scaleY(1) skewX(0deg);
          }
        }
      }

      &__image {
        width: 20rem;
        height: 20rem;
        //overflow: hidden;
        margin-bottom: 1rem;
        transition: transform 0.2s ease;
        &:hover {
          transform: scale(1.1);
        }

        img {
          border: 2px solid $light;
          border-radius: 100px;
          height: 20rem;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
}
.dark-button{
  color: $yellow;
  border: 2px solid $yellow;
  &:hover {
    color: $yellow;
  }
}
</style>