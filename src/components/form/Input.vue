<script setup></script>

<template>
  <div class="input-wrapper">
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Email Address"
      class="input"
    />
    <img
      src="../../assets/images/icon-error.svg"
      alt="Icon error"
      class="icon-error"
    />
    <button type="submit">
      <img src="../../assets/images/icon-arrow.svg" alt="Icon arrow" />
    </button>
    <p class="error-message">Please provide a valid email</p>
  </div>
</template>

<style scoped>
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
}

.error-message {
  padding-left: 2.4rem;
  margin-top: 0.8rem;
  color: var(--error-color);
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

/* Desktops */

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
    position: absolute;
  }

  .icon-error {
    top: 1.6rem;
    right: 11rem;
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
    position: absolute;
  }

  .icon-error {
    top: 1.6rem;
    right: 11rem;
  }
}
</style>
