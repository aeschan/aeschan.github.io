<template>
  <NuxtLink
    :to="{ name: 'blog-slug', params: { slug: article.slug } }"
    class="flex flex-col blogpost shadow-md text-left align-text-bottom h-80"
    tag="img"
    :src="require(`~/static/images/${article.img}`)"
  >
    <p class="post-title">
      <span>
        {{ article.title }}
      </span>
    </p>
    <br />
    <p class="post-date">
      <span>
        {{ article.createdAt }}
      </span>
    </p>
  </NuxtLink>
</template>

<script>
export default {
  props: ["article"],
};
</script>