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
          this.$refs.form, // Make sure the ref name matches your actual ref
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
  <section class="contact-me" id="contact">
    <div class="row">
      <div class="col-md-12">
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
          </div>
          <button
            class="btn btn-primary rounded-pill"
            type="submit"
            value="Send"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
button {
  width: 100px;
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
  box-shadow: 0 0 0 0.08rem rgba(12, 108, 134, 0.8);
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
  box-shadow: 0 0 0 0.08rem rgba(12, 108, 134, 0.8);
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

.btn {
  border-radius: 1.2rem;
  padding: 0.4rem 2rem;
}

.btn-primary {
  color: #fff;
  background-color: #0f6d73 !important;
  border-color: #0f6d73 !important;
  transition: 0.7s;
}

.btn-primary:hover {
  color: #fff;
  background-color: #fff !important;
  border-color: #0f6d73 !important;
  color: #0f6d73;
  transition: 0.7s;
}

.btn-check:focus + .btn-primary,
.btn-primary:focus {
  color: #fff;
  background-color: #0f6d73 !important;
  border-color: #0f6d73 !important;
  box-shadow: 0 0 0 0.08rem rgba(12, 108, 134, 0.8);
}

.btn-check:active + .btn-primary,
.btn-check:checked + .btn-primary,
.btn-primary.active,
.btn-primary:active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #011b22 !important;
  border-color: #011b22 !important;
}

.btn-check:active + .btn-primary:focus,
.btn-check:checked + .btn-primary:focus,
.btn-primary.active:focus,
.btn-primary:active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(1, 27, 34, 0.8) !important;
}

.btn-primary.disabled,
.btn-primary:disabled {
  color: #fff;
  background-color: #011b22 !important;
  border-color: #011b22 !important;
  cursor: pointer;
}
</style>
