<script setup>
import { ref, onMounted } from "vue";
// import HelloWorld from "./HelloWorld.vue";

const activeLink = ref(0);

const myLogo = {
  src: "img/logo.png",
  alt: "logo",
};

const navLinks = [
  { label: "Home", key: "index.html" },
  { label: "About", key: "#about" },
  { label: "Skill", key: "#skill" },
  { label: "Services", key: "#services" },
  { label: "Experience", key: "#experience" },
  { label: "Project", key: "#project" },
  { label: "Photography", key: "#photography" },
  { label: "Video Editing", key: "#videogallery" },
  { label: "Contact", key: "#contact" },
];

const title = "I am Mustak Ahmed";

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
  <nav class="navbar navbar-expand-lg navbar-light fixed-top py-4">
    <div class="container d-flex align-items-center">
      <a class="navbar-brand" href="#"
        ><img :src="myLogo.src" :alt="myLogo.alt"
      /></a>
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
nav {
  backdrop-filter: blur(10px);
  background-color: rgba(248, 249, 250, 0.8);
}
.navbar img {
  width: 150px;
}
.navbar button {
  border: 0px;
}
.navbar button:focus {
  box-shadow: none;
}
.navbar-nav .nav-link {
  padding: 0.5rem 1rem;
  position: relative;
  font-size: 17px;
  display: inline;
}
.nav-link {
  padding: 0px !important;
  padding-bottom: 3px !important;
}
.nav-item {
  padding: 0px 10px;
}

.navbar-nav .nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0; /* Initially, the line has zero width */
  height: 2px;
  background-color: #714fa1; /* Set your line color */
  transition: width 0.3s ease; /* Add transition effect for width */
}

.navbar-nav .nav-link.active::after {
  width: 100%; /* Expand the line to 100% for the active link */
}

.nav-link.active {
  color: #714fa1 !important; /* Set your active link color */
  font-weight: bold;
}

/*only mobile area */
@media (max-width: 768px) {
  nav .nav-item {
    padding: 2px 10px !important;
  }
}

/* tab area only  */
@media (min-width: 768px) and (max-width: 991.98px) {
  nav .nav-item {
    padding: 2px 10px !important;
  }
}
</style>
