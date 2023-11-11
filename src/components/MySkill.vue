<script setup>
import { ref } from "vue";

const title = ref("Areas of Strength");
const description = ref(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et."
);

const skills = ref([
  { icon: "/skill_icon/html.png", name: "HTML" },
  { icon: "/skill_icon/css.png", name: "CSS" },
  { icon: "/skill_icon//sass.png", name: "SCSS" },
  { icon: "/skill_icon/bootstrap.png", name: "Bootstrap" },
  { icon: "/skill_icon/tailwind.png", name: "Tailwind CSS" },
  { icon: "/skill_icon/javascript.png", name: "Javascript" },
  { icon: "/skill_icon/vuejs.png", name: "Vue JS" },
  { icon: "/skill_icon/jquery.png", name: "jQuery" },
  { icon: "/skill_icon/vuetify.svg", name: "Vuetify" },
  { icon: "/skill_icon/antDesign.png", name: "Ant Design" },
  { icon: "/skill_icon/php.png", name: "PHP" },
  { icon: "/skill_icon/mysql.png", name: "My SQL" },
    { icon: "/skill_icon/git.png", name: "Git" },
  { icon: "/skill_icon/github.png", name: "Git Hub" },
  { icon: "/skill_icon/MSoffice.png", name: "MS Office" },
  { icon: "/skill_icon/filmora.png", name: "Video Editing" },
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
      <!-- <h2 class="text-center text-uppercase">My Skill</h2>
      <div class="hr-line"></div> -->
      <!-- <div class="row">
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/html.png" alt="" />
            <h6 class="mt-2">HTML</h6>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/css.png" alt="" />
            <h6 class="mt-2">CSS</h6>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/sass.png" alt="" />
            <h6 class="mt-2">HTML</h6>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/bootstrap.png" alt="" />
            <h6 class="mt-2">Bootstrap</h6>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/tailwind.png" alt="" />
            <h6 class="mt-2">Tailwind CSS</h6>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/javascript.png" alt="" />
            <h6 class="mt-2">Javascript</h6>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/vuejs.png" alt="" />
            <h6 class="mt-2">Vue JS</h6>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/jquery.png" alt="" />
            <h6 class="mt-2">jQuery</h6>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/vuetify.svg" alt="" />
            <h6 class="mt-2">Vuetify</h6>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/antDesign.png" alt="" />
            <h6 class="mt-2">Ant Design</h6>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/php.png" alt="" />
            <h6 class="mt-2">PHP</h6>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/mysql.png" alt="" />
            <h6 class="mt-2">MySQL</h6>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/git.png" alt="" />
            <h6 class="mt-2">Git</h6>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/github.png" alt="" />
            <h6 class="mt-2">GitHub</h6>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/.png" alt="" />
            <h6 class="mt-2">MS Office</h6>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 col-6 mt-3">
          <div class="text-center p-3 border rounded bg-light shadow">
            <img src="../skill_icon/filmora.png" alt="" />
            <h6 class="mt-2">Video Editing</h6>
          </div>
        </div>
      </div> -->
      <div class="row">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="col-lg-2 col-md-4 col-6 mt-3"
        >
          <div class="text-center p-3 border rounded bg-light shadow">
            <img :src="skill.icon" alt="" />
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
  background-color: rgba(242, 242, 242, 5);
}
.skill img {
  width: 100%;
  height: 80px;
  object-fit: contain;
}
</style>
