<script setup lang="ts">
import type { ProjectImages } from '../types';
import { ArrowLeft, ArrowRight } from '@lucide/vue';
import type { CarouselApi } from '@/components/ui/carousel';

const props = defineProps<{
  images: ProjectImages;
}>();

const IMAGE_COUNT = 4;
type ImageIndex = 0 | 1 | 2 | 3;

const carouselApi = shallowRef<CarouselApi>();
const selectedIndex = ref<ImageIndex>(0);
const previewIndex = ref<ImageIndex>(0);
const previewOpen = ref(false);

const selectedImage = computed(() => props.images[selectedIndex.value]);
const previewImage = computed(() => props.images[previewIndex.value]);

function updateSelectedIndex(api: NonNullable<CarouselApi>) {
  selectedIndex.value = api.selectedScrollSnap() as ImageIndex;
}

function setCarouselApi(api: CarouselApi) {
  if (!api) return;

  carouselApi.value = api;
  updateSelectedIndex(api);
  api.on('select', updateSelectedIndex);
}

function selectImage(index: number) {
  carouselApi.value?.scrollTo(index);
}

function openPreview(index: number) {
  previewIndex.value = index as ImageIndex;
  previewOpen.value = true;
}

function changePreview(direction: -1 | 1) {
  previewIndex.value = ((previewIndex.value + direction + IMAGE_COUNT) % IMAGE_COUNT) as ImageIndex;
  selectImage(previewIndex.value);
}

function handlePreviewKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    changePreview(-1);
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault();
    changePreview(1);
  }
}

onBeforeUnmount(() => {
  carouselApi.value?.off('select', updateSelectedIndex);
});
</script>

<template>
  <div>
    <div class="grid gap-3 lg:grid-cols-[minmax(0,1fr)_11rem]">
      <div class="min-w-0">
        <UiCarousel class="relative w-full" :opts="{ loop: true }" @init-api="setCarouselApi">
          <UiCarouselContent>
            <UiCarouselItem v-for="(image, index) in props.images" :key="image.id">
              <button
                type="button"
                class="group relative flex h-64 w-full items-center justify-center overflow-hidden text-left sm:h-96 lg:h-104"
                :aria-label="`Preview image ${index + 1}: ${image.alt}`"
                @click="openPreview(index)"
              >
                <span
                  class="aspect-video w-full max-w-[28.444rem] overflow-hidden rounded-lg sm:max-w-[42.667rem] lg:max-w-[46.222rem]"
                >
                  <img
                    :src="image.src"
                    :alt="image.alt"
                    class="size-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.015]"
                  />
                </span>
              </button>
            </UiCarouselItem>
          </UiCarouselContent>

          <UiCarouselPrevious class="left-3" />
          <UiCarouselNext class="right-3" />
        </UiCarousel>

        <p class="mt-3 text-center line-clamp-2 text-sm text-muted-foreground">
          {{ selectedImage.caption ?? selectedImage.alt }}
        </p>
      </div>

      <aside
        class="hidden h-104 min-h-0 flex-col lg:flex"
        aria-label="Project image thumbnails"
      >
        <div class="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-primary/40">
          <button
            v-for="(image, index) in props.images"
            :key="`${image.id}-desktop-thumbnail`"
            type="button"
            class="relative aspect-video w-full shrink-0 overflow-hidden rounded-md border bg-muted transition-all"
            :class="selectedIndex === index ? 'border-primary ring-2 ring-primary/20' : 'opacity-60 hover:opacity-100'"
            :aria-label="`Show image ${index + 1}: ${image.alt}`"
            :aria-current="selectedIndex === index ? 'true' : undefined"
            @click="selectImage(index)"
          >
            <img :src="image.src" alt="" class="size-full object-cover" />
            <span
              class="absolute right-1.5 bottom-1.5 rounded-sm bg-background/85 px-1.5 py-0.5 text-[0.625rem] font-semibold text-foreground tabular-nums"
              aria-hidden="true"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </button>
        </div>
      </aside>
    </div>

    <div
      class="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden"
      aria-label="Project image thumbnails"
    >
      <button
        v-for="(image, index) in props.images"
        :key="`${image.id}-mobile-thumbnail`"
        type="button"
        class="relative aspect-video w-24 shrink-0 overflow-hidden rounded-md border bg-muted transition-all sm:w-28"
        :class="selectedIndex === index ? 'border-primary ring-2 ring-primary/20' : 'opacity-60 hover:opacity-100'"
        :aria-label="`Show image ${index + 1}: ${image.alt}`"
        :aria-current="selectedIndex === index ? 'true' : undefined"
        @click="selectImage(index)"
      >
        <img :src="image.src" alt="" class="size-full object-cover" />
      </button>
    </div>

    <UiDialog v-model:open="previewOpen">
      <UiDialogContent
        class="max-w-[calc(100vw-1.5rem)] gap-3 p-3 sm:max-w-6xl"
        :show-close-button="true"
        @keydown="handlePreviewKeydown"
      >
        <UiDialogHeader class="sr-only">
          <UiDialogTitle>Project image preview</UiDialogTitle>
          <UiDialogDescription>
            Use the previous and next buttons or arrow keys to browse project images.
          </UiDialogDescription>
        </UiDialogHeader>

        <div class="flex min-h-0 flex-col gap-3">
          <div class="relative flex min-h-64 items-center justify-center overflow-hidden sm:min-h-96">
            <div class="aspect-video w-full max-w-[133.333dvh] overflow-hidden rounded-lg">
              <img :src="previewImage.src" :alt="previewImage.alt" class="size-full object-cover" />
            </div>

            <UiButton
              type="button"
              size="icon"
              variant="outline"
              class="absolute left-3 rounded-full"
              aria-label="Previous image"
              @click="changePreview(-1)"
            >
              <ArrowLeft data-icon="inline-start" />
            </UiButton>
            <UiButton
              type="button"
              size="icon"
              variant="outline"
              class="absolute right-3 rounded-full"
              aria-label="Next image"
              @click="changePreview(1)"
            >
              <ArrowRight data-icon="inline-end" />
            </UiButton>
          </div>

          <div class="flex items-start justify-between gap-4 px-1 text-sm">
            <p class="text-muted-foreground">{{ previewImage.caption ?? previewImage.alt }}</p>
            <p class="shrink-0 font-medium tabular-nums">{{ previewIndex + 1 }} / {{ IMAGE_COUNT }}</p>
          </div>
        </div>
      </UiDialogContent>
    </UiDialog>
  </div>
</template>
