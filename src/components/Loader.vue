<template>
  <div class="loader" v-if="showLoader">
     <img class="w-25"  :src="loader" alt="Loader" />
  </div>
</template>

<script setup>
const loader = "./img/loader-2.gif";
const props = defineProps(["showLoader"]);
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
 
}
/* Add any additional styling as needed */
</style>
