<script setup>
import { ref, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
import About from "./components/About.vue";
import MySkill from "./components/MySkill.vue";
import Services from "./components/Services.vue";
import Experience from "./components/Experience.vue";
import Project from "./components/Project.vue";
import Gallery from "./components/Gallery.vue";
import VideoGallery from "./components/VideoGallery.vue";
import Contact from "./components/Contact.vue";
import Loader from "./components/Loader.vue";
import FixedComponent from "./components/FixedComponent.vue";

const isLoading = ref(true);

const fetchData = () => {
  // Simulate loading data
  setTimeout(() => {
    isLoading.value = false; // Set it to false when data is loaded
  }, 4000); // Adjust time as needed
};

onMounted(() => {
  fetchData(); // Call a method to fetch data or perform any other initialization
});
</script>

<template>
  <Loader :showLoader="isLoading" />
  <div v-if="!isLoading">
    <Navbar />
    <Banner />
    <About />
    <MySkill />
    <Services />
    <Experience />
    <Project />
    <Gallery />
    <VideoGallery />
    <Contact />
    <FixedComponent />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

body {
  font-family: "Quicksand", sans-serif;
}
p {
  font-weight: 500;
  font-size: 16px;
  color: #282828;
  opacity: 0.9;
}

@media (max-width: 767px) {
  html {
    scroll-behavior: auto;
  }
}

.header-section {
  margin-bottom: 34px;
}

.header-section .title {
  position: relative;
  padding-bottom: 14px;
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 32px;
}

.header-section .title:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: rgb(96, 67, 137);
  border-radius: 3px;
}

.header-section .title:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(30px);
  width: 10px;
  height: 3px;
  background-color: rgb(147, 117, 189);
  border-radius: 3px;
}

.header-section .description {
  font-size: 16px;
  color: #282828;
  opacity: 0.9;
}

/* pagination */
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #714fa1;
  border: 1px solid #714fa1;
  color: white;
}
.active-page:hover {
  background-color: #604389;
}
</style>
