<script setup>
// import Social from "./Social.vue";
</script>

<template>
  <div>
    <h3 class="mt-1">Join my social networks</h3>
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
          href="https://www.linkedin.com/in/k-a-f-y/"
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
</template>

<style scoped>
ul.social-network {
  list-style: none;
  display: inline;
  margin-left: 0 !important;
  padding: 0;
}

ul.social-network li {
  display: inline;
  margin: 0 5px;
}

/* social icons */
.social-network a.icoInstagram:hover {
  background: linear-gradient(#400080, transparent),
    linear-gradient(200deg, #d047d1, #ff0000, #ffff00);
}

.social-network a.icoFacebook:hover {
  background-color: #3b5998;
}

.social-network a.icoTwitter:hover {
  background-color: #33ccff;
}

.social-network a.icoYoutube:hover {
  background-color: #ff0000;
}

.social-network a.icoGitHub:hover {
  background-color: #000000;
}

.social-network a.icoLinkedin:hover {
  background-color: #007bb7;
}

.social-network a.icoInstagram:hover i,
.social-network a.icoFacebook:hover i,
.social-network a.icoTwitter:hover i,
.social-network a.icoYoutube:hover i,
.social-network a.icoLinkedin:hover i,
.social-network a.icoGitHub:hover i {
  color: #fff;
}

a.socialIcon:hover,
.socialHoverClass {
  color: #44bcdd;
}

.social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  border-radius: 50%;
  text-align: center;
  width: 48px;
  height: 48px;
  font-size: 20px;
}

.social-circle li i {
  margin: 0;
  line-height: 50px;
  text-align: center;
}

.social-circle li a:hover i,
.triggeredHover {
  transform: rotate(360deg);
  transition: all 0.2s;
}

.social-circle i {
  color: #fff;
  transition: all 0.8s;
}

.social-network a {
  background-color: #714fa1;
  /* replace with your primary color value */
}
</style>
