<script>
  import DarkModeToggle from '$lib/DarkModeToggle.svelte';
  import { darkTheme, currentLang, isFormVisible } from "/src/store.js";

  let darkMode;
  darkTheme.subscribe(value => {
    darkMode = value;
  });

  let isVisible;
  isFormVisible.subscribe(value => {
    isVisible = value;
  });
  let current = "fr";
</script>

<header class={isVisible ? "header blur" : "header"}>
  <DarkModeToggle />
  <li class:white-border={darkMode} class:selected="{current === 'fr'}" class="switch" on:click={() => {current = 'fr'; currentLang.set('french')}}>FR</li>
  <li class:white-border={darkMode} class:selected="{current === 'en'}" class="switch" on:click={() => {current = 'en'; currentLang.set('english')}}>EN</li>
  <li class:white-border={darkMode} class:selected="{current === 'es'}" class="switch" on:click={() => {current = 'es'; currentLang.set('spanish')}}>ES</li>
</header>

<style lang="scss"> 

$dark: #202124;
$light: #f1e9e9;

header {
  display: flex;
  align-items: center;
  transition: all 0.25s ease;
  height: 8rem;
  margin-left: 1rem;
      li { text-decoration: none;list-style: none; }
}

.switch {
  font-size: 1.4rem;
  border: 2px solid $dark;
  background-color: $dark;
  color: $light;
  margin-left: 1rem;
  border-radius: 50%;
  cursor: pointer;
  padding: 1.2rem 1.4rem;
  transition: all 0.2s ease;
  }

  .selected {
    font-weight: 700; 
    transform: rotate(360deg) scale(1.15);
  }

@media screen and (max-width: 900px) {
  .header {
    display: flex;
    justify-content: center;
  }
}
</style>
