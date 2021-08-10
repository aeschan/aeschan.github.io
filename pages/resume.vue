<template>
  <div class="container flex flex-col">
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  /* display: flex;
  flex-direction: column; */
  justify-content: center;
  align-items: center;
  text-align: center;
}


.links {
  padding-top: 15px;
}
</style>
