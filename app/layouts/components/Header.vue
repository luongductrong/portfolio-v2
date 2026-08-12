<script setup lang="ts">
import { Menu, X } from '@lucide/vue';

const navItems: { id: string; label: string; href: string }[] = [
  { id: 'about', label: 'About', href: '/' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'skills', label: 'Skills', href: '/skills' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

const route = useRoute();
const mobileMenuOpen = ref(false);

const isActive = (href: string) => {
  if (href === '/') return route.path === href;

  return route.path === href || route.path.startsWith(`${href}/`);
};

const handleMobileNavigation = async function (href: string) {
  mobileMenuOpen.value = false;

  await nextTick();

  requestAnimationFrame(() => {
    navigateTo(href);
  });
};

watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false;
  },
);
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
  >
    <LayoutContainer
      class="flex justify-between items-center gap-8 py-2 h-15 animate-in fade-in slide-in-from-bottom-15 duration-1000 motion-reduce:slide-in-from-bottom-0 motion-reduce:duration-500"
    >
      <NuxtLink to="/">
        <IconSignature class="w-22 absolute inset-y-0 z-41" aria-label="Logo" />
      </NuxtLink>
      <nav class="hidden md:block" aria-label="Primary navigation">
        <ul class="flex items-center justify-between gap-8">
          <li v-for="item in navItems" :key="item.id" class="group font-medium text-muted-foreground">
            <NuxtLink
              :to="item.href"
              class="text-sm transition-colors duration-300 group-hover:text-foreground group-hover:font-bold p-1.5 pb-px rounded"
              :class="
                isActive(item.href) ? 'font-bold border-b-3 border-muted-foreground group-hover:border-foreground' : ''
              "
              :aria-current="isActive(item.href) ? 'page' : undefined"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center justify-between gap-2 sm:gap-3">
        <div class="hidden md:block">
          <PortfolioTerminalModal />
        </div>
        <LayoutLanguageDropdown />
        <LayoutThemeDropdown />

        <UiDrawer v-model:open="mobileMenuOpen" swipe-direction="up">
          <UiDrawerTrigger as-child>
            <UiButton
              variant="ghost"
              size="icon-sm"
              class="rounded-full transition-[background-color,border-color,box-shadow,transform] md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu aria-hidden="true" />
            </UiButton>
          </UiDrawerTrigger>

          <UiDrawerContent class="md:hidden">
            <UiDrawerHeader class="sr-only">
              <UiDrawerTitle>Navigation</UiDrawerTitle>
              <UiDrawerDescription>Explore my work, skills, and ways to get in touch.</UiDrawerDescription>
            </UiDrawerHeader>

            <div class="relative flex h-15 items-center justify-between border-b px-4">
              <IconSignature class="w-22 absolute inset-y-0" aria-label="Logo" />
              <UiDrawerClose as-child>
                <UiButton
                  variant="ghost"
                  size="icon-sm"
                  class="absolute right-4 rounded-full transition-[background-color,border-color,box-shadow,transform]"
                  aria-label="Close navigation menu"
                >
                  <X aria-hidden="true" />
                </UiButton>
              </UiDrawerClose>
            </div>

            <nav class="mx-auto w-full max-w-lg p-4" aria-label="Mobile navigation">
              <ul class="flex flex-col">
                <li v-for="item in navItems" :key="item.id" class="border-b last:border-b-0">
                  <button
                    type="button"
                    class="block w-full rounded-md px-2 py-3 text-left text-base font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
                    :class="isActive(item.href) ? 'text-primary' : 'text-foreground'"
                    :aria-current="isActive(item.href) ? 'page' : undefined"
                    @click="handleMobileNavigation(item.href)"
                  >
                    {{ item.label }}
                  </button>
                </li>
              </ul>
            </nav>
          </UiDrawerContent>
        </UiDrawer>
      </div>
    </LayoutContainer>
  </header>
</template>
