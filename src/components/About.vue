<template>
  <section class="about py-5" id="about">
    <h2 class="text-center text-uppercase">About</h2>
    <div class="hr-line"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-6 mt-5">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6">
              <!-- image for about -->
              <img
                src="../assets/mustak-8.jpg"
                class="rounded float-left w-100 shadow-lg"
                alt="My Picture"
              />
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 my-auto">
              <div class="tab-margin">
                <p>
                  <i class="bi bi-person-fill"></i
                  ><span>{{ name }}</span>
                </p>
                <p>
                  <!-- <img src="../assets/code.png" alt="" > -->
                  <i class="bi bi-code-slash"></i>
                  <span>{{ occupation }}</span>
                </p>
                <p>
                  <i class="bi bi-envelope-open-fill"></i
                  ><span>{{ email }}</span>
                </p>
                <p>
                  <i class="bi bi-telephone-fill"></i
                  ><span>{{ phone }}</span>
                </p>
                <p>
                  <i class="bi bi-geo-alt-fill"></i
                  ><span>{{ location }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 tab-speech mt-4">
          <!-- my speech -->
          <h2>My Speech</h2>
          <p class="mt-2 text-justify">{{ speech }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
// const imageUrl = "@assets/mustak-8.jpg";
const name = "Mustak Ahmed Kafy";
const occupation = "Frontend Developer";
const email = "ahmedmustak99@gmail.com";
const phone = "+880-1712604506";
const location = "Rajshahi, Bangladesh";
const speech =
  "Hi! I am Mustak Ahmed Kafy. I am professional Frontend Developer with 3 years of experience. Web design is my passion. I do my job passionately & dedicatedly. I try to do my project with no errors & greater efficiency. I can code all day long. I rarely feel bored and can't rest untill my code is complete. I can adapt to anything quickly and am very sincere. I belive in working hard and fullfilling my responsibilities.";
</script>

<style>
.hr-line {
  width: 3%; /* Adjust the width of the line */
  height: 2px; /* Adjust the thickness of the line */
  background-color: #3498db; /* Adjust the color of the line */
  margin: 10px auto;
}


@media (max-width: 768px) {
  .tab-margin {
    margin-top: 20px;
  }
}
</style>
<style scoped>
.bi {
  color: #0d656c;
}
.tab-margin span{
  margin-left: 3px;
}
</style>
