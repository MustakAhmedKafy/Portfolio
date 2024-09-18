<script setup>
import { onMounted, ref } from "vue";

const props = defineProps(["link", "buttonText"]);

const myLink = ref(props.link || "#");
const myButtonText = ref(props.buttonText || "Click me");
onMounted(() => {
  const buttons = document.querySelectorAll(".button_su_inner");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
  });

  function handleMouseEnter(e) {
    const relX = e.clientX - e.target.getBoundingClientRect().left;
    const relY = e.clientY - e.target.getBoundingClientRect().top;

    const circle = e.target.previousElementSibling;
    circle.style.left = relX + "px";
    circle.style.top = relY + "px";
    circle.classList.remove("desplode-circle");
    circle.classList.add("explode-circle");
  }

  function handleMouseLeave(e) {
    const relX = e.clientX - e.target.getBoundingClientRect().left;
    const relY = e.clientY - e.target.getBoundingClientRect().top;

    const circle = e.target.previousElementSibling;
    circle.style.left = relX + "px";
    circle.style.top = relY + "px";
    circle.classList.remove("explode-circle");
    circle.classList.add("desplode-circle");
  }
});
</script>

<template>
  <div class="button_container">
    <div class="button_su border rounded-pill">
      <span class="su_button_circle"> </span>
      <a :href="link" class="button_su_inner" target="_blank">
        <span class="button_text_container">{{ buttonText }}</span>
      </a>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata:400,700");

.button_su {
  overflow: hidden;
  position: relative;
  display: inline-block;
  border-radius: 3px;
  margin-bottom: 30px;
}

.su_button_circle {
  background-color: red;
  border-radius: 1000px;
  position: absolute;
  left: 0;
  top: 0;
  width: 0px;
  height: 0px;
  margin-left: 0px;
  margin-top: 0px;
  pointer-events: none;
}

.button_su_inner {
  display: inline-block;
  background: #e6e6e6;
  color: #201f1f;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  border-radius: 0.375rem;
  transition: 400ms;
  text-decoration: none;
  padding: 6px 20px 7px 20px;
  z-index: 100000;
  font-weight: 600;
}
.button_su_inner:hover {
  color: #fff;
}

.button_text_container {
  position: relative;
  /* z-index: 10000; */
}

.explode-circle {
  animation: explode 0.5s forwards;
}

.desplode-circle {
  animation: desplode 0.5s forwards;
}

@keyframes explode {
  0% {
    width: 0px;
    height: 0px;
    margin-left: 0px;
    margin-top: 0px;
    background-color: rgba(42, 53, 80, 0.2);
  }
  100% {
    width: 400px;
    height: 400px;
    margin-left: -200px;
    margin-top: -200px;
    background-color: #714fa1;
  }
}

@keyframes desplode {
  0% {
    width: 400px;
    height: 400px;
    margin-left: -200px;
    margin-top: -200px;
    background-color: #714fa1;
  }
  100% {
    width: 0px;
    height: 0px;
    margin-left: 0px;
    margin-top: 0px;
    background-color: rgba(96, 67, 137, 0.6);
  }
}
</style>
