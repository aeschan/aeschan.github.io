<template>
  <article>
    <div class="flex-1 flex-col text-center">
    <h1>{{ article.title }}</h1>
    <br />
    <div class="flex flex-row justify-center">
      <img
        class="max-h-80"
        :src="require(`~/static/images/${article.jumboimg}`)"
        :alt="article.alt"
      />
    </div>
    <br />
    <h1>Overview</h1>
    <br />
    </div>
    <div class="flex flex-row justify-center">
      <nuxt-content class="text-left justify-center" :document="article" />
    </div>
  </article>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style>
h1 {
  font-family: "Quicksand", sans-serif;
  color: #000;
  font-size: x-large;
}

.heading {
  font-family: "Quicksand", sans-serif;
  color: #000;
  font-size: x-large;
}

.details-heading {
  font-family: "Quicksand", sans-serif;
  line-height: 2rem;
  color: #000;
  font-size: medium;
}

.container {
  justify-content: center;
  font-family: "SeoulNamsan", sans-serif;
}

.quote {
  font-family: "SeoulNamsan", sans-serif;
  color: #000;
  font-size: x-large;
}
</style>