<script setup>
import { ref } from "vue";
import Button from "./Button.vue";

const button2 = {
  text: "Preview",
};

const title = ref("Creative Showcase");
const description = ref(
  "Here showcases a collection of my frontend development work, demonstrating my proficiency in creating responsive, visually appealing websites with clean code and intuitive user interfaces. Explore my projects and witness the power of clean code and innovative design."
);

const cards = ref([
  {
    imageUrl: "https://source.unsplash.com/1600x900/?background",
    title: "Title Examples 1",
    description: "Lorem ipsum description examples.",
    url: "https://source.unsplash.com/1600x900/?background",
  },
  {
    imageUrl: "https://source.unsplash.com/1600x900/?background",
    title: "Title Examples 2",
    description: "Lorem ipsum description examples.",
    url: "#",
  },
  {
    imageUrl: "https://source.unsplash.com/1600x900/?background",
    title: "Title Examples 3",
    description: "Lorem ipsum description examples.",
    url: "#",
  },
  {
    imageUrl: "https://source.unsplash.com/1600x900/?background",
    title: "Title Examples 3",
    description: "Lorem ipsum description examples.",
    url: "#",
  },
  {
    imageUrl: "https://source.unsplash.com/1600x900/?background",
    title: "Title Examples 3",
    description: "Lorem ipsum description examples.",
    url: "#",
  },
  {
    imageUrl: "https://source.unsplash.com/1600x900/?background",
    title: "Title Examples 3",
    description: "Lorem ipsum description examples.",
    url: "#",
  },
]);
</script>

<template>
  <section class="section-services py-5" id="project">
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
        <!-- CARD 1-->
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="col-lg-4 col-md-6 col-sm-12"
        >
          <a :href="card.url" class="url-box">
            <figure class="newsCard news-Slide-up">
              <img :src="card.imageUrl" />
              <div class="newsCaption px-4">
                <div
                  class="d-flex align-items-center justify-content-between cnt-title"
                >
                  <h5 class="newsCaption-title text-white m-0">
                    {{ card.title }}
                  </h5>
                  <div class="link-icon">
                    <i class="fa-solid fa-link"></i>
                  </div>
                </div>
                <div class="newsCaption-content d-flex">
                  <span class="col-10 py-2 px-0">{{ card.description }}</span>
                </div>
                <Button :link="button2.url" :buttonText="button2.text"></Button>
              </div>
              <span class="overlay"></span>
            </figure>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.link-icon .fa-link {
  display: block;
  width: 35px;
  height: 35px;
  background: #fff;
  font-size: 16px;
  color: #0c636b;
  margin-right: 10px;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.link-icon .fa-link:hover {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}
.newsCard {
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 6px;
}

figure img {
  display: block;
  object-fit: cover !important;
  object-position: center center !important;
  height: 100%;
  width: 100%;
}

.overlay {
  background: rgb(12, 99, 107);
  background: -moz-linear-gradient(
    0deg,
    rgba(40, 26, 54, 1) 0%,
    rgba(89, 59, 116, 0) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(40, 26, 54, 1) 0%,
    rgba(89, 59, 116, 0) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(12, 99, 107, 1) 0%,
    rgba(12, 99, 107, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#281a36", endColorstr="#593b74", GradientType=1);
  display: block;
  position: absolute;
  height: 200px;
  width: 100%;
  bottom: 0;
  z-index: 3;
}

.newsCaption {
  position: absolute;
  top: auto;
  bottom: 31px;
  left: 0;
  width: 100%;
  height: 35%;
  z-index: 10;
  padding: 15px;
  transform: translateY(80%);
  backface-visibility: hidden;
  transition: transform 0.4s;
  color: #fff;
}

.newsCaption-title {
  margin-top: 0px;
}

.newsCaption-content {
  margin: 0;
}

.newsCaption-link {
  color: #fff;
  text-decoration: underline;
  opacity: 0.8;
  transition: opacity 0.15s cubic-bezier(0.39, 0.58, 0.57, 1);
}

.news-Slide-up:hover .overlay {
  background: rgb(12, 99, 107);
  /* background: -moz-linear-gradient(0deg, rgba(64, 10, 111, 1) 0%, rgba(89, 59, 116, 0) 100%);
  background: -webkit-linear-gradient(0deg, rgba(64, 10, 111, 1) 0%, rgba(89, 59, 116, 0) 100%); */
  background: linear-gradient(
    0deg,
    rgba(47, 200, 189, 1) 0%,
    rgba(12, 99, 107, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#400a6f", endColorstr="#593b74", GradientType=1);
}

.news-Slide-up:hover .newsCaption {
  transform: translateY(0);
}
</style>
