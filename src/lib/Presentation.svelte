<script>
  import { darkTheme } from "/src/store.js";
  import { isFormVisible } from "/src/store.js";

	let darkMode;
  darkTheme.subscribe(value => {
    darkMode = value;
  });
  let isVisible;
  isFormVisible.subscribe(value => {
    isVisible = value;
  });

  export let data;
</script>
{#each data as item}
<section class="{darkMode ? "presentation white-border" : "presentation"} {isVisible ? "blur" : ""}">
    <div class='presentation__top'>
        <div class='presentation__top__left'>
            <img class='presentation__top__left__photo' src={item.photo} alt=''>
        </div>
        <div class='presentation__top__right'>
            <h1 class='presentation__top__right__name'>{item.name} {item.fName}</h1>
            <h2 class='presentation__top__right__tagline'>{item.tagline}</h2>
        </div>
    </div>
    <div class='presentation__social'>
        <a class='resume-icon' href={item.resume} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-scroll fa-2x"></i>
            <i class="fas fa-scroll fa-2x"></i>
        </a>
        <span class='resume-message'>{item.toolTip}</span>
        <span class='presentation__social__mail' on:click={() => isFormVisible.set(true)}>
            <i class="fas fa-envelope fa-2x"></i>
            <i class="fas fa-envelope fa-2x"></i>
        </span>
        <a href={item.github} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github fa-2x"></i>
            <i class="fab fa-github fa-2x"></i>
        </a>
        <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin fa-2x"></i>
            <i class="fab fa-linkedin fa-2x"></i>
        </a>
    </div>
    <p class='presentation__description'>{item.description}</p>
</section>
{/each}


<style lang="scss">
$dark: #202124;

.resume-message {
  position: absolute;
  top: -6.5rem;
  left: 1rem;
  opacity: 0;
  height: 5rem;
  background-color: aliceblue;
  border-radius: 5px;
  border: 1px solid $dark;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  color: rgba(70, 68, 68, 0.952);
  transition: opacity .1s ease;
}

.resume-icon:hover ~ .resume-message {
  opacity: 1;
}
.presentation {
  flex-basis: 49%;
  margin-right: 1%;
  margin-top: 2rem;
  background-color: transparent;
  border: 2px solid $dark;
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.25s ease-in;

  &__top {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    &__left {
      &__photo {
        width: 15rem;
        height: 15rem;
        border-radius: 100px;
        object-fit: cover;
        object-position: top;
      }
    }
    &__right {
      &__name {
        margin:0 0 0 0.5rem;
        font-size: 4rem;
        line-height: 0.8;
      }  
      &__tagline {
        margin: 0.25rem 0 0 0.5rem;
        font-style: italic;
        line-height: 1.2;
      }
    }
  }
  &__description {
    margin: 1rem 1rem 0 1rem;
    text-align: justify;
    text-justify: inter-word;
  }
  &__social {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    margin-top: 1rem;
    a {
      color: currentColor;
    }
    a:first-child {
      display: inline-block;
      position: relative;
        i {
          transition: transform 0.5s;
          line-height: 0.5em;

        }

        i:last-child {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate3d(0, 100%, 0) scaleY(0) skewX(-30deg);
        }
        &:hover {
          i:first-child {
            transform: translate3d(0, -100%, 0) scaleY(0) skewX(10deg);
          }
          i:last-child {
            transform: translate3d(0, 0, 0) scaleY(1) skewX(0deg);
          }
        }
    }
    
    a:nth-child(4) {
      margin-left: 1rem;
      display: inline-block;
      position: relative;
        i {
          transition: transform 0.5s;
          line-height: 0.5em;
        }

        i:last-child {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate3d(0, 100%, 0) scaleY(0) skewX(-30deg);
        }
        &:hover {
          i:first-child {
            transform: translate3d(0, -100%, 0) scaleY(0) skewX(10deg);
          }
          i:last-child {
            transform: translate3d(0, 0, 0) scaleY(1) skewX(0deg);
          }
        }
    }
    a:last-child {
      margin-left: 1rem;
      display: inline-block;
      position: relative;
        i {
          transition: transform 0.5s;
          line-height: 0.5em;
        }

        i:last-child {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate3d(0, 100%, 0) scaleY(0) skewX(-30deg);
        }
        &:hover {
          i:first-child {
            transform: translate3d(0, -100%, 0) scaleY(0) skewX(10deg);
          }
          i:last-child {
            transform: translate3d(0, 0, 0) scaleY(1) skewX(0deg);
          }
        }
    }  
    &__mail {
      margin-left: 2rem;
      cursor: pointer;
      margin-left: 1rem;
      display: inline-block;
      position: relative;
        i {
          display: block;
          transition: transform 0.5s;
          line-height: 0.5em;
        }
        i:last-child {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate3d(0, 100%, 0) scaleY(0) skewX(-30deg);
        }
        &:hover {
          i:first-child {
            transform: translate3d(0, -100%, 0) scaleY(0) skewX(10deg);
          }
          i:last-child {
            transform: translate3d(0, 0, 0) scaleY(1) skewX(0deg);
          }
        }
    }
  }
}    
@media screen and (max-width: 800px) {
  .presentation {
    flex-basis: 100%;
    margin-right: 0;   
    &__social {
      margin: 0 auto;
      justify-content: center;
    }
    &__top {flex-direction: column;}
    &__top__right {
      text-align: center;
    }
  }
}
</style>