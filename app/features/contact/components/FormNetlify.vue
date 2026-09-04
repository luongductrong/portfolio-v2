<script setup lang="ts">
import { toast } from '@/lib/toast';
import { LoaderCircle, Send } from '@lucide/vue';
import { TURNSTILE_VERIFY_ENDPOINT } from '../constants';

const { t, locale } = useI18n();
const colorMode = useColorMode();

type VerificationStatus = 'idle' | 'verifying' | 'verified' | 'failed';

const form = reactive({
  name: '',
  email: '',
  message: '',
});
const isSubmitting = ref(false);
const turnstile = ref<{ reset: () => void }>();
const turnstileToken = ref('');
const verificationStatus = ref<VerificationStatus>('idle');
let verificationRequestId = 0;

const fieldClass =
  'w-full border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/55 transition-colors focus-visible:border-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30';

function toUrlEncoded(formData: FormData) {
  return new URLSearchParams(
    Array.from(formData.entries()).map(([key, value]) => [key, typeof value === 'string' ? value : value.name]),
  ).toString();
}

function resetTurnstile(status: VerificationStatus = 'idle') {
  verificationRequestId += 1;
  turnstileToken.value = '';
  verificationStatus.value = status;
  turnstile.value?.reset();
}

async function verifyTurnstileToken(token: string) {
  const requestId = ++verificationRequestId;
  verificationStatus.value = 'verifying';

  try {
    const response = await $fetch<{ success: boolean }>(TURNSTILE_VERIFY_ENDPOINT, {
      method: 'POST',
      body: { token },
    });

    if (requestId !== verificationRequestId || turnstileToken.value !== token) return;

    if (!response.success) throw new Error('Turnstile verification failed.');

    verificationStatus.value = 'verified';
  } catch {
    if (requestId !== verificationRequestId || turnstileToken.value !== token) return;

    toast.error(t('contact.form.feedback.captchaError'));
    resetTurnstile('failed');
  }
}

async function submitMessage(event: Event) {
  if (isSubmitting.value || verificationStatus.value !== 'verified') return;

  isSubmitting.value = true;

  const formElement = event.currentTarget as HTMLFormElement;
  const formData = new FormData(formElement);
  formData.delete('cf-turnstile-response');
  formData.set('form-name', 'contact');
  formData.set('subject', t('contact.form.subject', { name: form.name }));

  try {
    const response = await fetch('/__forms.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: toUrlEncoded(formData),
    });

    if (!response.ok) throw new Error();

    form.name = '';
    form.email = '';
    form.message = '';
    toast.success(t('contact.form.feedback.success'), {
      description: t('contact.form.feedback.successDescription'),
    });
  } catch {
    toast.error(t('contact.form.feedback.error'));
  } finally {
    resetTurnstile();
    isSubmitting.value = false;
  }
}

watch(turnstileToken, (token) => {
  if (!token) {
    verificationRequestId += 1;
    if (verificationStatus.value !== 'failed') verificationStatus.value = 'idle';
    return;
  }

  void verifyTurnstileToken(token);
});
</script>

<template>
  <form
    name="contact"
    method="POST"
    action="/__forms.html"
    data-netlify="true"
    netlify-honeypot="bot-field"
    class="flex flex-col gap-6"
    :aria-label="t('contact.form.ariaLabel')"
    :aria-busy="isSubmitting"
    @submit.prevent="submitMessage"
  >
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="subject" :value="t('contact.form.subject', { name: form.name })" />

    <div class="sr-only" aria-hidden="true">
      <label for="contact-bot-field">
        Don’t fill this out if you’re human:
        <input id="contact-bot-field" name="bot-field" type="text" tabindex="-1" autocomplete="off" />
      </label>
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-xs font-semibold uppercase text-muted-foreground" for="contact-name"> var fullName </label>
      <input
        id="contact-name"
        v-model.trim="form.name"
        :class="fieldClass"
        name="name"
        type="text"
        autocomplete="name"
        :placeholder="t('contact.form.placeholders.name')"
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
        :placeholder="t('contact.form.placeholders.email')"
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
        :placeholder="t('contact.form.placeholders.message')"
        required
      />
    </div>

    <NuxtTurnstile
      ref="turnstile"
      :key="`turnstile-${colorMode.value}-${locale}`"
      v-model="turnstileToken"
      class="min-h-16 w-full"
      :options="{
        theme: colorMode.value === 'dark' ? 'dark' : 'light',
        language: locale,
        size: 'flexible',
        tabindex: -1,
      }"
    />
    <div class="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
      <span class="text-xs text-muted-foreground">{{ t('contact.form.responseTime') }}</span>
      <UiButton
        type="submit"
        size="sm"
        class="uppercase shadow-brutalism hover:translate-1 hover:shadow-none"
        :disabled="isSubmitting || verificationStatus !== 'verified'"
      >
        {{ isSubmitting ? t('contact.form.sending') : t('contact.form.send') }}
        <LoaderCircle
          v-if="isSubmitting || verificationStatus === 'verifying'"
          class="animate-spin"
          aria-hidden="true"
        />
        <Send v-else aria-hidden="true" />
      </UiButton>
    </div>
  </form>
</template>
