<script setup lang="ts">
import { Terminal, CornerDownLeft } from '@lucide/vue';
import { QUICK_COMMANDS, executeCommand } from '../helpers';

interface CommandLog {
  command: string;
  output: string;
}

const input = ref('');
const bottomRef = ref<HTMLDivElement | null>(null);
const logs = ref<CommandLog[]>([
  {
    command: 'welcome',
    output: `Duc Trong Luong CLI Terminal v2.0.0.4 (x86_64-pc-linux-gnu)\nType 'help' to list available commands.`,
  },
]);

const handleRunCommand = function (cmd: string) {
  executeCommand({
    cmd,
    onOutput: (output: string) => {
      logs.value = [...logs.value, { command: cmd, output }];
    },
    onClear: () => {
      logs.value = [];
    },
  });
  input.value = '';
};

const handleFormSubmit = function () {
  if (input.value) handleRunCommand(input.value);
};

watch(
  logs,
  async () => {
    await nextTick();
    bottomRef.value?.scrollIntoView({ behavior: 'smooth' });
  },
  { deep: true },
);
</script>

<template>
  <UiDialog>
    <UiDialogTrigger as-child>
      <UiButton variant="ghost" size="icon-sm" class="bg-muted rounded-full">
        <Terminal />
      </UiButton>
    </UiDialogTrigger>

    <UiDialogContent class="max-w-3xl gap-0 overflow-hidden p-0 shadow-2xl sm:max-w-3xl">
      <UiDialogHeader class="sr-only">
        <UiDialogTitle>Terminal</UiDialogTitle>
        <UiDialogDescription>Duc Trong Luong terminal app</UiDialogDescription>
      </UiDialogHeader>
      <!-- Terminal Title Bar -->
      <div class="px-4 py-3 border-b flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Terminal :size="16" />
          <UiDialogTitle class="text-[13px]"> ductrong@terminal:~ </UiDialogTitle>
        </div>
      </div>

      <div class="flex h-[70vh] flex-col">
        <!-- Quick Command Chips -->
        <div class="px-4 py-2 border-b flex gap-2 overflow-x-auto">
          <UiBadge
            v-for="cmd in QUICK_COMMANDS"
            :key="cmd"
            as-child
            variant="outline"
            class="rounded border cursor-pointer bg-muted hover:bg-accent"
            @click="handleRunCommand(cmd)"
          >
            <button>
              {{ cmd }}
            </button>
          </UiBadge>
        </div>
        <!-- Logs Scroll Area -->
        <div
          class="flex-1 p-4 overflow-y-auto text-[13px] space-y-4 scrollbar-thin scrollbar-thumb-primary dark:scrollbar-thumb-primary/60"
        >
          <div v-for="(log, index) in logs" :key="index">
            <div class="flex items-center gap-2">
              <span class="text-primary">ductrong@user:~$</span>
              <span>{{ log.command }}</span>
            </div>
            <pre v-if="log.output" class="whitespace-pre-wrap mt-1 leading-relaxed">{{ log.output }}</pre>
          </div>
          <div ref="bottomRef" />
        </div>
        <!-- Input Form -->
        <form class="p-3 border-t flex items-center gap-2" @submit.prevent="handleFormSubmit">
          <span class="text-sm pl-2">$</span>
          <input
            v-model="input"
            type="text"
            placeholder="Type command ('help', 'projects', 'contact')..."
            class="flex-1 bg-transparent border-0 text-sm focus:outline-none"
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
