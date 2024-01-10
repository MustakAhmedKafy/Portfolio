<template>
  <section class="photography pt-5 pb-5" id="photography">
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
          v-for="(image, index) in images"
          :key="index"
          class="col-md-3 mb-4"
        >
          <lightgallery
            :settings="{ speed: 500, plugins: plugins }"
            @onInit="onInit"
            @onBeforeSlide="onBeforeSlide"
            elementClassNames="row"
            licenseKey="4444-5555-6666-4444"
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
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

const title = ref("Captured Moments");
const description = ref(
  "Embark on a visual odyssey through nature's wonders. Discover awe-inspiring landscapes, majestic wildlife, and breathtaking moments frozen in time, captured with a blend of artistry and passion."
);

const images = ref([
  { path: "./gallery/photo-1.jpg" },
  { path: "./gallery/photo-2.jpg" },
  { path: "./gallery/photo-3.jpg" },
  { path: "./gallery/photo-4.jpg" },
  { path: "./gallery/photo-5.jpg" },
  { path: "./gallery/photo-6.jpg" },
  { path: "./gallery/photo-7.jpg" },
  { path: "./gallery/photo-8.jpg" },
  { path: "./gallery/photo-9.jpg" },
  { path: "./gallery/photo-10.jpg" },
  { path: "./gallery/photo-11.jpg" },
  { path: "./gallery/photo-12.jpg" },
  { path: "./gallery/photo-13.jpg" },
  { path: "./gallery/photo-14.jpg" },
  { path: "./gallery/photo-15.jpg" },
  { path: "./gallery/photo-16.jpg" },
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
<style>
#photography{
  background-color: rgba(242, 242, 242, 5);
}

</style>
