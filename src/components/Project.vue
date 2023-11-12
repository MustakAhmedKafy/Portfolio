<script setup>
import { ref } from "vue";

const title = ref("Provided Solutions");
const description = ref(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et."
);

const cards = ref([
  {
    imageUrl: 'https://source.unsplash.com/1600x900/?background',
    title: 'Title Examples 1',
    description: 'Lorem ipsum description examples.',
    url: '#'
  },
  {
    imageUrl: 'https://source.unsplash.com/1600x900/?background',
    title: 'Title Examples 2',
    description: 'Lorem ipsum description examples.',
    url: '#'
  },
  {
    imageUrl: 'https://source.unsplash.com/1600x900/?background',
    title: 'Title Examples 3',
    description: 'Lorem ipsum description examples.',
    url: '#'
  }
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
        <!-- CARD 1-->
        <div v-for="(card, index) in cards" :key="index" class="col-lg-4">
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
                  <i class="fas fa-arrow-alt-circle-right"></i>
                </div>
                <div class="newsCaption-content d-flex">
                  <p class="col-10 py-3 px-0">{{ card.description }}</p>
                </div>
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
  background: rgb(40, 26, 54);
  background: -moz-linear-gradient(0deg, rgba(40, 26, 54, 1) 0%, rgba(89, 59, 116, 0) 100%);
  background: -webkit-linear-gradient(0deg, rgba(40, 26, 54, 1) 0%, rgba(89, 59, 116, 0) 100%);
  background: linear-gradient(0deg, rgba(40, 26, 54, 1) 0%, rgba(89, 59, 116, 0) 100%);
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
}

.newsCaption i {
  font-size: 24px;
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
  background: rgb(64, 10, 111);
  background: -moz-linear-gradient(0deg, rgba(64, 10, 111, 1) 0%, rgba(89, 59, 116, 0) 100%);
  background: -webkit-linear-gradient(0deg, rgba(64, 10, 111, 1) 0%, rgba(89, 59, 116, 0) 100%);
  background: linear-gradient(0deg, rgba(64, 10, 111, 1) 0%, rgba(89, 59, 116, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#400a6f", endColorstr="#593b74", GradientType=1);
}

.news-Slide-up:hover .newsCaption {
  transform: translateY(0);
}

</style>

