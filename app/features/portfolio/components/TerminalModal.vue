<script setup lang="ts">
import { Terminal, CornerDownLeft } from "@lucide/vue";

interface CommandLog {
  command: string;
  output: string;
}

const input = ref("");
const bottomRef = ref<HTMLDivElement | null>(null);
const logs = ref<CommandLog[]>([
  {
    command: "welcome",
    output: `Duc Trong Luong CLI Terminal v2.0.0.4 (x86_64-pc-linux-gnu)\nType 'help' to list available commands.`,
  },
]);

watch(
  logs,
  async () => {
    await nextTick();
    bottomRef.value?.scrollIntoView({ behavior: "smooth" });
  },
  { deep: true },
);

const handleRunCommand = function (cmdStr: string) {
  const trimmed = cmdStr.trim().toLowerCase();
  let output = "";

  switch (trimmed) {
    case "help":
      output = `Available commands:\n  about      - Display bio & summary\n  projects   - List featured systems & architecture\n  skills     - Display technical stack\n  contact    - Get direct email & connection status\n  resume     - View career experience\n  clear      - Clear terminal screen\n  whoami     - Print current session user`;
      break;
    case "about":
      output =
        "Duc Trong Luong - Front-end Developer\nFrontend Developer specializing in modern web and cross-platform mobile applications.\nLocation: Ho Chi Minh City, Vietnam";
      break;
    case "projects":
      output = ["Project 1", "Project 2", "Project 3"]
        .map((p) => `• ${p} [Project Category] - Project status`)
        .join("\n");
      break;
    case "skills":
      output = "Skill 1, Skill 2, Skill 3, Skill 4, Skill 5";
      break;
    case "contact":
      output = `Email: email@example.com\nSystem Status: ACCEPTING CONNECTIONS`;
      break;
    case "clear":
      logs.value = [];
      return;
    case "whoami":
      output = `guest@${window.location.host}`;
      break;
    case "resume":
      output = `Duc Trong Luong | Front-end Developer\nExperience: 2+ Years\nSpecialization: Web Applications, Mobile Applications\nEducation: Bachelor's Degree in Software Engineering\nPortfolio: https://example.com\nLinkedIn: https://linkedin.com/in/example\nGitHub: https://github.com/example`;
      break;
    default:
      output = `Command not recognized: '${trimmed}'. Type 'help' for available commands.`;
  }

  logs.value = [...logs.value, { command: cmdStr, output }];
  input.value = "";
};

const handleFormSubmit = function () {
  if (input.value) handleRunCommand(input.value);
};
</script>

<template>
  <UiDialog>
    <UiDialogTrigger as-child>
      <UiButton variant="ghost" size="icon-sm" class="bg-muted rounded-full">
        <Terminal />
      </UiButton>
    </UiDialogTrigger>

    <UiDialogContent
      class="max-w-3xl gap-0 overflow-hidden p-0 shadow-2xl sm:max-w-3xl"
    >
      <UiDialogHeader class="sr-only">
        <UiDialogTitle>Terminal</UiDialogTitle>
        <UiDialogDescription>Duc Trong Luong terminal app</UiDialogDescription>
      </UiDialogHeader>
      <!-- Terminal Title Bar -->
      <div class="px-4 py-3 border-b flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Terminal :size="16" />
          <UiDialogTitle class="font-code text-[13px]">
            ductrong@terminal:~
          </UiDialogTitle>
        </div>
      </div>

      <div class="flex h-125 flex-col">
        <!-- Quick Command Chips -->
        <div class="px-4 py-2 border-b flex gap-2 overflow-x-auto">
          <button
            v-for="cmd in [
              'help',
              'about',
              'projects',
              'skills',
              'contact',
              'clear',
            ]"
            :key="cmd"
            class="px-2.5 py-1 rounded border font-code text-xs transition-all cursor-pointer"
            @click="handleRunCommand(cmd)"
          >
            {{ cmd }}
          </button>
        </div>

        <!-- Logs Scroll Area -->
        <div class="flex-1 p-4 overflow-y-auto font-code text-[13px] space-y-4">
          <div v-for="(log, index) in logs" :key="index">
            <div class="flex items-center gap-2">
              <span class="text-primary">ductrong@node:~$</span>
              <span>{{ log.command }}</span>
            </div>
            <pre
              v-if="log.output"
              class="whitespace-pre-wrap mt-1 leading-relaxed font-code"
              >{{ log.output }}</pre
            >
          </div>
          <div ref="bottomRef" />
        </div>

        <!-- Input Form -->
        <form
          class="p-3 border-t flex items-center gap-2"
          @submit.prevent="handleFormSubmit"
        >
          <span class="font-code text-[14px] pl-2">$</span>
          <input
            v-model="input"
            type="text"
            placeholder="Type command ('help', 'projects', 'contact')..."
            class="flex-1 bg-transparent border-0 font-code text-sm focus:outline-none"
            autofocus
          />
          <button type="submit" class="p-1.5 rounded border">
            <CornerDownLeft :size="16" />
          </button>
        </form>
      </div>
    </UiDialogContent>
  </UiDialog>
</template>
