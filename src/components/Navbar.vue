<script setup>
import { ref, onMounted } from "vue";
// import HelloWorld from "./HelloWorld.vue";

const activeLink = ref(0);

const navLinks = [
  { label: "Home", key: "index.html" },
  { label: "About", key: "#about" },
  { label: "Skill", key: "#mySkill" },
  { label: "Services", key: "#services" },
  { label: "Project" },
  { label: "Photography" },
  { label: "Video Editing" },
  { label: "Contact" },
  { label: "CV" },
];

const title = "I am Mustak Ahmed";
const cvLink = "img/myself/Mustak_Ahmed.pdf";

const setActive = (index) => {
  activeLink.value = index;
};

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
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li v-for="(link, index) in navLinks" :key="index" class="nav-item">
            <a
              :href="link.key"
              class="nav-link"
              :class="{ active: activeLink === index }"
              @click="setActive(index)"
              
            >
              {{ link.label }}
            </a>
          </li>
          <!-- <a :href="cvLink" download>
            <button type="button" class="btn btn-primary mt-3">
             Online Resume
              <i class="fa fa-download" aria-hidden="true"></i>
            </button>
          </a> -->
        </ul>
      </div>
    </div>
  </nav>
  <!-- banner area Start -->
  <!-- <div id="home" class="intro route bg-image">
    <div class="overlay-itro"></div>
    <div class="intro-content display-table">
      <div class="table-cell">
        <div class="container">
          <h1 class="intro-title mb-4">{{ title }}</h1>
          <div style="height: 100px">
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
  </div> -->
  <!-- banner area End -->
  <!-- <HelloWorld /> -->
</template>

<style scoped>
.navbar-nav .nav-link {
  padding: 0.5rem 1rem;
  position: relative;
}

.navbar-nav .nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0; /* Initially, the line has zero width */
  height: 2px;
  background-color: #007bff; /* Set your line color */
  transition: width 0.3s ease; /* Add transition effect for width */
}

.navbar-nav .nav-link.active::after {
  width: 100%; /* Expand the line to 100% for the active link */
}

.nav-link.active {
  color: #007bff; /* Set your active link color */
  font-weight: bold;
}

/* .bg-image {
  background-repeat: no-repeat;
  background-attachment: fixed;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
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
  height: 100vh;
  position: relative;
  color: #fff;
}

.intro .intro-content {
  text-align: center;
  position: absolute;
}

.intro .overlay-itro {
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0px;
  padding: 0;
  height: 100%;
  width: 100%;
  opacity: 0.9;
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

#home {
  background-image: url(../assets/banner.jpg);
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
} */
</style>
