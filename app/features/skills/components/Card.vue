<script setup lang="ts">
interface SkillCardProps {
  title: string;
  skills: string[];
  featured?: boolean;
}

const props = withDefaults(defineProps<SkillCardProps>(), {
  featured: false,
});
</script>

<template>
  <article
    class="border bg-card p-5 transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:p-6"
    :class="props.featured && 'lg:col-span-2'"
  >
    <header class="mb-5 flex items-center gap-3">
      <h3 class="text-lg font-bold">{{ props.title }}</h3>
    </header>

    <ul class="flex flex-wrap gap-2" :aria-label="`${props.title} skills`">
      <li
        v-for="skill in props.skills"
        :key="skill"
        class="border bg-background px-3 py-1.5 text-xs font-medium uppercase text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
      >
        {{ skill }}
      </li>
    </ul>
  </article>
</template>
