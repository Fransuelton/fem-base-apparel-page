<script setup>
import { Header, Input } from "./components/index.js";
</script>

<template>
  <div>
  <Header />
  <section>
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
        <Input placeholder="Email Address" />
    </div>
  </section>
  </div>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
}
picture img {
  width: 100%;
}

.info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 6.4rem 3.2rem 3.2rem 3.2rem;
  text-align: center;
}

.info-wrapper .title {
  font-weight: 300;
  font-size: var(--large-font-size);
  line-height: var(--large-line-height);
  letter-spacing: 1rem;
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
  font-weight: 400;
}

/* Desktops */

@media (min-width: 1200px) and (max-width: 1919px) {
  section {
    flex-direction: row-reverse;
  }

  picture img {
    height: 100%;
  }

  .info-wrapper {
    gap: 3.2rem;
    text-align: left;
    width: 44.5rem;
    margin: 27.2rem 16.2rem 16.5rem;
  }

  .info-wrapper .title {
    font-size: 6.4rem;
    line-height: 6.4rem;
    letter-spacing: 1.7rem;
  }

  .info-wrapper .description {
    font-size: 1.6rem;
    line-height: 2.8rem;
  }
}

@media (min-width: 1920px) {
  section {
    flex-direction: row-reverse;
  }

  picture img {
    height: 100%;
  }

  .info-wrapper {
    gap: 3.2rem;
    text-align: left;
    width: 44.5rem;
    margin: 27.2rem 16.2rem 16.5rem;
  }

  .info-wrapper .title {
    font-size: 6.4rem;
    line-height: 6.4rem;
    letter-spacing: 1.7rem;
  }

  .info-wrapper .description {
    font-size: 1.6rem;
    line-height: 2.8rem;
  }
}
</style>
