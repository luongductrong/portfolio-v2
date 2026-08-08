<script setup lang="ts">
import { Send } from '@lucide/vue';

interface ContactFormProps {
  recipient: string;
}

const props = defineProps<ContactFormProps>();
const form = reactive({
  name: '',
  email: '',
  message: '',
});

const fieldClass =
  'w-full rounded-md border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/55 transition-colors focus-visible:border-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30';

function submitMessage() {
  const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
  const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);

  window.location.href = `mailto:${props.recipient}?subject=${subject}&body=${body}`;
}
</script>

<template>
  <form class="flex flex-col gap-6" aria-label="Contact form" @submit.prevent="submitMessage">
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

    <div class="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
      <span class="text-xs text-muted-foreground">// Expect a response within 24 hours</span>
      <UiButton type="submit" class="uppercase">
        Send message
        <Send aria-hidden="true" />
      </UiButton>
    </div>
  </form>
</template>

<!-- TODO: Use shadcn UI + zod + form validation -->
