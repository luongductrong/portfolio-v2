<script setup lang="ts">
import { Terminal, CornerDownLeft } from '@lucide/vue';
import { QUICK_COMMANDS, createCommands, executeCommand } from '../helpers';

interface CommandLog {
  command: string;
  type: 'welcome' | 'command';
}

const { t, tm, rt } = useI18n();
const input = ref('');
const bottomRef = ref<HTMLDivElement | null>(null);
const logs = ref<CommandLog[]>([{ command: 'welcome', type: 'welcome' }]);

function translateList(key: string): string[] {
  const messages = tm(key);
  return Array.isArray(messages) ? messages.map((message) => rt(message)) : [];
}

const commands = computed(() => createCommands({ t, translateList }));

const renderedLogs = computed(() =>
  logs.value.map((log) => {
    if (log.type === 'welcome') return { ...log, output: t('terminal.output.welcome') };

    const execution = executeCommand({
      cmd: log.command,
      commands: commands.value,
      host: import.meta.client ? window.location.host : '',
      t,
    });
    return { ...log, output: execution.output };
  }),
);

function handleRunCommand(cmd: string) {
  const execution = executeCommand({
    cmd,
    commands: commands.value,
    host: import.meta.client ? window.location.host : '',
    t,
  });

  if (execution.clear) logs.value = [];
  else logs.value = [...logs.value, { command: cmd, type: 'command' }];

  input.value = '';
}

function handleFormSubmit() {
  if (input.value) handleRunCommand(input.value);
}

watch(logs, async () => {
  await nextTick();
  bottomRef.value?.scrollIntoView({ behavior: 'smooth' });
});
</script>

<template>
  <UiDialog>
    <UiDialogTrigger as-child>
      <UiButton
        variant="ghost"
        size="icon-sm"
        :aria-label="t('terminal.open')"
        :title="t('terminal.open')"
        class="rounded-full transition-[background-color,border-color,box-shadow,transform]"
      >
        <Terminal data-icon="inline-start" aria-hidden="true" />
      </UiButton>
    </UiDialogTrigger>

    <UiDialogContent class="font-mono max-w-3xl gap-0 overflow-hidden p-0 shadow-2xl sm:max-w-3xl">
      <UiDialogHeader class="sr-only">
        <UiDialogTitle>{{ t('terminal.title') }}</UiDialogTitle>
        <UiDialogDescription>{{ t('terminal.description') }}</UiDialogDescription>
      </UiDialogHeader>

      <div class="px-4 py-3 border-b flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Terminal :size="16" aria-hidden="true" />
          <span class="text-[13px]">ductrong@terminal:~</span>
        </div>
      </div>

      <div class="flex h-[70vh] flex-col">
        <div class="px-4 py-2 border-b flex gap-2 overflow-x-auto">
          <UiBadge
            v-for="cmd in QUICK_COMMANDS"
            :key="cmd"
            as-child
            variant="outline"
            class="border cursor-pointer bg-muted hover:bg-accent"
            @click="handleRunCommand(cmd)"
          >
            <button type="button">
              {{ cmd }}
            </button>
          </UiBadge>
        </div>

        <div
          class="flex flex-1 flex-col gap-4 p-4 overflow-y-auto text-[13px] scrollbar-thin scrollbar-thumb-primary dark:scrollbar-thumb-primary/60"
        >
          <div v-for="(log, index) in renderedLogs" :key="index">
            <div class="flex items-center gap-2">
              <span class="text-primary">ductrong@user:~$</span>
              <span>{{ log.command }}</span>
            </div>
            <pre v-if="log.output" class="whitespace-pre-wrap mt-1 leading-relaxed">{{ log.output }}</pre>
          </div>
          <div ref="bottomRef" />
        </div>

        <form class="p-3 border-t flex items-center gap-2" @submit.prevent="handleFormSubmit">
          <span class="text-sm pl-2" aria-hidden="true">$</span>
          <input
            v-model="input"
            type="text"
            :aria-label="t('terminal.inputLabel')"
            :placeholder="t('terminal.placeholder')"
            class="flex-1 bg-transparent border-0 text-sm focus:outline-none"
            autofocus
          />
          <button type="submit" class="p-1.5 border" :aria-label="t('terminal.runCommand')">
            <CornerDownLeft :size="16" aria-hidden="true" />
          </button>
        </form>
      </div>
    </UiDialogContent>
  </UiDialog>
</template>
