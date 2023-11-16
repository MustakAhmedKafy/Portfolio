<template>
  <div class="container">
    <div class="row">
      <div v-for="(image, index) in images" :key="index" class="col-md-3 mb-4">
        <lightgallery
          :settings="{ speed: 500, plugins: plugins }"
          @onInit="onInit"
          @onBeforeSlide="onBeforeSlide"
          elementClassNames="row"
        >
          <a :href="image.path">
            <img
              :alt="'img' + (index + 1)"
              :src="image.path"
              class="img-fluid"
            />
          </a>
        </lightgallery>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

const images = ref([
  { path: "/skill_icon/filmora.png" },
  { path: "/skill_icon/filmora.png" },
  // Add more image objects as needed
]);

const plugins = ref([lgThumbnail, lgZoom]);

const onInit = () => {
  console.log("lightGallery has been initialized");
};

const onBeforeSlide = () => {
  console.log("calling before slide");
};

// Additional logic can be added here

onMounted(() => {
  // Additional logic on component mount
});
</script>

<style lang="css" scoped>
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-thumbnail.css";
@import "lightgallery/css/lg-zoom.css";
</style>
