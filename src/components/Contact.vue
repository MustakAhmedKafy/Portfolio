<script setup>
import { ref } from "vue";
import Social from "./Social.vue";
import Button from "./Button.vue";
const button2 = {
  text: "Submit",
};

const userName = ref("");
const userEmail = ref("");
const userMessage = ref("");

const submitForm = () => {
  // Handle form submission logic here
  console.log(
    "Form submitted!",
    userName.value,
    userEmail.value,
    userMessage.value
  );
};
</script>
<template>
  <section class="contact-me py-5" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-12 pb-5">
          <h2 class="text-center">SAY HELLO!</h2>
        </div>
        <div class="col-md-8">
          <form @submit.prevent="submitForm">
            <div class="row">
              <div class="col-md-6 pb-3">
                <div class="form-group input-field">
                  <input
                    v-model="userName"
                    type="text"
                    class="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6 pb-3">
                <div class="form-group input-field">
                  <input
                    v-model="userEmail"
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
              <div class="col-md-12 pb-3">
                <div class="form-group">
                  <div class="message">
                    <textarea
                      v-model="userMessage"
                      class="form-control"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>

              <Button :link="button2.url" :buttonText="button2.text"></Button>
            </div>
          </form>
        </div>
        <div class="col-md-4 text-center">
          <h3 class="mt-1">Join my social networks</h3>
          <!-- Assuming you have a Social component -->
          <Social />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-me {
  background-color: #f5f5f5;
}

.input-field .form-control {
  padding-top: 18px;
  padding-bottom: 22px;
  background-color: #e6e6e6;
  border: 0px;
  border-radius: 50px !important;
  height: 2rem;
  padding-left: 1.5rem;
}

.input-field .form-control:focus {
  border-color: #011b22;
  box-shadow: 0 0 0 0.15rem rgba(1, 27, 34, 0.8);
}

.message .form-control {
  padding: 0.5rem 0.1rem;
  background-color: #e6e6e6;
  border: 0px;
  border-radius: 5px !important;
  padding-left: 1.5rem;
}

.message .form-control:focus {
  border-color: #011b22;
  box-shadow: 0 0 0 0.15rem rgba(1, 27, 34, 0.8);
}

.form-control::placeholder {
  font-family: "Alegreya Sans", sans-serif;
}

textarea {
  resize: none;
}

.contact-me h3 {
  font-size: 20px;
  color: #666;
}
</style>
