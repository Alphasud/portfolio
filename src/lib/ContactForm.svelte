<script>
    export let contact;
    export let lang;
    import { isFormVisible } from "/src/store.js";

    let email = '';
    let message = '';
    let feedbackMessage = '';

    let isEmailValid ;
    let isMessageValid;
    let isSectionValid;
    let isFormSentSuccessfully;

    /* Email and message validations */
    const handleEmail = () => {
        const value = email.trim();
        value.match(/^\S+@\S+\.\S+$/) && value ? isEmailValid = true : isEmailValid = false;
    }
    const handleMessage = () => {
        const value = message.trim();
        value ? isMessageValid = true : isMessageValid = false;
    }
    const handleFormValidationStyle = () => {
        if(isMessageValid && isEmailValid) {isSectionValid = true}
        else {isSectionValid = false}
    }
    /* Handle the closing of form and reset its style and values */
    const handleClose = () => {
        isFormVisible.set(false);
        email = '';
        message = '';
        isEmailValid = undefined;
        isMessageValid = undefined;
        isSectionValid = undefined;
        isFormSentSuccessfully = undefined;
    }
    /* Handle errors messages, success messages and general validation styles */
    const applyErrorClass = (value) => {
        if(value === true) {return 'error-message__email' }
        else if(value === false) {return 'error-message__email show' }
        else {return 'error-message__email'}
    }
    const applyInputClass = (value) => {
        if(value === true) {return 'contact__form__email valid-field' }
        else if(value === false) {return 'contact__form__email invalid-field' }
        else {return 'contact__form__email'}
    }
    const applyMessageInputClass = (value) => {
        if(value === true) {return 'contact__form__message valid-field' }
        else if(value === false) {return 'contact__form__message invalid-field' }
        else {return 'contact__form__message'}
    }
    const applySucessIcon = (value) => {
        if(value === true) {return 'success-message__email show' }
        else {return 'success-message__email' }
    }
    const applyFormClass = (value) => {
        if(value === true) {return 'contact valid-field'}
        else if(value === false) { return 'contact invalid-field'}
        else { return 'contact'}
    }
    const applyButtonClass = (value) => {
        if(value === true) {return 'contact__form__button valid-field'}
        else if(value === false) { return 'contact__form__button invalid-field'}
        else { return 'contact__form__button'}
    }
    const setFeedbackMessage = (value) => {
        if(value === true) {
            switch(lang) {
                case 'french':
                    feedbackMessage = 'All Good &#128293 Merci pour votre message &#128578 !';
                break;
                case 'english':
                    feedbackMessage = 'All Good &#128293 Thank you for your message &#128578 !';
                break;
                case 'spanish':
                    feedbackMessage = 'All Good &#128293 Gracias por su mensaje &#128578 !';
                break;
                default:
                    feedbackMessage = 'All Good &#128293 Merci pour votre message &#128578 !';
            }
            return feedbackMessage;
        } else if(value === false) {
            switch(lang) {
                case 'french':
                    feedbackMessage = `Ohlala... &#128565 Il y a eu un soucis avec l'envoi du message. Vous pourriez peut-être ré-essayer ?`;
                break;
                case 'english':
                    feedbackMessage = `Ohlala... &#128565 Something went wrong. Would you be so kind to try again ?`;
                break;
                case 'spanish':
                    feedbackMessage = `Ohlala... &#128565 Hubo un problema con el envío del mensaje. Puedes intentar otra vez ?`;
                break;
                    default:
                    feedbackMessage = `Ohlala... &#128565 Il y a eu un soucis avec l'envoi du message. Vous pourriez peut-être ré-essayer ?`;
            }
            return feedbackMessage;
        } else {
            feedbackMessage = '';
            return feedbackMessage;
        }
    }
    /* Handles submission of form */
    async function handleSubmit(event) {
        handleEmail();
        handleMessage();
        handleFormValidationStyle();
        if(isEmailValid && isMessageValid) {
            const data = new FormData(event.target);
            fetch("https://formspree.io/f/mpzkbdvd", {
                method: 'POST',
                body: data,
                headers: {
                Accept: 'application/json',
            },
            }).then((response) => {
                if(response.status !== 200) {
                    isFormSentSuccessfully = false;
                } else {
                    isFormSentSuccessfully = true;
                    email = '';
                    message = '';
                    setTimeout(() => {
                        handleClose();
                    }, 4000);
                }
            }).catch((error) => {
                console.log(error);
                isFormSentSuccessfully = false;
            });     
        }
}
</script>
{#if $isFormVisible}
{#each contact as element}
<div class={applyFormClass(isSectionValid)}>
<form class='contact__form' on:submit|preventDefault="{handleSubmit}" id="my-form">
    <div class="{isFormSentSuccessfully ? 'container hidden' : 'container'}">
    <span class='contact__form__close' on:click={handleClose}><i class="fas fa-times fa-2x"></i></span>
    <label 
        for='input-email' 
        class='contact__form__label__email'>
        {element.email}:
    </label>
    <input 
        id='input-email' 
        bind:value={email} 
        class={applyInputClass(isEmailValid)} 
        type="email" 
        name="email" 
        on:input="{() => {handleEmail(); handleFormValidationStyle()}}" />

    <p class={applyErrorClass(isEmailValid)}>{element.errorEmail}</p>
    <p class={applySucessIcon(isEmailValid)}>👍</p>
    <label 
        for='input-message' 
        class='contact__form__label__message'>
        {element.message}:
    </label>
    <textarea 
        id='input-message' 
        bind:value={message} 
        class={applyMessageInputClass(isMessageValid)} 
        type="text" 
        name="message" 
        on:input="{() => {handleMessage(); handleFormValidationStyle()}}"></textarea>

    <p class={applyErrorClass(isMessageValid)}>{element.errorMessage}</p>
    <button type='submit' class={applyButtonClass(isSectionValid)} id="my-form-button">{element.bouton}</button>
    </div>
    <p class='contact__form__status'>{@html setFeedbackMessage(isFormSentSuccessfully)}</p>
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
      text-align: center;
      margin-top: 1rem;
    }
  }
}
.container {
    display: flex;
    flex-direction: column;
}
.hidden { display: none;}
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
  top: 4.25rem;
  right: 10%;
}

.show {
    display: block;
}
@media screen and (max-width: 700px) {
    .contact {
        width: 80%;
    }
}
</style>