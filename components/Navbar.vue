<template>
<div class="flex flex-col">
  <div class="flex flex-row justify-between w-full">
    <div class="px-8 py-4">
      <div class="title">SHARON CHAN</div>
    </div>

    <!-- secondary nav -->
    <div class="hidden md:flex items-center space-x-1">
      <NuxtLink class="subtitle py-5 px-8" to="/projects">PROJECTS</NuxtLink>
      <NuxtLink class="subtitle py-5 px-8" to="/about">ABOUT</NuxtLink>
      <NuxtLink class="subtitle py-5 px-8" to="/resume">RESUME</NuxtLink>
    </div>

    <!-- mobile button goes here -->
    <div class="md:hidden flex items-center px-8">
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
  
    <!-- mobile menu -->
    <div class="mobile-menu hidden md:hidden">
      <NuxtLink class="subtitle py-5 px-8" to="/projects">PROJECTS</NuxtLink>
      <NuxtLink class="subtitle py-5 px-8" to="/about">ABOUT</NuxtLink>
      <NuxtLink class="subtitle py-5 px-8" to="/resume">RESUME</NuxtLink>
    </div>
    </div>
</template>

<style scoped>
.title {
  font-family: "Quicksand";
  font-style: normal;
  display: block;
  /* font-weight: 600; */
  font-size: 20px;
  color: #463f3a;
  letter-spacing: 3px;
}

.subtitle {
  font-family: "Quicksand";
  font-style: normal;
  display: block;
  /* font-weight: 600; */
  font-size: 15px;
  color: #463f3a;
  letter-spacing: 3px;
}

.nuxt-active-link {
  font-family: "Quicksand";
  font-style: normal;
  display: block;
  /* font-weight: 600; */
  font-size: 15px;
  color: #E0AFA0;
  letter-spacing: 3px;
}

.mobile-menu-button:focus {
  outline: none
}
</style>
