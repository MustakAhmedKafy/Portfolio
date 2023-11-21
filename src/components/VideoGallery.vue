<script setup>
import { ref } from "vue";

const title = ref("Provided Solutions");
const description = ref(
  "Transforming raw footage into compelling visual stories with precision and creativity. Let me bring your vision to life."
);

const videos = [
  { id: "video_1", src: "https://www.youtube.com/embed/rbhoI9zZj0Q" },
  { id: "video_2", src: "https://www.youtube.com/embed/isjwoD4qZX0" },
  { id: "video_3", src: "https://www.youtube.com/embed/J5ffJxJhVmQ" },
  { id: "video_4", src: "https://www.youtube.com/embed/xqNydcmM2XA" },
  { id: "video_5", src: "https://www.youtube.com/embed/nkzDZW4cY6I" },
  { id: "video_6", src: "https://www.youtube.com/embed/iS3zsukbWYo" },
];
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
        <div
          v-for="(video, index) in videos"
          :key="index"
          class="col-md-4 mt-5"
        >
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
            width="100%"
            height="230"
              :src="video.src"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-services .single-service {
  position: relative;
  margin-top: 30px;
  background-color: rgba(242, 242, 242, 5);
  border-radius: 10px;
  padding: 40px 30px;
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
  background-color: #0f6d73;
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
  background-color: #0f6d73;
  border-radius: 5px;
  line-height: 70px;
  text-align: center;
  color: #fff;
  font-size: 30px;
  transition: all 0.3s;
}

.section-services .single-service:hover .icon {
  background-color: #fff;
  color: #0f6d73;
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
  font-size: 14px;
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
  background-color: #0f6d73;
  transition: background-color 0.3s;
}

.section-services .single-service:hover a:after {
  background-color: #fff;
}
</style>
