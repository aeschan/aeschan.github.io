<template>
  <div class="container">
    <div>
      <h1 class="title">
        Sharon Chan
      </h1>
      <div class="links flex place-content-around max-w-">
       <a href="https://www.linkedin.com/in/sharonycchan" target="_blank" class="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none">
          <img src="~/assets/icons/linkedin.svg">
        </a>
        <a href="https://www.instagram.com/s.ychn/" target="_blank" class="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none">
          <img src="~/assets/icons/ig.svg">
        </a>
        <a href="mailto:sharon.chan19@gmail.com" target="_blank" class="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none">
          <img src="~/assets/icons/mail.svg">
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@font-face {
    font-family: 'SeoulNamsan M';
    src: url('~assets/fonts/SeoulNamsanM_c.ttf') format('truetype');
}

.title {
  font-family: 'SeoulNamsan M';
  font-style: normal;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
