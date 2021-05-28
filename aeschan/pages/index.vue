<template>
  <div class="container">
    <!-- navbar goes here -->
    <nav class="bg-white-10">
      <div class="mx-auto px-4">
        <div class="flex justify-between">

          <div class="flex  px-8 py-4">
            <h3 class="title">
              SHARON CHAN
            </h3>
          </div>

          <!-- secondary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <a href="" class="subtitle py-5 px-8">PROJECTS</a>
            <a href="" class="subtitle py-5 px-8">ABOUT</a>
            <a href="" class="subtitle py-5 px-8">RESUME</a>
          </div>

          <!-- mobile button goes here -->
          <div class="md:hidden flex items-center">
            <button class="mobile-menu-button">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- mobile menu -->
      <div class="mobile-menu hidden md:hidden">
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
      </div>
    </nav>

    <div class="bg-pink-500 shadow-md rounded-lg mx-auto text-center py-12 mt-4">
        <h2 class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
            Don't delay, buy today!
        </h2>
        <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md bg-white shadow">
                <a href="#" class="text-gray-700 font-bold py-2 px-6">
                    Start
                </a>
            </div>
        </div>
    </div>

    <div>
      <div class="links flex justify-center mx-0">
       <a href="https://www.linkedin.com/in/sharonycchan" target="_blank" class="px-6 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none">
          <img src="~/assets/icons/linkedin.svg">
        </a>
        <a href="https://www.instagram.com/s.ychn/" target="_blank" class="px-6 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none">
          <img src="~/assets/icons/ig.svg">
        </a>
        <a href="mailto:sharon.chan19@gmail.com" target="_blank" class="px-6 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none">
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
  /* display: flex;
  flex-direction: column; */
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
  /* font-weight: 600; */
  font-size: 20px;
  color: #463F3A;
  letter-spacing: 3px;
}

.subtitle {
  font-family: 'SeoulNamsan M';
  font-style: normal;
  display: block;
  /* font-weight: 600; */
  font-size: 15px;
  color: #463F3A;
  letter-spacing: 3px;
}

.links {
  padding-top: 15px;
}
</style>
