<script setup lang="ts">
const navItems: { id: string; label: string; href: string }[] = [
  { id: 'about', label: 'About', href: '/' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'skills', label: 'Skills', href: '/skills' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
  >
    <LayoutContainer
      class="flex justify-between items-center gap-8 py-2 h-15 animate-in fade-in slide-in-from-bottom-15 duration-1000 motion-reduce:slide-in-from-bottom-0 motion-reduce:duration-500"
    >
      <div>
        <IconSignature class="w-22 absolute inset-y-0 z-41" aria-label="Logo" />
      </div>
      <nav>
        <ul class="flex items-center justify-between gap-8">
          <li v-for="item in navItems" :key="item.id" class="group font-medium text-muted-foreground">
            <NuxtLink
              :to="item.href"
              class="text-sm transition-colors duration-300 group-hover:text-foreground group-hover:font-bold p-1.5 pb-px rounded"
              active-class="font-bold border-b-3 border-muted-foreground group-hover:border-foreground"
              >{{ item.label }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <div class="flex items-center justify-between gap-2 sm:gap-3">
        <PortfolioTerminalModal />
        <LayoutLanguageDropdown />
        <LayoutThemeDropdown />
      </div>
    </LayoutContainer>
  </header>
</template>
