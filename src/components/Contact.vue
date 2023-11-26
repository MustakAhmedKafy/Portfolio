<script>
import emailjs from "@emailjs/browser";


export default {
  methods: {
    sendEmail() {
      // Assuming you have a form with a ref named "form" in your template
      console.log(this.$refs.form);
      
      emailjs
        .sendForm(
          "service_315rfeo",
          "template_hh12u02",
          this.$refs.form,  // Make sure the ref name matches your actual ref
          "4m1F6EabZqZnRTssE"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
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
          <form ref="form" @submit.prevent="sendEmail">
            <div class="row">
              <div class="col-md-6 pb-3">
                <div class="form-group input-field">
                  <input
                    type="text"
                    name="user_name"
                    class="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>
              <div class="col-md-6 pb-3">
                <div class="form-group input-field">
                  <input
                    type="email"
                    name="user_email"
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
                      name="message"
                      class="form-control"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <!-- <input type="submit" value="Send" /> -->

              <button class="btn btn-primary" type="submit" value="Send">
                Send
              </button>
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
  border-color: #0f6d73;
  box-shadow: 0 0 0 0.15rem rgba(12, 108, 134, 0.8);
}

.message .form-control {
  padding: 0.5rem 0.1rem;
  background-color: #e6e6e6;
  border: 0px;
  border-radius: 5px !important;
  padding-left: 1.5rem;
}

.message .form-control:focus {
  border-color: #0f6d73;
  box-shadow: 0 0 0 0.15rem rgba(12, 108, 134, 0.8);
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
