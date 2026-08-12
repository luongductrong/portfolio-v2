<script setup lang="ts">
import { Motion } from 'motion-v';
import { FileUser, ArrowRight } from '@lucide/vue';
</script>

<template>
  <section
    class="min-h-[calc(100dvh-8.75rem)] w-full py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-24 items-center bg-background relative isolate"
  >
    <div aria-hidden="true" class="grid-bg">
      <div class="grid-overlay-left" />
      <div class="grid-overlay-right" />
    </div>
    <UiBlurReveal
      :duration="0.7"
      :delay="0.2"
      :once="true"
      blur="20px"
      :y-offset="20"
      class="relative z-10 lg:col-span-8 flex flex-col items-start justify-center gap-3 text-lg"
    >
      <p class="font-bold">Hi, I'm Duc Trong Luong 👋</p>
      <h1
        class="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tighter"
      >
        Crafting
        <span class="text-transparent bg-clip-text bg-linear-to-r from-primary via-main-300 to-main-200">
          web & mobile experiences
        </span>
        that feel effortless.
      </h1>
      <UiTextGenerateEffect
        words="Frontend Developer specializing in modern web and cross-platform mobile applications."
        :filter="true"
        :duration="0.5"
        :delay="0"
        :once="true"
        class="font-medium italic text-start"
      />
      <div class="mt-4 flex gap-3">
        <UiButton size="lg" class="rounded uppercase" as-child>
          <NuxtLink to="/projects">View my work <ArrowRight /></NuxtLink>
        </UiButton>
        <UiShineButton class="bg-background/40 rounded uppercase" variant="outline" size="lg">
          <FileUser />My Resume
        </UiShineButton>
      </div>
    </UiBlurReveal>
    <Motion
      as="div"
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :in-view-options="{ once: true }"
      :transition="{ duration: 0.7, delay: 0.2 }"
      class="z-10 lg:col-span-4 relative flex justify-center items-center"
    >
      <UiBadge class="absolute -top-10 left-1/2 -translate-x-1/2 text-sm gap-2" variant="outline">
        <span class="size-2 rounded-full bg-chart-5 animate-pulse"></span>
        <span class="text-muted-foreground">Available for new opportunities</span>
      </UiBadge>
      <div class="size-64 sm:size-80 relative flex items-center justify-center">
        <div
          class="absolute aspect-square w-full rounded-full border border-muted-foreground animate-[spin_40s_linear_infinite] border-t-transparent"
        ></div>
        <div
          class="absolute aspect-square w-3/4 rounded-full border border-muted-foreground animate-[spin_30s_linear_infinite_reverse] border-b-transparent"
        ></div>
        <div
          class="absolute aspect-square w-1/2 rounded-full border border-muted-foreground animate-[spin_20s_linear_infinite] border-t-transparent"
        ></div>
        <div class="w-1/2 h-1/2 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <IconFrontend class="text-primary animate-pulse" />
        </div>
      </div>
    </Motion>
  </section>
</template>

<style scoped>
.grid-bg {
  --grid-page-bg: var(--background);
  --grid-line: color-mix(in oklab, var(--foreground) 10%, transparent);
  --grid-fade-strong: color-mix(in oklab, var(--background) 90%, transparent);
  --grid-fade-soft: color-mix(in oklab, var(--background) 65%, transparent);

  position: absolute;
  inset-block: 0;
  left: 50%;
  width: 100dvw;
  transform: translateX(-50%);
  background-color: var(--grid-page-bg);
  background-image:
    linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px),
    radial-gradient(
      circle at 50% 50%,
      color-mix(in oklab, var(--ring) 22%, transparent) 0%,
      color-mix(in oklab, var(--ring) 8%, transparent) 40%,
      transparent 80%
    );
  background-size:
    60px 60px,
    60px 60px,
    100% 100%;
  z-index: 0;
  pointer-events: none;
}

.grid-bg::before,
.grid-bg::after,
.grid-overlay-left,
.grid-overlay-right {
  content: '';
  position: absolute;
  z-index: -1;
  pointer-events: none;
}

.grid-bg::before,
.grid-bg::after {
  width: 100%;
  height: 30%;
  left: 0;
}

.grid-bg::before {
  top: 0;
  background: linear-gradient(to bottom, var(--grid-fade-strong), var(--grid-fade-soft), transparent);
}

.grid-bg::after {
  bottom: 0;
  background: linear-gradient(to top, var(--grid-fade-strong), var(--grid-fade-soft), transparent);
}

.grid-overlay-left,
.grid-overlay-right {
  width: 3%;
  height: 100%;
  top: 0;
}

.grid-overlay-left {
  left: 0;
  background: linear-gradient(to right, var(--grid-fade-strong), transparent);
}

.grid-overlay-right {
  right: 0;
  background: linear-gradient(to left, var(--grid-fade-strong), transparent);
}
</style>
