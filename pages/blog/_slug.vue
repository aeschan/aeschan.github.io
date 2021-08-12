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
      <div class="flex flex-col max-w-7xl">
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
          <div
            class="
              flex flex-col
              md:flex-row
              justify-center
              items-center
              text-center
              md:text-left
              mx-10
            "
          >
            <img
              class="w-full md:w-3/4 max-h-80 mx-8 object-cover"
              :src="require(`~/static/images/${article.jumboimg}`)"
              :alt="article.alt"
            />
            <div class="w-full md:w-1/4 mx-8">
              <p class="details-heading">My Role</p>
              <p>Ux Designer</p>
              <p>Ux Researcher</p>
              <br />
              <p class="details-heading">Timeframe</p>
              <p>2 months</p>
              <br />
              <p class="details-heading">Teammates</p>
              <ul>
                <li>Isabelle O’Hara</li>
                <li>Luda Ludo Masalila</li>
                <li>Shao Xu</li>
                <li>Sharon Chan</li>
                <li>Tamas Deak</li>
              </ul>
              <br />
              <p class="details-heading">Platform</p>
              <p>Digital Loyalty Program</p>
              <br />
              <p class="details-heading">Organizer</p>
              <p>RSM459 Final Project</p>
            </div>
          </div>
          <br />
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
                >
                  <NuxtLink :to="`#${link.id}`">{{idx+1}} {{ link.text }}</NuxtLink>
                </li>
              </ul>
            </nav>
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