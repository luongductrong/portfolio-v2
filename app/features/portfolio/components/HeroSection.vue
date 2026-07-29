<template>
  <section class="min-h-dvh w-full bg-background relative grid-bg">
    <LayoutContainer>
      <div class="grid-overlay-left" />
      <div class="grid-overlay-right" />
    </LayoutContainer>
  </section>
</template>

<style scoped>
.grid-bg {
  --grid-page-bg: var(--background);
  --grid-line: color-mix(in oklab, var(--foreground) 10%, transparent);
  --grid-fade-strong: color-mix(in oklab, var(--background) 90%, transparent);
  --grid-fade-soft: color-mix(in oklab, var(--background) 65%, transparent);

  position: relative;
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
  z-index: 1;
}

.grid-bg::before,
.grid-bg::after,
.grid-overlay-left,
.grid-overlay-right {
  content: "";
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
  background: linear-gradient(
    to bottom,
    var(--grid-fade-strong),
    var(--grid-fade-soft),
    transparent
  );
}

.grid-bg::after {
  bottom: 0;
  background: linear-gradient(
    to top,
    var(--grid-fade-strong),
    var(--grid-fade-soft),
    transparent
  );
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
