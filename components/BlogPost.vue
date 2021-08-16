<template>
  <div class="post rounded-full min-h-full">
    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: article.slug } }"
      class="
        flex flex-col
        shadow-md
        text-left
        align-text-bottom
        rounded-3xl
      "
    >
      <div
        class="flex-auto min-h-full h-48 md:h-72 sm:h-48 rounded-t-3xl"
        :style="{
          'background-image': `url(images/${article.slug}/${article.img})`,
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position': 'top'
        }"
      ></div>
      <div class="mx-4 my-4">
        <p class="post-title">
            {{ article.title }}
        </p>
        <p class="post-subtitle">
            {{ article.subtitle }}
        </p>
        <br>
        <p class="post-description">
            {{ article.description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["article"],
};
</script>

<style scoped>

.post {
  flex: 1 0 32%;
}

.post-title {
  font-family: "Quicksand", sans-serif;
  font-size: x-large;
  color: #000;
}

.post-subtitle {
  color: #8A817C;
  font-family: "Quicksand", sans-serif;
  font-size: medium;
}

.post-description {
  color: #000;
  font-family: "SeoulNamsan", sans-serif;
  font-size: medium;
}

.post-date {
  font-family: "Quicksand", sans-serif;
  color: #000;
}

.post-date span {
  background-color: #000;
}
</style>