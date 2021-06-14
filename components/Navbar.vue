<template>
  <nav class="bg-white-10">
    <div class="mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex px-8 py-4">
          <NuxtLink class="title" to="/">SHARON CHAN</NuxtLink>
        </div>

        <!-- secondary nav -->
        <div class="hidden md:flex items-center space-x-1">
          <NuxtLink class="subtitle py-5 px-8" to="/projects">PROJECTS</NuxtLink>
          <NuxtLink class="subtitle py-5 px-8" to="/about">ABOUT</NuxtLink>
          <NuxtLink class="subtitle py-5 px-8" to="/resume">RESUME</NuxtLink>
        </div>

        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center">
          <button class="mobile-menu-button">
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- mobile menu -->
    <div class="mobile-menu hidden md:hidden">
      <a href="" class="subtitle py-5 px-8">PROJECTS</a>
      <a href="" class="subtitle py-5 px-8">ABOUT</a>
      <a href="" class="subtitle py-5 px-8">RESUME</a>
    </div>
  </nav>
</template>

<style>
@font-face {
  font-family: "SeoulNamsan M";
  src: url("~assets/fonts/SeoulNamsanM_c.ttf") format("truetype");
}

.title {
  font-family: "SeoulNamsan M";
  font-style: normal;
  display: block;
  /* font-weight: 600; */
  font-size: 20px;
  color: #463f3a;
  letter-spacing: 3px;
}

.subtitle {
  font-family: "SeoulNamsan M";
  font-style: normal;
  display: block;
  /* font-weight: 600; */
  font-size: 15px;
  color: #463f3a;
  letter-spacing: 3px;
}

.mobile-menu-button:focus {
  outline: none
}
</style>
