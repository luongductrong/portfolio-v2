<script setup lang="ts">
import { FileUser, ArrowRight } from '@lucide/vue';

const publicAsset = usePublicAsset();
const resumeURL = publicAsset('CV_LuongDucTrong_FrontendDeveloper.pdf?v=1');
// TODO: Request change URL when the resume is updated
</script>

<template>
  <section
    class="min-h-[calc(100dvh-8.75rem)] w-full py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20 flex items-center justify-center bg-background relative isolate"
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
      class="relative z-10 lg:col-span-8 flex flex-col items-center justify-center gap-3 text-lg"
    >
      <p class="font-bold">Hi, I'm Duc Trong Luong 👋</p>
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tighter text-center"
      >
        Crafting
        <span class="text-primary"> web & mobile experiences </span>
        that feel effortless.
      </h1>
      <UiTextGenerateEffect
        words="Frontend Developer specializing in modern web and cross-platform mobile applications."
        :filter="true"
        :duration="0.5"
        :delay="0"
        :once="true"
        class="font-medium italic text-center"
      />
      <div class="mt-4 flex gap-3">
        <UiButton size="lg" class="uppercase shadow-brutalism hover:translate-1 hover:shadow-none" as-child>
          <NuxtLink to="/projects">View my work <ArrowRight /></NuxtLink>
        </UiButton>
        <UiShineButton
          as-child
          class="bg-background/40 uppercase shadow-brutalism hover:translate-1 hover:shadow-none"
          variant="outline"
          size="lg"
        >
          <NuxtLink :to="resumeURL" external target="_blank" rel="noopener noreferrer">
            <FileUser />My Resume
          </NuxtLink>
        </UiShineButton>
      </div>
    </UiBlurReveal>
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
  top: 50%;
  left: 50%;
  width: 100dvw;
  height: calc(100dvh - 3.75rem);
  transform: translate(-50%, -50%);
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
