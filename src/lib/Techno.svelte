<script>
import { darkTheme } from "/src/store.js";
let darkMode;
darkTheme.subscribe(value => {
darkMode = value;
});
</script>
<section class={darkMode ? "techno white-border" : "techno"}>
    <div class='techno__top'>
        <h1>Stack</h1>
        <div class='techno__top__stack'>
            <div class='techno__top__stack__row'>
                <i class="fab fa-html5 fa-4x"></i>
                <i class="fab fa-css3-alt fa-4x"></i>
                <i class="fab fa-js-square fa-4x"></i>
                <i class="fab fa-bootstrap fa-4x"></i>
            </div>
            <div class='techno__top__stack__row'>
                <i class="fab fa-git-alt fa-4x"></i>
                <i class="fab fa-sass fa-4x"></i>
                <i class="fab fa-react fa-4x"></i>
            </div>
        </div>
        <p></p>
    </div>
</section>

<style lang="scss">
$dark: #202124;
.techno {
  display: flex;
  justify-content:flex-start;
  flex-basis: 49%;
  margin-left: 1%;
  margin-top: 2rem;
  background-color: transparent;
  border: 2px solid $dark;
  border-radius: 10px;
  padding: 1rem;
  &__top {
    margin-top: 2rem;
    width: 100%;
    h1 {font-size: 3.5rem;margin: 0;}

    &__stack {
      margin: 2rem 0.5rem 0 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &__row {
        width: 75%;
        display: flex;
        &:first-child { 
          margin-bottom: 3rem;
          justify-content: space-between;
          i {
            opacity: 0;
            transition: all 0.2s ease;
            @for $i from 1 through 4 {
              &:nth-child(#{$i}) {
                animation: pop 0.8s ease 1 normal forwards;
                animation-delay: calc(1s + #{$i}s / 3);
              }
            }  
          }
        }
        &:last-child {
          justify-content: space-evenly;
          i {
            opacity: 0;
            transition: all 0.2s ease;
            @for $i from 1 through 3 {
              &:nth-child(#{$i}) {
                animation: pop 0.8s ease 1 normal forwards;
                animation-delay: calc(1s + 4s / 3 + #{$i}s / 3);
              }
            }
          }
        }
      }
    }
  }
}
@keyframes pop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@media screen and (max-width: 900px) {
  .techno {
    flex-basis: 100%;
  }
  .techno__top {
    margin-top: 0;
  }
}
</style>