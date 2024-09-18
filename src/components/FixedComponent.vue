<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition >= 400) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <section class="fixed-component d-none d-lg-block">
    <div class="right-side" :class="{ visible: isVisible }">ahmedmustak99@gmail.com</div>
    <div class="left-side" :class="{ visible: isVisible }">
      <ul class="social-network social-circle">
        <li>
          <a
            href="https://www.facebook.com/MustakAhmedKafy"
            target="_blank"
            class="icoFacebook mt-2"
            title="Facebook"
            ><i class="fa-brands fa-facebook-f"></i
          ></a>
        </li>
        <li>
          <a
            href="https://twitter.com/Mustak_Kafy"
            target="_blank"
            class="icoTwitter mt-2"
            title="Twitter"
            ><i class="fa-brands fa-twitter"></i
          ></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mustakahmedkafy"
            target="_blank"
            class="icoLinkedin mt-2"
            title="Linkedin"
            ><i class="fa-brands fa-linkedin-in"></i
          ></a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/k_a_f_y/"
            target="_blank"
            class="icoInstagram mt-2"
            ><i class="fa-brands fa-instagram"></i
          ></a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/thekafyshow"
            target="_blank"
            class="icoYoutube mt-2"
            ><i class="fab fa-youtube" aria-hidden="true"></i
          ></a>
        </li>
        <li>
          <a
            href="https://github.com/MustakAhmedKafy"
            target="_blank"
            class="icoGitHub mt-2"
            ><i class="fab fa-github" aria-hidden="true"></i
          ></a>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
.right-side {
  writing-mode: vertical-lr;
  position: fixed;
  bottom: 200px;
  right: 30px;
  color: rgb(77, 35, 136);
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.right-side.visible {
  opacity: 1;
}

.right-side::after {
  content: "";
  border-radius: 3px;
  height: 120px;
  width: 2px;
  position: fixed;
  bottom: 70px;
  right: 43px;
  background-color: rgb(77, 35, 136);
}
.left-side {
  /* writing-mode: vertical-lr; */
  position: fixed;
  bottom: 182px;
  left: 5px;
  color: rgb(77, 35, 136);
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.left-side.visible {
  opacity: 1;
}

.left-side::after {
  content: "";
  border-radius: 3px;
  height: 120px;
  width: 2px;
  position: fixed;
  bottom: 70px;
  left: 43px;
  background-color: rgb(77, 35, 136);
}
ul li {
  list-style: none;
  margin: 10px 0px;
}
ul li a {
  color: rgb(77, 35, 136);
}
</style>
