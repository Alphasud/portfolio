<script>
    export let contact;
    import { isFormVisible } from "/src/store.js";
	let isVisible;
    isFormVisible.subscribe(value => {
        isVisible = value;
    });

</script>
{#if isVisible}
{#each contact as element}
<div class="contact">
<form class='contact__form' id="my-form" action="https://formspree.io/f/mpzkbdvd" method="POST">
    <span class='contact__form__close' on:click={() => isFormVisible.set(false)}><i class="fas fa-times fa-2x"></i></span>
    <label class='contact__form__label__email'>{element.email}:</label>
    <input class='contact__form__email' type="email" name="email" />
    <p class='error-message__email'>{element.errorEmail}</p>
    <p class='success-message__email'>👍</p>
    <label class='contact__form__label__message'>{element.message}:</label>
    <textarea class='contact__form__message' type="text" name="message"></textarea>
    <p class='error-message__message'>{element.errorMessage}</p>
    <button class='contact__form__button' id="my-form-button">{element.bouton}</button>
    <p class='contact__form__status' id="my-form-status"></p>
</form>
</div>
{/each}
{/if}
<style lang="scss">
.contact {
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  justify-content: center;
  width: 40%;
  max-width: 75rem;
  left: 50%;
  transform: translate(-50%, 0);
  top: 20%;
  padding: 2rem;
  &__form {
    display: flex;
    flex-direction: column;
    color: #f0f8ff;
    width: 90%;
    label{margin-top: 1rem;color: aliceblue;}
    &__close {
      position: absolute;
      right: 1rem;
      top: 0.5rem;
      background-color: transparent;
      border: none;
      color: aliceblue;
      cursor: pointer;
    }
    &__email {
      height: 2.5rem;
      border-radius: 5px;
      border: none;
      outline: none;
      background-color: rgba(240, 248, 255, 0.8);
    }
    &__message {
      height: 20rem;
      border-radius: 5px;
      border: none;
      outline: none;
      background-color: rgba(240, 248, 255, 0.8);
    }
    &__button {
      cursor: pointer;
      margin-top: 1rem;
      width: 10rem;
      background-color: rgba(240, 248, 255, 0.8);
      border: none;
      font-weight: 900;
      border-radius: 5px;
      padding: 0.5rem;
    }
    &__status {
      margin-top: 1rem;
    }
  }
}

.invalid {
  opacity: 0.8;
  color:crimson;
  background-color: aliceblue;
  border-radius: 10px;
  padding: 0.25rem;
}
.valid {
  color: aquamarine;
}

.valid-field {
  border: 2px aquamarine solid;
}
.invalid-field {
  border: 2px tomato solid;
}

.error-message__email, .error-message__message {
  display: none;
  color: tomato;
}
.success-message__email {
  display: none;
  position: absolute;
  top: 5.5rem;
  right: 10%;
}
@media screen and (max-width: 700px) {
    .contact {
        width: 80%;
    }
}
</style>