<script setup lang="ts">
import { toast } from '@/lib/toast';
import { FORM_ENDPOINT } from '../constants';
import { LoaderCircle, Send } from '@lucide/vue';

const colorMode = useColorMode();

interface FormspreeResponse {
  error?: string;
  errors?: Array<{ message: string }>;
}
const form = reactive({
  name: '',
  email: '',
  message: '',
  token: '',
});
const isSubmitting = ref(false);

const fieldClass =
  'w-full rounded-md border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/55 transition-colors focus-visible:border-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30';

async function submitMessage(event: Event) {
  if (isSubmitting.value || !form.token) return;

  isSubmitting.value = true;

  const formElement = event.currentTarget as HTMLFormElement;
  const formData = new FormData(formElement);
  formData.append('_subject', `Portfolio inquiry from ${form.name}`);

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    const result = (await response.json().catch(() => null)) as FormspreeResponse | null;

    if (!response.ok) {
      const message = result?.errors?.map((error) => error.message).join(' ') || result?.error;
      throw new Error(message || 'Your message could not be sent. Please try again.');
    }

    form.name = '';
    form.email = '';
    form.message = '';
    toast.success('Message sent successfully.', {
      description: 'I will get back to you soon.',
    });
  } catch (error) {
    toast.error(error instanceof Error ? error.message : 'Your message could not be sent. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <form class="flex flex-col gap-6" aria-label="Contact form" :aria-busy="isSubmitting" @submit.prevent="submitMessage">
    <div class="flex flex-col gap-2">
      <label class="text-xs font-semibold uppercase text-muted-foreground" for="contact-name"> var fullName </label>
      <input
        id="contact-name"
        v-model.trim="form.name"
        :class="fieldClass"
        name="name"
        type="text"
        autocomplete="name"
        placeholder="John Doe"
        required
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-xs font-semibold uppercase text-muted-foreground" for="contact-email">
        var emailAddress
      </label>
      <input
        id="contact-email"
        v-model.trim="form.email"
        :class="fieldClass"
        name="email"
        type="email"
        autocomplete="email"
        inputmode="email"
        placeholder="john@example.com"
        required
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-xs font-semibold uppercase text-muted-foreground" for="contact-message"> const payload </label>
      <textarea
        id="contact-message"
        v-model.trim="form.message"
        :class="[fieldClass, 'min-h-36 resize-y']"
        name="message"
        placeholder="Enter your message here..."
        required
      />
    </div>

    <NuxtTurnstile
      v-model="form.token"
      class="min-h-16 w-full"
      :options="{
        theme: colorMode.value === 'dark' ? 'dark' : 'light',
        language: 'auto',
        size: 'flexible',
      }"
    />
    <div class="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
      <span class="text-xs text-muted-foreground">// Expect a response within 24 hours</span>
      <UiButton type="submit" size="sm" class="uppercase" :disabled="isSubmitting || !form.token">
        {{ isSubmitting ? 'Sending...' : 'Send message' }}
        <LoaderCircle v-if="isSubmitting" class="animate-spin" aria-hidden="true" />
        <Send v-else aria-hidden="true" />
      </UiButton>
    </div>
  </form>
</template>

<!-- TODO: Use shadcn UI + zod + form validation -->
