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
                <i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
			                <path style="stroke: #202124; fill:#202124; stroke-width: 50;" d="M65,34 L37,52 A1 1 0 0 0 44 60 L70.5,44.5 A1 1 0 0 0 65,34Z M64,67 L36,85 A1 1 0 0 0 42 94 L68,77.5 A1 1 0 0 0 64,67Z"/>
                      <path style="stroke:#EAECF1; stroke-width: 5" d="M45.41,108.86A21.81,21.81,0,0,1,22,100.18,20.2,20.2,0,0,1,18.53,84.9a19,19,0,0,1,.65-2.57l.52-1.58,1.41,1a35.32,35.32,0,0,0,10.75,5.37l1,.31-.1,1a6.2,6.2,0,0,0,1.11,4.08A6.57,6.57,0,0,0,41,95.19a6,6,0,0,0,1.68-.74L70.11,76.94a5.76,5.76,0,0,0,2.59-3.83,6.09,6.09,0,0,0-1-4.6,6.58,6.58,0,0,0-7.06-2.62,6.21,6.21,0,0,0-1.69.74L52.43,73.31a19.88,19.88,0,0,1-5.58,2.45,21.82,21.82,0,0,1-23.43-8.68A20.2,20.2,0,0,1,20,51.8a19,19,0,0,1,8.56-12.7L56,21.59a19.88,19.88,0,0,1,5.58-2.45A21.81,21.81,0,0,1,85,27.82,20.2,20.2,0,0,1,88.47,43.1a19,19,0,0,1-.65,2.57l-.52,1.58-1.41-1a35.32,35.32,0,0,0-10.75-5.37l-1-.31.1-1a6.2,6.2,0,0,0-1.11-4.08,6.57,6.57,0,0,0-7.06-2.62,6,6,0,0,0-1.68.74L36.89,51.06a5.71,5.71,0,0,0-2.58,3.83,6,6,0,0,0,1,4.6,6.58,6.58,0,0,0,7.06,2.62,6.21,6.21,0,0,0,1.69-.74l10.48-6.68a19.88,19.88,0,0,1,5.58-2.45,21.82,21.82,0,0,1,23.43,8.68A20.2,20.2,0,0,1,87,76.2a19,19,0,0,1-8.56,12.7L51,106.41a19.88,19.88,0,0,1-5.58,2.45"/>
                    </svg>
                </i>
            </div>
        </div>

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
        svg {width: 5.5rem;}
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
                animation-delay: calc(3s + #{$i}s / 3);
              }
            }  
          }
        }
        &:last-child {
          justify-content: space-evenly;
          i {
            opacity: 0;
            transition: all 0.2s ease;
            @for $i from 1 through 4 {
              &:nth-child(#{$i}) {
                animation: pop 0.8s ease 1 normal forwards;
                animation-delay: calc(3s + #{$i}s / 3);
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