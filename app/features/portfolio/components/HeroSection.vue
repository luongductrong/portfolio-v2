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
  position: relative;
  background: white;
  opacity: 1;
  background-image:
    linear-gradient(to right, rgba(71, 85, 105, 0.3) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(71, 85, 105, 0.3) 1px, transparent 1px),
    radial-gradient(
      circle at 50% 50%,
      color-mix(in oklab, var(--main-500) 22%, transparent) 0%,
      color-mix(in oklab, var(--main-500) 8%, transparent) 40%,
      transparent 80%
    );
  background-size:
    60px 60px,
    60px 60px,
    100% 100%;
  z-index: 1;
}

.grid-bg::before {
  content: "";
  height: 30%;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.65),
    transparent
  );
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  z-index: -1;
}

.grid-bg::after {
  content: "";
  height: 30%;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.65),
    transparent
  );
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 5px;
  z-index: -1;
}

.grid-overlay-left {
  content: "";
  height: 100%;
  width: 3%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.9), transparent);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  z-index: -1;
}

.grid-overlay-right {
  content: "";
  height: 100%;
  width: 3%;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.9), transparent);
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 5px;
  z-index: -1;
}
</style>
