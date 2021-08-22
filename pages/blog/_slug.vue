<template>
  <div
    class="
      flex flex-row
      justify-center
      content-center
      items-center
      align-middle
    "
  >
    <article>
      <div class="flex flex-col max-w-7xl px-10">
        <div
          class="
            flex-1 flex-col
            text-center
            justify-center
            align-middle
            items-center
          "
        >
          <h1>{{ article.title }}</h1>
          <br />
          <img
            class="rounded-3xl w-full max-h-full object-cover"
            :src="require(`~/static/images/${article.slug}/${article.jumboimg}`)"
            :alt="article.alt"
          />
          <br />
          <div
            class="
              flex flex-col
              md:flex-row
              justify-center
              items-center
              text-center
              mx-10
            "
          >
            <div class="w-full md:w-1/2 mx-8">
              <h1>Details</h1>
              <div v-if="article.roles">
                <br />
                <p class="details-heading">My Role</p>
                <p v-for="role of article.roles" :key="role">{{ role }}</p>
              </div>
              <div v-if="article.timeframe">
                <br />
                <p class="details-heading">Timeframe</p>
                <p>{{ article.timeframe }}</p>
              </div>
              <div v-if="article.teammates">
                <br />
                <p class="details-heading">Teammates</p>
                <ul>
                  <li v-for="teammate of article.teammates" :key="teammate">{{ teammate }}</li>
                </ul>
              </div>
              <div v-if="article.platform">
              <br />
              <p class="details-heading">Platform</p>
              <p>{{ article.platform }}</p>
              </div>
              <div v-if="article.organizer">
              <br />
              <p class="details-heading">Organizer</p>
              <p>{{ article.organizer }}</p>
              </div>
              <br />
            </div>
            <div class="w-full md:w-1/2 mx-8">
              <h1>Table of Contents</h1>
              <br />
              <div class="flex flex-row justify-center">
                <nav class="text-left">
                  <ul>
                    <li
                      v-for="(link, idx) of article.toc"
                      :key="link.id"
                      :class="{
                        'py-2': link.depth === 2,
                        'ml-6 pb-2': link.depth === 3,
                      }"
                      style="text-decoration: underline dotted;"
                    >
                      <NuxtLink :to="`#${link.id}`"
                        >{{ idx + 1 }} {{ link.text }}</NuxtLink
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <br />
        </div>
        <nuxt-content
          class="text-left justify-center mx-10"
          :document="article"
        />
      </div>
    </article>
  </div>
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
  font-size: xx-large;
}
h2 {
  font-family: "Quicksand", sans-serif;
  color: #000;
  font-size: xx-large;
  text-align: center;
}
h3 {
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
  font-family: "SeoulNamsan", sans-serif;
}

.quote {
  font-family: "SeoulNamsan", sans-serif;
  color: #000;
  font-size: x-large;
}
</style>