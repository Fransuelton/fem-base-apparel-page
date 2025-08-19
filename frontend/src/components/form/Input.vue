<script setup>
import { ref } from "vue";

const email = ref("");
const message = ref("");
const success = ref(false);
const error = ref(false);

const handleSubmit = async () => {
  message.value = "";
  error.value = false;
  success.value = false;

  try {
    const res = await fetch("https://fem-base-apparel-page-backend.onrender.com/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value }),
    });

    const data = await res.json();
    console.log(data.message);

    if (!res.ok) {
      error.value = true;
      message.value = data.message || "Something went wrong!";
    } else {
      error.value = false;
      message.value = data.message || "Subscribed successfully!";
      email.value = "";
    }
  } catch (err) {
    message.value = "Error sending email!";
    error.value = true;
    console.error(err);
  }
};
</script>

<template>
  <form id="subscribe-form" @submit.prevent="handleSubmit">
    <div class="input-wrapper">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        class="input"
        required
        v-model="email"
        :class="{ 'error-border': error }"
      />
      <img
        src="../../assets/images/icon-error.svg"
        alt="Icon error"
        class="icon-error"
        v-show="error"
      />
      <button type="submit">
        <img src="../../assets/images/icon-arrow.svg" alt="Icon arrow" />
      </button>
    </div>
    <p v-if="message" :class="error ? 'error-message' : 'success-message'">
      {{ message }}
    </p>
  </form>
</template>

<style scoped>
form {
  margin-bottom: 9.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.input-wrapper {
  position: relative;
}
.input {
  background: none;
  outline: none;
  border: 1px solid var(--text-color);
  border-radius: 2.8rem;
  width: 31.1rem;
  height: 4.8rem;
  color: var(--span-title-color);
  line-height: var(--medium-line-height);
  font-weight: 400;
  padding-left: 2.4rem;
  padding-right: 9rem;
}

.input::placeholder {
  color: var(--text-color);
}

button {
  position: absolute;
  background: var(--gradient-background);
  outline: none;
  cursor: pointer;
  border: none;
  padding: 1.5rem 2.8rem;
  border-radius: 2.8rem;
  right: -0.8rem;
  height: 4.8rem;
  width: 6.4rem;
  transition: 0.3s ease-in-out;
}

button:hover {
  background: var(--gradient-hover-background);
}

.error-message {
  align-self: flex-start;
  padding-left: 2.4rem;
  padding-left: 2.4rem;
  margin-top: 0.8rem;
  color: var(--error-color);
  font-size: 1.3rem;
}

.success-message {
  align-self: flex-start;
  padding-left: 2.4rem;
  margin-top: 0.8rem;
  color: var(--success-color, green); /* define uma var no :root se quiser */
  font-size: 1.3rem;
}

.error-border {
  border: 2px solid var(--error-color);
}

.icon-error {
  position: absolute;
  right: 6.1rem;
  top: 1.2rem;
}

@media (min-width: 1200px) and (max-width: 1919px) {
  .input {
    width: 44.5rem;
    height: 5.6rem;
    font-size: 1.6rem;
    padding-right: 14rem;
  }

  button {
    width: 10rem;
    height: 100%;
  }

  .error-message {
    margin-top: 0.4rem;
    align-self: flex-start;
    padding-left: 2.4rem;
  }

  .success-message {
    margin-top: 0.4rem;
    align-self: flex-start;
    padding-left: 2.4rem;
  }

  .icon-error {
    top: 1.6rem;
    right: 11rem;
  }
  form {
    margin-bottom: 0;
  }
}

@media (min-width: 1920px) {
  .input {
    width: 44.5rem;
    height: 5.6rem;
    font-size: 1.6rem;
    padding-right: 14rem;
  }

  button {
    width: 10rem;
    height: 100%;
  }

  .error-message {
    margin-top: 0.4rem;
    align-self: flex-start;
    padding-left: 2.4rem;
  }

  .success-message {
    margin-top: 0.4rem;
    align-self: flex-start;
    padding-left: 2.4rem;
  }

  .icon-error {
    top: 1.6rem;
    right: 11rem;
  }

  form {
    margin-bottom: 0;
  }
}
</style>
