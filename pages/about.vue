<template>
  <div class="container">
    <div class="flex flex-row justify-between mt-14">
      <div class="sm:w-3/4 md:w-2/3 px-10">
        <p class="description-title">One liner about me</p>
        <br />
        <p class="description-text">
          Imaginative . Learner . Mediator
          <br />
          <br />
          Hi! I’m Sharon and I am a junior UX Designer based in Toronto, Canada.
          <br />
          <br />
          I am passionate about figuring out people problems and incorporating
          Human centered design into the work I do. I like having conversations
          with users and understanding problems from a variety of viewpoints.
          <br />
          <br />
          In 2020, I graduated from Rotman Commerce at University of Toronto,
          where I received my Bcom specializing in Finance & Economics.
        </p>
      </div>
      <div class="sm:w-1/4 md:w-1/3">
        <img
          class="object-cover h-48 w-full h-full"
          src="https://placekitten.com/400/500"
        />
      </div>
    </div>
    <div class="flex flex-row justify-between mt-14">
      <div class="sm:w-3/4 md:w-2/3 px-10">
        <p class="description-title">Line 1</p>
        <br />
        <p class="description-text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div class="sm:w-1/4 md:w-1/3 text-left">
        <p class="description-title">Contact</p>
        <br />
        <a class="contact-text" href="mailto:sharonyc.chan@mail.utoronto.ca"
          >sharonyc.chan@mail.utoronto.ca</a
        >
        <br />
        <br />
        <p class="description-title">Interests</p>
        <br />
        <ul class="interests-list">
          <li>Dance</li>
          <li>Art</li>
          <li>Baking</li>
          <li>Gaming</li>
          <li>Garlic Bread</li>
          <li>RGB Lighting</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
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

.description-text {
  font-family: "SeoulNamsan";
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  color: #000;
}

.description-title {
  font-family: "Quicksand";
  font-size: 20px;
  text-align: left;
}

.contact-text {
  font-family: "SeoulNamsan";
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
}

.interests-list {
  text-align: left;
  list-style-type: none; /* Remove bullets */
}

.interests-list li {
  font-family: "SeoulNamsan";
  font-size: 14px;
  line-height: 25px;
}

.links {
  padding-top: 15px;
}
</style>
