<script setup lang="ts">
import { ArrowRight, Check, Copy, Mail, Network, Terminal } from '@lucide/vue';

const emailAddress = 'luongductrong2004@gmail.com';
const copied = ref(false);

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(emailAddress);
    copied.value = true;
    window.setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch {
    window.location.href = `mailto:${emailAddress}`;
  }
}
</script>

<template>
  <section aria-labelledby="contact-heading">
    <PageHeader
      heading-id="contact-heading"
      eyebrow="Open for collaboration"
      first-line="Initialize"
      second-line="Connection."
      description="Whether you have a technical challenge, a collaborative project in mind, or simply want to discuss clean interfaces, I am ready to connect."
      note="Send a message or connect directly through the channels below."
    />

    <div class="mt-14 grid items-start gap-8 lg:mt-18 lg:grid-cols-12 lg:gap-12">
      <div class="rounded-lg border bg-card p-5 sm:p-7 lg:col-span-7">
        <ContactForm />
      </div>

      <aside class="flex flex-col gap-6 lg:sticky lg:top-24 lg:col-span-5" aria-label="Direct contact options">
        <section class="rounded-lg border bg-card p-5 transition-colors hover:border-primary/40 sm:p-6">
          <div class="mb-5 flex items-center gap-3 border-b pb-4">
            <Terminal class="size-5 text-primary" aria-hidden="true" />
            <h2 class="text-sm font-semibold uppercase">Direct access</h2>
          </div>
          <p class="text-sm leading-6 text-muted-foreground">
            For immediate inquiries, bypass the form and reach out directly through email.
          </p>

          <div class="mt-5 flex min-w-0 items-center gap-2 rounded-md border bg-background p-2">
            <Mail class="ml-1 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <a
              :href="`mailto:${emailAddress}`"
              class="min-w-0 flex-1 truncate text-sm transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {{ emailAddress }}
            </a>
            <button
              type="button"
              class="inline-flex size-10 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              :title="copied ? 'Email copied' : 'Copy email address'"
              :aria-label="copied ? 'Email copied' : 'Copy email address'"
              @click="copyEmail"
            >
              <Check v-if="copied" class="size-4 text-primary" aria-hidden="true" />
              <Copy v-else class="size-4" aria-hidden="true" />
            </button>
            <span class="sr-only" role="status" aria-live="polite">{{ copied ? 'Email copied' : '' }}</span>
          </div>
        </section>

        <section class="rounded-lg border bg-card p-5 sm:p-6">
          <div class="mb-4 flex items-center gap-3 border-b pb-4">
            <Network class="size-5 text-muted-foreground" aria-hidden="true" />
            <h2 class="text-sm font-semibold uppercase">Network nodes</h2>
          </div>

          <div class="grid gap-2">
            <a
              href="https://github.com/luongductrong"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex min-h-12 items-center justify-between rounded-md border border-transparent px-3 transition-colors hover:border-border hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <span class="flex items-center gap-3 font-medium">
                <span class="inline-flex size-8 items-center justify-center rounded border bg-background">
                  <IconGitHub class="size-4" aria-hidden="true" />
                </span>
                GitHub
              </span>
              <ArrowRight
                class="size-4 text-muted-foreground transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a
              href="https://gitlab.com/luongductrong"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex min-h-12 items-center justify-between rounded-md border border-transparent px-3 transition-colors hover:border-border hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <span class="flex items-center gap-3 font-medium">
                <span class="inline-flex size-8 items-center justify-center rounded border bg-background">
                  <IconGitLab class="size-4" aria-hidden="true" />
                </span>
                GitLab
              </span>
              <ArrowRight
                class="size-4 text-muted-foreground transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a
              href="https://linkedin.com/in/luongductrong2004/"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex min-h-12 items-center justify-between rounded-md border border-transparent px-3 transition-colors hover:border-border hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <span class="flex items-center gap-3 font-medium">
                <span class="inline-flex size-8 items-center justify-center rounded border bg-background">
                  <IconLinkedIn class="size-4" aria-hidden="true" />
                </span>
                LinkedIn
              </span>
              <ArrowRight
                class="size-4 text-muted-foreground transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </section>

        <div
          class="hidden min-h-28 items-center justify-center rounded-lg border border-dashed text-xs text-muted-foreground lg:flex"
        >
          // awaiting input...
        </div>
      </aside>
    </div>
  </section>
</template>
