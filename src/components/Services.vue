<script setup>
import { ref } from "vue";

const title = ref("Provided Solutions");
const description = ref(
  "I provide professional frontend development services with expertise in web design, responsive design, clean coding, and problem-solving. Additionally, I offer video editing to enhance your digital content."
);

const services = ref([
  {
    icon: "bi bi-code-slash",
    title: "Frontend Development",
    description:
      "Crafting seamless user experiences with expert front-end development solutions.",
  },
  {
    icon: "fa-brands fa-html5", // Correct icon class for HTML5
    title: "Web Design",
    description:
      "Innovative web design solutions for captivating online experiences.",
  },
  {
    icon: "fas fa-laptop-code", // Correct FontAwesome icon class for laptop-code
    title: "Responsive Design",
    description:
      "Creating seamless and engaging experiences across all devices.",
  },
  {
    icon: "bi bi-file-earmark-code-fill",
    title: "Clean Coding",
    description:
      "Delivering high-quality code for efficient and maintainable websites.",
  },
  {
    icon: "bi bi-bug",
    title: "Problem Solving",
    description:
      "Solving complex issues with innovative solutions and expertise.",
  },
  {
    icon: "bi bi-camera-reels",
    title: "Video Editing",
    description:
      "Transforming your footage into stunning visual narratives with precision.",
  },
]);
</script>

<template>
  <section class="section-services py-5" id="services">
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
        <!-- Single Service -->
        <div
          v-for="service in services"
          :key="service.title"
          class="col-md-6 col-lg-4"
        >
          <div class="single-service">
            <div class="content">
              <span class="icon">
                <i :class="service.icon"></i>
                <!-- <img src="../assets/icons8-developer-48.png" alt=""> -->
              </span>
              <h3 class="title">{{ service.title }}</h3>
              <p class="description">{{ service.description }}</p>
            </div>
            <span class="circle-before"></span>
          </div>
        </div>
        <!-- / End Single Service -->
      </div>
    </div>
  </section>
</template>

<style scoped>

.section-services .single-service {
  position: relative;
  margin-top: 30px;
  background-color: #f0f2f4;
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
}

.section-services .single-service .content {
  position: relative;
  z-index: 20;
}

.section-services .single-service .circle-before {
  position: absolute;
  top: 0;
  right: 0px;
  transform: translate(40%, -40%);
  width: 150px;
  height: 150px;
  background-color: #714fa1;
  border: 6px solid #a6a6a6;
  border-radius: 50%;
  opacity: 0.8;
  z-index: 10;
  transition: all 0.6s;
}

.section-services .single-service:hover .circle-before {
  width: 100%;
  height: 100%;
  transform: none;
  border: 0;
  border-radius: 0;
  opacity: 1;
}

.section-services .single-service .icon {
  display: inline-block;
  margin-bottom: 26px;
  width: 70px;
  height: 70px;
  background-color: #714fa1;
  border-radius: 5px;
  line-height: 70px;
  text-align: center;
  color: #fff;
  font-size: 30px;
  transition: all 0.3s;
}

.section-services .single-service:hover .icon {
  background-color: #fff;
  color: #714fa1;
}

.section-services .single-service .title {
  margin-bottom: 18px;
  font-weight: 700;
  font-size: 23px;
  transition: color 0.3s;
}

.section-services .single-service:hover .title {
  color: #fff;
}

.section-services .single-service .description {
  margin-bottom: 20px;
  font-size: 16px;
  transition: color 0.3s;
}

.section-services .single-service:hover .description {
  color: #fff;
}

.section-services .single-service a {
  position: relative;
  font-size: 18px;
  color: #202020;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.section-services .single-service:hover a {
  color: #fff;
}

.section-services .single-service a:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #714fa1;
  transition: background-color 0.3s;
}

.section-services .single-service:hover a:after {
  background-color: #fff;
}
/* desktop media */
@media (min-width: 992px) {
  .row {
    --bs-gutter-x: 3rem;
  }
}

</style>
