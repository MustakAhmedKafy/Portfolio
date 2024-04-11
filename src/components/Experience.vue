<script setup>
import { ref } from "vue";

const title = ref("Professional Background");
const description = ref(
  "Experienced front-end developer with a robust professional background. Proficient in web technologies, responsive design, and clean coding practices. Dedicated to delivering visually appealing and functional websites."
);
</script>

<template>
  <!-- Nav tabs -->
  <div class="timeline py-5" id="experience">
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
        <div class="col-lg-12">
          <div class="timeline-container">
            <div class="timeline-end">
              <p><i class="fa fa-briefcase"></i></p>
            </div>
            <div class="timeline-continue">
              <div class="row timeline-left">
                <div class="col-md-6 d-md-none d-block">
                  <p class="timeline-date">December 06, 2023 – Continuing</p>
                </div>
                <div class="col-md-6">
                  <div class="timeline-box">
                    <div class="timeline-icon d-md-none d-block">
                      <p><i class="fa fa-briefcase"></i></p>
                    </div>
                    <div class="timeline-text">
                      <h3>Frontend Developer</h3>
                      <p>Yuma Technology</p>
                    </div>
                    <div class="timeline-icon d-md-block d-none">
                      <i class="fa fa-briefcase"></i>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-md-block d-none">
                  <p class="timeline-date">December 06, 2023 – Continuing</p>
                </div>
              </div>

              <div class="row timeline-right">
                <div class="col-md-6">
                  <p class="timeline-date">August 13, 2023 – November 30, 2023</p>
                </div>
                <div class="col-md-6">
                  <div class="timeline-box">
                    <div class="timeline-icon">
                      <i class="fa fa-briefcase"></i>
                    </div>
                    <div class="timeline-text">
                      <h3>Junior Software Engineer</h3>
                      <p>Neutron Ltd</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row timeline-left">
                <div class="col-md-6 d-md-none d-block">
                  <p class="timeline-date">March 27, 2023–August 10, 2023</p>
                </div>
                <div class="col-md-6">
                  <div class="timeline-box">
                    <div class="timeline-icon d-md-none d-block">
                      <p><i class="fa fa-briefcase"></i></p>
                    </div>
                    <div class="timeline-text">
                      <h3>Frontend Developer</h3>
                      <p>Hexa Tech</p>
                    </div>
                    <div class="timeline-icon d-md-block d-none">
                      <i class="fa fa-briefcase"></i>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-md-block d-none">
                  <p class="timeline-date">March 27, 2023–August 10, 2023</p>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <div class="timeline-year">
                    <p><i class="fa fa-briefcase"></i></p>
                  </div>
                </div>
              </div>
              <div class="row timeline-right">
                <div class="col-md-6">
                  <p class="timeline-date">May 10, 2022 – March 8, 2023</p>
                </div>
                <div class="col-md-6">
                  <div class="timeline-box">
                    <div class="timeline-icon">
                      <i class="fa fa-briefcase"></i>
                    </div>
                    <div class="timeline-text">
                      <h3>Assistant Senior Officer</h3>
                      <p>Wolton Digi-Tech Industries Limited</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row timeline-left">
                <div class="col-md-6 d-md-none d-block">
                  <p class="timeline-date">
                    September 10, 2021 – December 10, 2021
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="timeline-box">
                    <div class="timeline-icon d-md-none d-block">
                      <i class="fa fa-briefcase"></i>
                    </div>
                    <div class="timeline-text">
                      <h3>Frontend Developer Internship</h3>
                      <p>Developer Experience Hub</p>
                    </div>
                    <div class="timeline-icon d-md-block d-none">
                      <i class="fa fa-briefcase"></i>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-md-block d-none">
                  <p class="timeline-date">
                    September 10, 2021 – December 10, 2021
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="timeline-year">
                    <p><i class="fa fa-briefcase"></i></p>
                  </div>
                </div>
              </div>

              <div class="row timeline-right">
                <div class="col-md-6">
                  <p class="timeline-date">February 1, 2021 – July 31, 2021</p>
                </div>
                <div class="col-md-6">
                  <div class="timeline-box">
                    <div class="timeline-icon">
                      <i class="fa fa-briefcase"></i>
                    </div>
                    <div class="timeline-text">
                      <h3>Trainer</h3>
                      <p>Self Development Technical Training Institute</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row timeline-left">
                <div class="col-md-6 d-md-none d-block">
                  <p class="timeline-date">October 1, 2018 – March 31, 2019</p>
                </div>
                <div class="col-md-6">
                  <div class="timeline-box">
                    <div class="timeline-icon d-md-none d-block">
                      <i class="fa fa-briefcase"></i>
                    </div>
                    <div class="timeline-text">
                      <h3>Web Designer</h3>
                      <p>SATT IT</p>
                    </div>
                    <div class="timeline-icon d-md-block d-none">
                      <i class="fa fa-briefcase"></i>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-md-block d-none">
                  <p class="timeline-date">October 1, 2018 – March 31, 2019</p>
                </div>
              </div>
            </div>
            <div class="timeline-start">
              <p><i class="fa fa-briefcase"></i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  position: relative;
  width: 100%;
  text-align: center;
}

.timeline {
  position: relative;
  width: 100%;
  background-color: #f0f2f4;
}

.timeline .timeline-container {
  position: relative;
  width: 100%;
}

.timeline .timeline-end,
.timeline .timeline-start,
.timeline .timeline-year {
  position: relative;
  width: 100%;
  text-align: center;
  z-index: 1;
}

.timeline .timeline-end p,
.timeline .timeline-start p,
.timeline .timeline-year p {
  display: inline-block;
  width: 60px;
  height: 60px;
  margin: 0;
  padding: 15px 0;
  text-align: center;
  background: linear-gradient(#2fc8bd, #0c636b);
  border-radius: 100px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  color: #ffffff;
  font-size: 20px;
  text-transform: uppercase;
}

.timeline .timeline-year {
  margin: 30px 0;
}

.timeline .timeline-continue {
  position: relative;
  width: 100%;
  padding: 60px 0;
}

.timeline .timeline-continue::after {
  position: absolute;
  content: "";
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  margin-left: -1px;
  background: #4f84c4;
}

.timeline .row.timeline-left,
.timeline .row.timeline-right .timeline-date {
  text-align: right;
}

.timeline .row.timeline-right,
.timeline .row.timeline-left .timeline-date {
  text-align: left;
}

.timeline .timeline-date {
  font-size: 14px;
  font-weight: 600;
  margin: 41px 0 0 0;
}

.timeline .row.timeline-left .timeline-date::after {
  left: -20px;
  top: -18px;
}

.timeline .row.timeline-right .timeline-date::after {
  right: -7px;
}

.timeline .timeline-box,
.timeline .timeline-launch {
  position: relative;
  display: inline-block;
  margin: 15px;
  padding: 20px;
  /* border: 1px solid #dddddd; */
  border-radius: 6px;
  background: #ffffff;
  width: 305px;
}

.timeline .timeline-launch {
  width: 100%;
  margin: 15px 0;
  padding: 0;
  border: none;
  text-align: center;
  background: transparent;
}

.timeline .timeline-box::after,
.timeline .timeline-box::before {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline .row.timeline-left .timeline-box::after,
.timeline .row.timeline-left .timeline-box::before {
  left: 100%;
}

.timeline .row.timeline-right .timeline-box::after,
.timeline .row.timeline-right .timeline-box::before {
  right: 100%;
}

.timeline .timeline-launch .timeline-box::after,
.timeline .timeline-launch .timeline-box::before {
  left: 50%;
  margin-left: -10px;
}

.timeline .timeline-box::after {
  top: 26px;
  border-color: transparent transparent transparent #ffffff;
  border-width: 10px;
}

.timeline .timeline-box::before {
  top: 25px;
  border-color: transparent transparent transparent #dddddd;
  border-width: 0px;
}

.timeline .row.timeline-right .timeline-box::after {
  border-color: transparent #ffffff transparent transparent;
}

.timeline .row.timeline-right .timeline-box::before {
  border-color: transparent #dddddd transparent transparent;
}

.timeline .timeline-launch .timeline-box::after {
  top: -20px;
  border-color: transparent transparent #dddddd transparent;
}

.timeline .timeline-launch .timeline-box::before {
  top: -19px;
  border-color: transparent transparent #ffffff transparent;
  border-width: 10px;
  z-index: 1;
}

.timeline .timeline-box .timeline-icon {
  position: relative;
  width: 40px;
  height: auto;
  float: left;
}

.timeline .timeline-icon i {
  font-size: 25px;
  color: #0f6d73;
}

.timeline .timeline-box .timeline-text {
  position: relative;
  width: calc(100% - 40px);
  float: left;
}

.timeline .timeline-launch .timeline-text {
  width: 100%;
}

.timeline .timeline-text h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 3px;
}

.timeline .timeline-text p {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .timeline .timeline-continue::after {
    left: 40px;
  }

  .timeline .timeline-end,
  .timeline .timeline-start,
  .timeline .timeline-year,
  .timeline .row.timeline-left,
  .timeline .row.timeline-right .timeline-date,
  .timeline .row.timeline-right,
  .timeline .row.timeline-left .timeline-date,
  .timeline .timeline-launch {
    text-align: left;
  }

  .timeline .row.timeline-left .timeline-date::after,
  .timeline .row.timeline-right .timeline-date::after {
    left: 47px;
  }

  .timeline .timeline-box,
  .timeline .row.timeline-right .timeline-date,
  .timeline .row.timeline-left .timeline-date {
    margin-left: 55px;
  }

  .timeline .timeline-launch .timeline-box {
    margin-left: 0;
  }

  .timeline .row.timeline-left .timeline-box::after {
    left: -19px;
    border-color: transparent #ffffff transparent transparent;
  }

  .timeline .row.timeline-left .timeline-box::before {
    left: -22px;
    border-color: transparent #dddddd transparent transparent;
  }

  .timeline .timeline-launch .timeline-box::after,
  .timeline .timeline-launch .timeline-box::before {
    left: 30px;
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .timeline .timeline-end,
  .timeline .timeline-year,
  .timeline .timeline-start p {
    margin-left: 8px !important;
  }
}
</style>
