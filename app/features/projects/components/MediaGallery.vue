<script setup lang="ts">
import type { ProjectImages } from '../types';
import type { CarouselApi } from '@/components/ui/carousel';
import { ArrowLeft, ArrowRight, LoaderCircle } from '@lucide/vue';

const props = defineProps<{
  images: ProjectImages;
}>();

const { t } = useI18n();
const imageAsset = useImageAsset();

const IMAGE_COUNT = 4;
type ImageIndex = 0 | 1 | 2 | 3;

const carouselApi = shallowRef<CarouselApi>();
const selectedIndex = ref<ImageIndex>(0);
const displayedPreviewIndex = ref<ImageIndex>(0);
const displayedPreviewSrc = ref<string>();
const pendingPreviewIndex = ref<ImageIndex>();
const previewOpen = ref(false);
let previewRequestId = 0;

const selectedImage = computed(() => props.images[selectedIndex.value]);
const previewImage = computed(() => props.images[displayedPreviewIndex.value]);
const previewLoading = computed(() => pendingPreviewIndex.value !== undefined);

watch(
  () => props.images.map((image) => image.src).join('\n'),
  () => {
    previewRequestId += 1;
    pendingPreviewIndex.value = undefined;
    displayedPreviewSrc.value = undefined;

    if (previewOpen.value) void loadPreview(displayedPreviewIndex.value, false);
  },
);

watch(previewOpen, (open) => {
  if (open) return;

  previewRequestId += 1;
  pendingPreviewIndex.value = undefined;
});

function updateSelectedIndex(api: NonNullable<CarouselApi>) {
  selectedIndex.value = api.selectedScrollSnap() as ImageIndex;
}

function setCarouselApi(api: CarouselApi) {
  if (!api) return;

  carouselApi.value = api;
  updateSelectedIndex(api);
  api.on('select', updateSelectedIndex);
}

function selectImage(index: number, jump = false) {
  carouselApi.value?.scrollTo(index, jump);
}

function openPreview(index: number) {
  const nextIndex = index as ImageIndex;

  displayedPreviewIndex.value = nextIndex;
  displayedPreviewSrc.value = undefined;
  previewOpen.value = true;
  void loadPreview(nextIndex, false);
}

function changePreview(direction: -1 | 1) {
  if (previewLoading.value) return;

  const nextIndex = ((displayedPreviewIndex.value + direction + IMAGE_COUNT) % IMAGE_COUNT) as ImageIndex;
  void loadPreview(nextIndex, true);
}

function showPreview(index: ImageIndex, source: string, syncCarousel: boolean) {
  displayedPreviewIndex.value = index;
  displayedPreviewSrc.value = source;
  pendingPreviewIndex.value = undefined;

  if (syncCarousel) selectImage(index, true);
}

async function loadPreview(index: ImageIndex, syncCarousel: boolean) {
  const source = imageAsset(props.images[index].src);
  const requestId = ++previewRequestId;

  pendingPreviewIndex.value = index;

  const image = new Image();
  image.decoding = 'async';
  image.src = source;

  try {
    await image.decode();
  } catch {
    // Render the requested source so the browser can expose its native fallback when loading fails.
  }

  if (requestId !== previewRequestId || !previewOpen.value) return;

  showPreview(index, source, syncCarousel);
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
  previewRequestId += 1;
  carouselApi.value?.off('select', updateSelectedIndex);
});
</script>

<template>
  <div>
    <div class="grid gap-3 lg:grid-cols-[minmax(0,1fr)_11rem] lg:pb-14 xl:grid-cols-[minmax(0,1fr)_12.25rem]">
      <div class="relative min-w-0">
        <UiCarousel class="relative w-full" :opts="{ loop: true }" @init-api="setCarouselApi">
          <UiCarouselContent>
            <UiCarouselItem v-for="(image, index) in props.images" :key="image.id">
              <button
                type="button"
                class="group relative mx-auto block aspect-video w-full overflow-hidden border border-border text-left"
                :aria-label="t('projects.media.previewImage', { index: index + 1, description: image.alt })"
                @click="openPreview(index)"
              >
                <NuxtImg
                  :src="imageAsset(image.src)"
                  :alt="image.alt"
                  width="1919"
                  height="1079"
                  sizes="sm:100vw md:100vw lg:1024px"
                  quality="90"
                  :loading="index === 0 ? 'eager' : 'lazy'"
                  class="absolute inset-0 size-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.015]"
                />
              </button>
            </UiCarouselItem>
          </UiCarouselContent>
          <UiCarouselPrevious class="left-3" />
          <UiCarouselNext class="right-3" />
        </UiCarousel>
        <p class="mt-3 text-center line-clamp-2 text-sm text-muted-foreground lg:absolute lg:inset-x-0 lg:top-full">
          {{ selectedImage.caption ?? selectedImage.alt }}
        </p>
      </div>

      <aside class="hidden min-h-0 flex-col lg:flex" :aria-label="t('projects.media.thumbnails')">
        <div class="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-primary/40">
          <button
            v-for="(image, index) in props.images"
            :key="`${image.id}-desktop-thumbnail`"
            type="button"
            class="relative aspect-video w-full shrink-0 overflow-hidden border bg-muted transition-all"
            :class="selectedIndex === index ? 'border-primary ring-2 ring-primary/20' : 'opacity-60 hover:opacity-100'"
            :aria-label="t('projects.media.showImage', { index: index + 1, description: image.alt })"
            :aria-current="selectedIndex === index ? 'true' : undefined"
            @click="selectImage(index)"
          >
            <NuxtImg
              :src="imageAsset(image.thumbnail ?? image.src)"
              alt=""
              width="752"
              height="424"
              sizes="176px xl:196px"
              quality="75"
              loading="lazy"
              class="absolute inset-0 size-full object-cover"
            />
            <span
              class="absolute right-1.5 bottom-1.5 bg-background/85 px-1.5 py-0.5 text-[0.625rem] font-semibold text-foreground tabular-nums"
              aria-hidden="true"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </button>
        </div>
      </aside>
    </div>

    <div class="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden" :aria-label="t('projects.media.thumbnails')">
      <button
        v-for="(image, index) in props.images"
        :key="`${image.id}-mobile-thumbnail`"
        type="button"
        class="relative aspect-video w-24 shrink-0 overflow-hidden border bg-muted transition-all sm:w-28"
        :class="selectedIndex === index ? 'border-primary ring-2 ring-primary/20' : 'opacity-60 hover:opacity-100'"
        :aria-label="t('projects.media.showImage', { index: index + 1, description: image.alt })"
        :aria-current="selectedIndex === index ? 'true' : undefined"
        @click="selectImage(index)"
      >
        <NuxtImg
          :src="imageAsset(image.thumbnail ?? image.src)"
          alt=""
          width="752"
          height="424"
          sizes="96px sm:112px"
          quality="75"
          loading="lazy"
          class="absolute inset-0 size-full object-cover"
        />
      </button>
    </div>

    <UiDialog v-model:open="previewOpen">
      <UiDialogContent
        class="max-w-[calc(100vw-1.5rem)] gap-3 p-3 sm:max-w-6xl lg:max-w-7xl"
        :show-close-button="true"
        @keydown="handlePreviewKeydown"
      >
        <UiDialogHeader class="sr-only">
          <UiDialogTitle>{{ t('projects.media.dialogTitle') }}</UiDialogTitle>
          <UiDialogDescription>
            {{ t('projects.media.dialogDescription') }}
          </UiDialogDescription>
        </UiDialogHeader>

        <div class="flex min-h-0 flex-col gap-3">
          <div
            class="relative flex min-h-64 items-center justify-center overflow-hidden sm:min-h-96"
            :aria-busy="previewLoading"
          >
            <div class="relative aspect-video w-full max-h-[90dvh] max-w-[95dvw] overflow-hidden">
              <img
                v-if="displayedPreviewSrc"
                :key="displayedPreviewSrc"
                :src="displayedPreviewSrc"
                :alt="previewImage.alt"
                width="1919"
                height="1079"
                loading="eager"
                decoding="async"
                class="absolute inset-0 size-full object-cover"
              />
            </div>

            <LoaderCircle
              v-if="previewLoading"
              class="pointer-events-none absolute size-8 animate-spin text-primary"
              aria-hidden="true"
            />

            <UiButton
              type="button"
              size="icon"
              variant="default"
              class="absolute left-3 rounded-full"
              :aria-label="t('projects.media.previousImage')"
              :disabled="previewLoading"
              @click="changePreview(-1)"
            >
              <ArrowLeft data-icon="inline-start" />
            </UiButton>
            <UiButton
              type="button"
              size="icon"
              variant="default"
              class="absolute right-3 rounded-full"
              :aria-label="t('projects.media.nextImage')"
              :disabled="previewLoading"
              @click="changePreview(1)"
            >
              <ArrowRight data-icon="inline-end" />
            </UiButton>
          </div>

          <div class="flex items-start justify-between gap-4 px-1 text-sm">
            <p class="text-muted-foreground">{{ previewImage.caption ?? previewImage.alt }}</p>
            <p class="shrink-0 font-medium tabular-nums">{{ displayedPreviewIndex + 1 }} / {{ IMAGE_COUNT }}</p>
          </div>
        </div>
      </UiDialogContent>
    </UiDialog>
  </div>
</template>
