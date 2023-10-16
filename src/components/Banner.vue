<script setup>
import { ref, onMounted } from "vue";
const title = "I am Mustak Ahmed";
// text type
const textsToType = ["Hello, World!", "Vue.js is awesome!", "Coding is fun!"];
const typingSpeed = 100;

let textIndex = 0;
const typedText = ref("");

onMounted(() => {
  typeText();
});

function typeText() {
  let charIndex = 0;
  const typingInterval = setInterval(() => {
    typedText.value += textsToType[textIndex][charIndex];
    charIndex++;

    if (charIndex === textsToType[textIndex].length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        eraseText();
      }, 1000); // Wait for 1 second before erasing
    }
  }, typingSpeed);
}

function eraseText() {
  const erasingInterval = setInterval(() => {
    typedText.value = typedText.value.slice(0, -1);

    if (typedText.value === "") {
      clearInterval(erasingInterval);

      if (textIndex < textsToType.length - 1) {
        // Move to the next text
        textIndex++;
        typedText.value = ""; // Clear the typed text
        setTimeout(() => {
          typeText();
        }, 500); // Wait for 0.5 seconds before typing the next text
      } else {
        // Reset to the first text and loop
        textIndex = 0;
        setTimeout(() => {
          typeText();
        }, 500); // Wait for 0.5 seconds before typing the first text again
      }
    }
  }, typingSpeed);
}
</script>

<template>
  <div>
    <div class="header">
         <div id="home" class="intro route bg-image">
    <div class="overlay-itro"></div>
    <div class="intro-content display-table">
      <div class="table-cell  inner-header flex">
        <div class="container">
          <h1 class="intro-title mb-4">{{ title }}</h1>
          <div style="height: 70px">
            <h1>{{ typedText }}</h1>
          </div>

          <a :href="cvLink" download>
            <button type="button" class="btn btn-primary mt-3">
              Download CV
              <i class="fa fa-download" aria-hidden="true"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
        <!-- <div class="inner-header flex">
       
        <h1>{{title}}</h1>
        </div> -->
        
        <!--Waves Container-->
        <div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
        </svg>
        </div>
        <!--Waves end-->
        
        </div>
        <!--Header ends-->
  </div>
</template>


<style scoped>

h1 {
  font-family: 'Dancing Script', sans-serif;
  font-weight:300;
  letter-spacing: 2px;
  font-size:48px;

}
p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size:14px;
  color: #333333;
}

.header {
  position:relative;
  text-align:center;
  background: linear-gradient(60deg, rgb(54, 218, 204) 0%, rgb(8, 88, 98) 100%);
  color:white;
}

.inner-header {
  height:65vh;
  width:100%;
  margin: 0;
  padding: 0;
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

.content {
  position:relative;
  height:20vh;
  text-align:center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}



.display-table {
  width: 100%;
  height: 100%;
  display: table;
}

.table-cell {
  display: table-cell;
  vertical-align: middle;
}

.intro {
  height: 75vh;
  position: relative;
  color: #fff;
}

.intro .intro-content {
  text-align: center;
  position: absolute;
}


.intro .intro-title {
  color: #fff;
  font-weight: 600;
  font-size: 4rem;
}

.intro .intro-subtitle {
  font-size: 2rem;
  font-weight: 300;
  color: #fff;
}

.intro .text-slider-items {
  display: none;
}


.intro .text-slider {
  display: inline-block;
  overflow: hidden;
  position: relative;
}

.intro .text-slider::after {
  content: "";
  display: inline-block;
  vertical-align: text-bottom;
  animation: showText 3s linear infinite;
}

@keyframes showText {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-1em);
  }
  50% {
    transform: translateY(-2em);
  }
  75% {
    transform: translateY(-1em);
  }
  100% {
    transform: translateY(0);
  }
}
</style>