<script setup>
import { ref } from "vue";

const title = ref("Areas of Strength");
const description = ref(
  " Proficient in responsive design, cross-browser compatibility, and UI/UX principles. Strong problem-solving skills, collaboration, and attention to detail."
);

const skills = ref([
  { icon: "./skill_icon/html.png", name: "HTML", alt:"html" },
  { icon: "./skill_icon/css.png", name: "CSS", alt:"css"},
  { icon: "./skill_icon//sass.png", name: "SCSS", alt:"sass"},
  { icon: "./skill_icon/bootstrap.png", name: "Bootstrap", alt:"bootstrap"},
  { icon: "./skill_icon/tailwind.png", name: "Tailwind CSS", alt:"tailwind"},
  { icon: "./skill_icon/javascript.png", name: "Javascript", alt:"javascript"},
  { icon: "./skill_icon/vuejs.png", name: "Vue JS", alt:"vuejs"},
  { icon: "./skill_icon/nuxt-icon.png", name: "Nuxt JS", alt:"Nuxt js"},
  { icon: "./skill_icon/jquery.png", name: "jQuery", alt:"jquery"},
  { icon: "./skill_icon/vuetify.svg", name: "Vuetify", alt:"vuetify"},
  { icon: "./skill_icon/antDesign.png", name: "Ant Design", alt:"antDesign"},
  { icon: "./skill_icon/wordpress.png", name: "Wordpress", alt:"wordpress"},
  { icon: "./skill_icon/php.png", name: "PHP", alt:"php"},
  { icon: "./skill_icon/mysql.png", name: "My SQL", alt:"mysql"},
  { icon: "./skill_icon/git.png", name: "Git", alt:"git"},
  { icon: "./skill_icon/github.png", name: "Git Hub", alt:"github"},
  // { icon: "./skill_icon/MSoffice.png", name: "MS Office", alt:"MSoffice"},
  { icon: "./skill_icon/filmora.png", name: "Video Editing", alt:"filmora"},
  { icon: "./skill_icon/photoshop.png", name: "Adobe Photoshop", alt:"photoshop"},
  // Add other skills here...
]);
</script>

<template>
  <section class="skill py-5" id="skill">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-10 col-lg-8">
          <div class="header-section">
            <h2 class="title">{{ title }}</h2>
            <p class="description">{{ description }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="col-lg-2 col-md-4 col-6 mt-3"
        >
          <div class="text-center p-3 rounded bg-light shadow-sm">
            <img :src="skill.icon" :alt="skill.alt" />
            <h6 class="mt-2">{{ skill.name }}</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.8) !important;
}
.skill {
  background-color: #f0f2f4;
}
.skill img {
  width: 100%;
  height: 80px;
  object-fit: contain;
}
</style>
