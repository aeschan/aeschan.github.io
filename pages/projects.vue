<template>
  <div class="container">
    <div class="bg-white mx-auto text-center py-12 px-4 mt-4">
      <p class="jumbotron-title">Hi! I’m Sharon.</p>
      <p class="jumbotron-text max-w-5xl">
        A finance student turned UX Designer.<br /><br />I am passionate about
        understanding how people interact with products and how their needs can
        be translated into inclusive designs.
      </p>
      <div class="mt-8 flex justify-center">
        <div class="inline-flex rounded-md bg-white shadow"></div>
      </div>
    </div>

    <div class="mt-5 flex justify-between flex-wrap">
      <BlogPost
        v-for="(article, idx) in articles"
        :key="article.slug"
        :article="article"
        class="
          post
          mx-2
          my-2
          transition
          duration-200
          ease-in-out
          transform
          hover:-translate-y-1
          hover:scale-110
          hover:via-purple-600
        "
      >
      </BlogPost>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .sortBy("createdAt", "desc")
      .fetch();
    return { articles };
  },
};
</script>


<style>
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

.jumbotron-title {
  font-family: "Quicksand";
  text-align: left;
  font-size: 50px;
  color: #000;
}

.jumbotron-text {
  font-family: "Quicksand";
  text-align: left;
  font-size: 30px;
  color: #000;
}

.post {
  flex: 1 0 32%;
  background-position: center 20%;
  background-size: cover;
  background-blend-mode: soft-light;
}

.post-title {
  font-family: "Karla", sans-serif;
  font-size: x-large;
  color: #fff;
}

.post-title span {
  background-color: #000;
}

.post-date {
  font-family: "Karla", sans-serif;
  color: #fff;
}

.post-date span {
  background-color: #000;
}

.links {
  padding-top: 15px;
}

main {
  flex: 1 1 auto;
}
</style>
