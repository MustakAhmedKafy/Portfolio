<script setup>
import { ref, computed, onMounted } from "vue";
import Button from "./Button.vue";

const button2 = {
  text: "Preview",
  url: "#", // Replace with a default URL or remove if not needed
};

const title = ref("Creative Showcase");
const description = ref(
  "Here showcases a collection of my frontend development work, demonstrating my proficiency in creating responsive, visually appealing websites with clean code and intuitive user interfaces. Explore my projects and witness the power of clean code and innovative design."
);

const cards = [
  {
    imageUrl: "img/orbit.jpg",
    title: "Exclusive E-commerse",
    url: "https://nuxt-ecommerce-coderorbit.vercel.app/",
    alt: "Exclusive e-commerse",
  },
  {
    imageUrl: "img/msa-school.jpg",
    title: "MSA School",
    url: "https://msa-school.vercel.app/",
    alt: "MSA School",
  },
  {
    imageUrl: "img/msa-dashboard.jpg",
    title: "MSA Dashboard",
    url: "https://msa-dashboard-ten.vercel.app/",
    alt: "MSA Dashboard",
  },
  {
    imageUrl: "img/food.jpg",
    title: "Food Ordering",
    url: "https://rosespice.co.uk/",
    alt: "Food Ordering",
  },
  {
    imageUrl: "img/teamOreo.jpg",
    title: "Team Oreo",
    url: "https://team-oreo.vercel.app/",
    alt: "Team Oreo",
  },

  {
    imageUrl: "img/grocery.jpg",
    title: "Alislah Grocery Shop",
    url: "https://grocery.yumaapp.uk/",
    alt: "Alislah Grocery Shop",
  },
  {
    imageUrl: "img/essence.jpg",
    title: "Essense E-commerse Homepage",
    url: "https://mustakahmedkafy.github.io/Essence/",
    alt: "Essence e-commerse",
  },
  {
    imageUrl: "img/munchkin.jpg",
    title: "Munchkin Nursery School",
    url: "https://mustakahmedkafy.github.io/Munchkin_School/",
    alt: "Munchkin Nursery School",
  },
  // {
  //   imageUrl: "img/epos_choice.jpg",
  //   title: "EPOS Choice",
  //   url: "https://mustakkafy.com/epos_choice/",
  //   alt: "EPOS Choice",
  // },

  {
    imageUrl: "img/mechanic.jpg",
    title: "Mechanic Mate",
    url: "https://mustakahmedkafy.github.io/MechanicMate/",
    alt: "Mechanic Mate",
  },
  {
    imageUrl: "img/realestate.jpg",
    title: "Real Estate Website",
    url: "https://mustakahmedkafy.github.io/RealEstate/",
    alt: "Real Estate Website",
  },

  {
    imageUrl: "img/carehome.jpg",
    title: "Care Home Dashboard",
    url: "https://carehome.yumaapp.uk/",
    alt: "Care Home Dashboard",
  },

  // {
  //   imageUrl: "img/techforing.jpg",
  //   title: "Tech Foring",
  //   url: "https://mustakahmedkafy.github.io/TechForing/",
  //   alt: "Tech Foring",
  // },

  {
    imageUrl: "img/healthcare.jpg",
    title: "Healthcare website",
    url: "https://healthcare.yumaapp.uk/",
    alt: "Healthcare website",
  },
  {
    imageUrl: "img/dashboard.png",
    title: "Ant Vue Dashboard",
    url: "https://ant-dashboard.mustakkafy.com/",
    alt: "Ant Vue Dashboard",
  },
  

  {
    imageUrl: "img/carpetshop.jpg",
    title: "Carpet Shop website",
    url: "https://carpetshop.yumaapp.uk/",
    alt: "Carpet Shop website",
  },

  {
    imageUrl: "img/hexatech.jpg",
    title: "Hexa Tech",
    url: "https://mustakahmedkafy.github.io/IOMatrix/",
    alt: "Hexa Tech",
  },

  {
    imageUrl: "img/epos.jpg",
    title: "Epos Choice Wordpress",
    url: "https://eposchoice.co.uk/",
    alt: "Epos Choice Wordpress",
  },
];



const perPage = 6;

const currentPage = ref(1);
const shortedCard = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return cards.slice(start, start + perPage);
});

const onClickHandler = (page) => {
  currentPage.value = page;
  shortedCard.value = cards.slice(
    6 * (+currentPage.value - 1),
    6 * currentPage.value
  );
  console.log(currentPage);
};
onMounted(() => {
  onClickHandler(currentPage.value);
});
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
        <div v-for="(card, index) in shortedCard" :key="index" class="col-lg-4 col-md-6 col-sm-12 mt-3">
          <a :href="card.url" class="url-box" target="_blank">
            <figure class="newsCard news-Slide-up">
              <img :src="card.imageUrl" :alt="card.alt" />
              <div class="newsCaption px-4">
                <div class="d-flex align-items-center justify-content-between cnt-title">
                  <h5 class="newsCaption-title text-white m-0">
                    {{ card.title }}
                  </h5>
                  <div class="link-icon">
                    <i class="fa-solid fa-link"></i>
                  </div>
                </div>
                <!-- <div class="newsCaption-content d-flex">
                  <span class="col-10 py-2 px-0">{{ card.description }}</span>
                </div> -->
                <Button :link="button2.url" :buttonText="button2.text"></Button>
              </div>
              <span class="overlay"></span>
            </figure>
          </a>
        </div>
      </div>
      <!-- Pagination -->
      <div class="mt-3 text-end">
        <vue-awesome-paginate :total-items="cards.length" :items-per-page="perPage" :max-pages-shown="5"
          v-model="currentPage" :on-click="onClickHandler">
          <template #prev-button>
            <span>
              <i class="fa-solid fa-angle-left"></i>
            </span>
          </template>
          <template #next-button>
            <span>
              <i class="fa-solid fa-angle-right"></i>
            </span>
          </template>
        </vue-awesome-paginate>
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
  color: #714fa1;
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
  background: rgb(113, 79, 161);
  background: -moz-linear-gradient(0deg,
      rgba(40, 26, 54, 1) 0%,
      rgba(89, 59, 116, 0) 100%);
  background: -webkit-linear-gradient(0deg,
      rgba(40, 26, 54, 1) 0%,
      rgba(89, 59, 116, 0) 100%);
  background: linear-gradient(0deg,
      rgba(113, 79, 161, 1) 0%,
      rgba(12, 99, 107, 0) 100%);
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
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 35%;
  z-index: 10;
  padding: 40px 15px;
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

.news-Slide-up .overlay {
  background: rgb(113, 79, 161);
  /* background: -moz-linear-gradient(0deg, rgba(64, 10, 111, 1) 0%, rgba(89, 59, 116, 0) 100%);
  background: -webkit-linear-gradient(0deg, rgba(64, 10, 111, 1) 0%, rgba(89, 59, 116, 0) 100%); */
  background: linear-gradient(0deg,
      rgba(147, 118, 188, 1) 0%,
      rgba(12, 99, 107, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#400a6f", endColorstr="#593b74", GradientType=1);
}

.news-Slide-up .newsCaption {
  transform: translateY(0);
}

@media (max-width: 991px) {
  .news-Slide-up:hover .overlay {
    background: rgb(113, 79, 161);
    background: linear-gradient(0deg,
        rgba(147, 118, 188, 1) 0%,
        rgba(12, 99, 107, 0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#400a6f", endColorstr="#593b74", GradientType=1);
  }

  .news-Slide-up:hover .newsCaption {
    transform: translateY(0);
  }
}

/* desktop media */
@media (min-width: 992px) {
  .row {
    --bs-gutter-x: 3rem;
  }
}
</style>
