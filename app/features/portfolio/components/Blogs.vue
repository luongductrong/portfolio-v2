<script setup lang="ts">
const blogPosts = ref([
  {
    title: "This is a example blog post",
    excerpt:
      "This is a example blog post's excerpt. This is a example blog post's excerpt. This is a example blog post's excerpt. This is a example blog post's excerpt.",
    link: "#",
  },
  {
    title: "This is a example blog post",
    excerpt:
      "This is a example blog post excerpt. This is a example blog post's excerpt.",
    link: "#",
  },
]);
</script>

<template>
  <div class="space-y-4">
    <article
      v-for="post in blogPosts"
      :key="post.title"
      class="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 hover:shadow-lg transition duration-300"
    >
      <h3 class="text-xl font-semibold text-blue-400 mb-2">{{ post.title }}</h3>
      <p class="mb-2">{{ post.excerpt }}</p>
      <NuxtLink :to="post.link" class="text-green-400 hover:underline"
        >Read more</NuxtLink
      >
    </article>
  </div>
</template>
