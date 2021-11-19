<script>
    import { darkTheme } from "../store.js";

    let darkMode;

    darkTheme.subscribe(value => {
        darkMode = value;
    });
    
    const toggleDarkTheme = () => {
        darkTheme.update(n => !n);
    }
</script>

<button aria-label="Dark mode switch" class={!darkMode ? "switch__light" : "switch__light dark-bulb yellow-border"} on:click={toggleDarkTheme}>
    <i class="fas fa-lightbulb fa-lg"></i>
</button>

<style lang='scss'>
$dark: #202124;
.switch__light {
    border: 2px solid $dark;
    background-color: transparent;
    border-radius: 100px;
    cursor: pointer;
    padding: 1.2rem 1.4rem;
    transition: color 0.2s ease-in, border 0.2s ease-in;
}
</style>