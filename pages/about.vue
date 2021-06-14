<template>
  <div class="container">
    <Navbar />

    <div class="flex flex-row justify-between mt-14">
      <div class="sm:w-3/4 md:w-2/3 px-10">
        <p class="description-text">
          One Liner about me
        <br/>
        <br/>
          Imaginative . Learner . Mediator
        <br/>
        <br/>
          Hi! I’m Sharon and I am a junior UX Designer based in Toronto, Canada.
          <br/>
          <br/>
          I am passionate about figuring out people problems and incorporating
          Human centered design into the work I do. I like having conversations
          with users and understanding problems from a variety of viewpoints.
          <br/>
          <br/>
          In 2020, I graduated from Rotman Commerce at University of Toronto, where
          I received my Bcom specializing in Finance & Economics.
        </p>
      </div>
      <div class="sm:w-1/4 md:w-1/3">
        <img class="object-cover h-48 w-full h-full" src="https://placekitten.com/400/500"/> 
      </div>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
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

.description-text {
  font-family: "Quicksand";
  text-align: left;
  font-size: 20px;
  color: #000;
}


.links {
  padding-top: 15px;
}
</style>
