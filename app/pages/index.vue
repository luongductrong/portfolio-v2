<script setup lang="ts">
useHead({
  title: "Duc Trong Luong",
  meta: [{ name: "description", content: "Duc Trong Luong's portfolio." }],
});
</script>

<template>
  <main>
    <PortfolioFrame id="about" title="About">
      <PortfolioAbout />
    </PortfolioFrame>

    <PortfolioFrame id="skills" title="Skills">
      <PortfolioSkills />
    </PortfolioFrame>

    <PortfolioFrame id="projects" title="Projects">
      <PortfolioProjects />
    </PortfolioFrame>

    <PortfolioFrame id="blog" title="Blog">
      <PortfolioBlogs />
    </PortfolioFrame>

    <PortfolioFrame id="social" title="Social">
      <PortfolioSocials />
    </PortfolioFrame>

    <PortfolioFrame id="get-in-touch" title="Get in Touch">
      <PortfolioGetInTouch />
    </PortfolioFrame>
  </main>
</template>
