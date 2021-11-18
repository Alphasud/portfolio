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
</script>
<section class="{darkMode ? "techno white-border" : "techno"} {isVisible ? "blur" : ""}">
    <div class='techno__top'>
        <h1>Stack</h1>
        <div class='techno__top__stack'>
            <div class='techno__top__stack__row'>
                <i class="fab fa-html5 fa-4x"></i>
                <i class="fab fa-css3-alt fa-4x"></i>
                <i class="fab fa-js-square fa-4x"></i>
                <i class="fab fa-sass fa-4x"></i>
            </div>
            <div class='techno__top__stack__row'>
                <i class="fab fa-git-alt fa-4x"></i>
                <i class="fab fa-react fa-4x"></i>
                <i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
			                <path style="stroke: #202124; fill:#202124; stroke-width: 50;" d="M65,34 L37,52 A1 1 0 0 0 44 60 L70.5,44.5 A1 1 0 0 0 65,34Z M64,67 L36,85 A1 1 0 0 0 42 94 L68,77.5 A1 1 0 0 0 64,67Z"/>
                      <path style="stroke:{darkMode ? '#F1E9E9' : '#FFFFFF'}; stroke-width: 5" d="M45.41,108.86A21.81,21.81,0,0,1,22,100.18,20.2,20.2,0,0,1,18.53,84.9a19,19,0,0,1,.65-2.57l.52-1.58,1.41,1a35.32,35.32,0,0,0,10.75,5.37l1,.31-.1,1a6.2,6.2,0,0,0,1.11,4.08A6.57,6.57,0,0,0,41,95.19a6,6,0,0,0,1.68-.74L70.11,76.94a5.76,5.76,0,0,0,2.59-3.83,6.09,6.09,0,0,0-1-4.6,6.58,6.58,0,0,0-7.06-2.62,6.21,6.21,0,0,0-1.69.74L52.43,73.31a19.88,19.88,0,0,1-5.58,2.45,21.82,21.82,0,0,1-23.43-8.68A20.2,20.2,0,0,1,20,51.8a19,19,0,0,1,8.56-12.7L56,21.59a19.88,19.88,0,0,1,5.58-2.45A21.81,21.81,0,0,1,85,27.82,20.2,20.2,0,0,1,88.47,43.1a19,19,0,0,1-.65,2.57l-.52,1.58-1.41-1a35.32,35.32,0,0,0-10.75-5.37l-1-.31.1-1a6.2,6.2,0,0,0-1.11-4.08,6.57,6.57,0,0,0-7.06-2.62,6,6,0,0,0-1.68.74L36.89,51.06a5.71,5.71,0,0,0-2.58,3.83,6,6,0,0,0,1,4.6,6.58,6.58,0,0,0,7.06,2.62,6.21,6.21,0,0,0,1.69-.74l10.48-6.68a19.88,19.88,0,0,1,5.58-2.45,21.82,21.82,0,0,1,23.43,8.68A20.2,20.2,0,0,1,87,76.2a19,19,0,0,1-8.56,12.7L51,106.41a19.88,19.88,0,0,1-5.58,2.45"/>
                    </svg>
                </i>
                <i>
                  <svg width="244px" height="64px" viewBox="0 0 244 244" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Branding" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Monogram-Blue-Background" transform="translate(-567.000000, -357.000000)" fill={darkMode ? "#FFFFFF" : "#000"}>
                    <g id="Logo" transform="translate(564.000000, 357.000000)">
                      <g id="Monogram" transform="translate(0.000000, 0.760305)">
                      <path d="M164.892662,165.07248 L164.892662,86.343565 C164.892662,83.5395527 162.619561,81.2664516 159.815549,81.2664516 L81.177926,81.2664516 L81.177926,0 L240.993475,0 C243.797487,-1.5457868e-14 246.070588,2.2731011 246.070588,5.0771134 L246.070588,165.07248 L164.892662,165.07248 Z" id="Combined-Shape-Copy"></path>
                      <path d="M81.177926,0 L81.177926,81.2664516 L6.12389787,81.2664516 C4.72189171,81.2664516 3.58534116,80.129901 3.58534116,78.7278949 C3.58534116,78.0551071 3.85241582,77.4098346 4.32788926,76.9338427 L81.177926,0 Z" id="Rectangle-Copy-6" opacity="0.404989"></path>
                      <path d="M246.070588,171.205824 L246.070588,246.338931 L164.892662,246.338931 L241.736023,169.411772 C242.726851,168.419864 244.334176,168.418988 245.326084,169.409816 C245.802754,169.885967 246.070588,170.532078 246.070588,171.205824 Z" id="Rectangle-Copy-7" opacity="0.404989" transform="translate(205.481625, 205.705706) scale(-1, -1) translate(-205.481625, -205.705706) "></path>
                      <path d="M81.177926,81.2664516 L162.354106,81.2664516 C163.756112,81.2664516 164.892662,82.4030021 164.892662,83.8050083 L164.892662,165.07248 L86.2550394,165.07248 C83.4510271,165.07248 81.177926,162.799379 81.177926,159.995366 L81.177926,81.2664516 Z" id="Rectangle-Copy-8" opacity="0.404989"></path>
                    </g>
                    </g>
                    </g>
                    </g>
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
  transition: all 0.25s ease-in;
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
            transition: all 0.25s ease;
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
            transition: all 0.25s ease;
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
@media screen and (max-width: 800px) {
  .techno {
    flex-basis: 100%;
    margin-left: 0;
  }
  .techno__top {
    margin-top: 0;
  }
}
@media screen and (max-width: 500px) {
  .techno__top__stack__row {
    width: 100%;
  }
}
</style>