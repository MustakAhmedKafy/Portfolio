<template>
  <section class="about py-5"  id="about">
    <h2 class="text-center text-uppercase">About</h2>
     <div class="hr-line"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 tab mt-5" id="about_1">
          <div class="row">
            <div class="col-md-6">
              <!-- image for about -->
              <!-- <img src="../assets/mustak-8.jpg" class="rounded float-left w-100 shadow-lg" alt="My Picture"> -->
            </div>
            <div class="col-md-6 my-auto">
              <div class="tab-margin">
                <p><i class="fas fa-user"></i><span class="ml-2">{{ name }}</span></p>
                <p><i class="fas fa-code"></i><span class="ml-2">{{ occupation }}</span></p>
                <p><i class="fas fa-envelope"></i><span class="ml-2">{{ email }}</span></p>
                <p><i class="fas fa-phone"></i><span class="ml-2">{{ phone }}</span></p>
                <p><i class="fas fa-map-marker-alt"></i><span class="ml-2">{{ location }}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 tab-speech mt-4" id="about_3">
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
const speech = "Hi! I am Mustak Ahmed Kafy. I am professional Frontend Developer with 3 years of experience. Web design is my passion. I do my job passionately & dedicatedly. I try to do my project with no errors & greater efficiency. I can code all day long. I rarely feel bored and can't rest untill my code is complete. I can adapt to anything quickly and am very sincere. I belive in working hard and fullfilling my responsibilities.";
</script>


<style>
.hr-line {
    width: 3%; /* Adjust the width of the line */
    height: 2px; /* Adjust the thickness of the line */
    background-color: #3498db; /* Adjust the color of the line */
    margin: 10px auto; 
}
</style>