<script setup>
import { Header, Input } from "./components/index.js";
</script>

<template>
  <section>
    <Header />
    <picture>
      <source
        srcset="./assets/images/hero-desktop.jpg"
        media="(min-width:768px)"
      />
      <img src="./assets/images/hero-mobile.jpg" alt="Hero image" />
    </picture>
    <div class="info-wrapper">
      <h1 class="title">WE'RE <span>COMING SOON</span></h1>
      <p class="description">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
    </div>
    <form>
      <Input placeholder="Email Address" />
    </form>
  </section>
</template>

<style scoped>
picture img {
  width: 100%;
}

.info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 6.4rem 3.2rem 3.2rem 3.2rem;
}

.info-wrapper .title {
  font-weight: 300;
  font-size: var(--large-font-size);
  line-height: var(--large-line-height);
  letter-spacing: 1rem;
  text-align: center;
  color: var(--text-color);
}

.info-wrapper .title span {
  color: var(--span-title-color);
  font-weight: 600;
}

.info-wrapper .description {
  font-size: var(--small-font-size);
  line-height: var(--small-line-height);
  color: var(--text-color);
  text-align: center;
  font-weight: 400;
}

form {
  margin-bottom: 9.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
