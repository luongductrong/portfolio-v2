<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-300 p-6 font-mono"
  >
    <div class="max-w-7xl mx-auto">
      <LayoutHeader />
      <LayoutNavigator />
      <slot />
      <LayoutFooter />
    </div>
    <LayoutBackToTop />
  </div>
</template>
