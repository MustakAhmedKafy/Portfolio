<script setup>
import { ref } from "vue";
import ContactForm from "./ContactForm.vue";
import Social from "./Social.vue";

const title = ref("Say Hello");
const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <div class="say-hello pt-5" id="contact">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-10 col-lg-8">
          <div class="header-section">
            <h2 class="title">{{ title }}</h2>
            <!-- <p class="description">{{ description }}</p> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <ContactForm />
        </div>
        <div class="col-md-4">
          <Social />
        </div>
      </div>
    </div>
    <footer class="py-3 mt-5">
      <div class="container">
        <h6 class="text-center text-white">
          &#169;Copyright {{ currentYear }} mustakkafy.com All Right Reserved.
        </h6>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.say-hello {
  background-color: #f0f2f4;
}
footer {
  background-color: #714fa1;
}
</style>
