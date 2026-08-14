<script setup lang="ts">
import { Motion } from 'motion-v';
import { milestones } from '../constants';
</script>

<template>
  <section class="relative py-10 sm:py-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
    <Motion
      as="div"
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.7 }"
      class="flex flex-col justify-start gap-5"
    >
      <UiBadge variant="outline" class="w-fit border-primary/30 bg-primary/5 text-primary"> Career Timeline </UiBadge>
      <div class="space-y-4">
        <h2 class="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Milestones that shaped the way I build.
        </h2>
        <p class="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
          A focused timeline of my academic foundation, enterprise internship experience, and ongoing front-end
          development work.
        </p>
      </div>
    </Motion>

    <div class="relative">
      <div class="absolute left-4 top-6 h-[calc(100%-3rem)] w-px bg-primary sm:left-6" />

      <ol class="space-y-6">
        <Motion
          v-for="(milestone, index) in milestones"
          :key="milestone.title"
          as="li"
          :initial="{ opacity: 0, x: 28 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.55, delay: index * 0.12 }"
          class="relative pl-12 sm:pl-16"
        >
          <div
            class="absolute left-0 top-5 z-10 flex size-8 items-center justify-center border border-primary/40 bg-background shadow-brutalism sm:size-12"
          >
            <component :is="milestone.icon" class="size-4 text-primary sm:size-5" />
          </div>

          <article
            class="group relative overflow-hidden border bg-card/70 p-5 transition duration-300 shadow-brutalism hover:translate-1 hover:border-primary/45 sm:p-6"
          >
            <div class="absolute inset-0 bg-linear-to-br opacity-80 from-primary/25 via-primary/10 to-transparent" />
            <div class="relative space-y-5">
              <div class="space-y-2">
                <div class="flex items-start justify-between gap-3">
                  <h3 class="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                    {{ milestone.title }}
                  </h3>
                  <UiBadge variant="outline" class="border-border/80 bg-background/60 text-xs mt-1">
                    {{ milestone.period }}
                  </UiBadge>
                </div>
                <p class="mt-1 font-medium text-primary">{{ milestone.organization }}</p>
              </div>

              <p class="text-sm leading-7 text-muted-foreground">
                {{ milestone.description }}
              </p>

              <div class="flex flex-wrap gap-2">
                <UiBadge
                  v-for="item in milestone.highlights"
                  :key="item"
                  variant="secondary"
                  class="border border-border/70 bg-background/60 text-xs font-medium text-muted-foreground"
                >
                  {{ item }}
                </UiBadge>
              </div>

              <p class="text-xs text-muted-foreground">
                {{ milestone.location }}
              </p>
            </div>
          </article>
        </Motion>
      </ol>
    </div>
  </section>
</template>
