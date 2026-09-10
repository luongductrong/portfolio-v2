import type { Composer } from 'vue-i18n';
import { milestones } from './constants';
import { projectDefinitions } from '@/features/projects/constants';
import { gmail, networkSocials } from '@/features/contact/constants';
import { learningGroups, skillGroups } from '@/features/skills/constants';

export const COMMAND_NAMES = ['help', 'about', 'projects', 'skills', 'contact', 'resume', 'clear', 'whoami'] as const;
export const QUICK_COMMANDS = COMMAND_NAMES.filter((name) => name !== 'whoami');

type CommandName = (typeof COMMAND_NAMES)[number];
type Command = { name: CommandName; description: string; output: string };
export type CommandMap = Record<CommandName, Command>;
type I18nHelpers = {
  t: Composer['t'];
  translateList: (key: string) => string[];
};

const HELP_COMMANDS = ['about', 'projects', 'skills', 'contact', 'resume', 'clear', 'whoami'] as const;

const PROJECT_STATUS_KEYS = {
  completed: 'completed',
  'in-development': 'inDevelopment',
  maintained: 'maintained',
  archived: 'archived',
} as const;

export function createCommands({ t, translateList }: I18nHelpers): CommandMap {
  const descriptions = Object.fromEntries(
    COMMAND_NAMES.map((name) => [name, t(`terminal.commands.descriptions.${name}`)]),
  ) as Record<CommandName, string>;

  const helpOutput = [
    t('terminal.output.availableCommands'),
    ...HELP_COMMANDS.map((name) => `  ${name.padEnd(12)} - ${descriptions[name]}`),
  ].join('\n');

  const projectOutput = projectDefinitions
    .map((project) => {
      const statusKey = PROJECT_STATUS_KEYS[project.status];
      const category = t(`projects.items.${project.id}.category`);
      const status = t(`terminal.output.projects.statuses.${statusKey}`);
      return `• ${project.title} [${category}] - ${status}`;
    })
    .join('\n');

  const skillsOutput = [
    ...skillGroups.map((group) => `${t(`skills.groups.${group.id}`)}: ${group.skills.join(', ')}`),
    '',
    t('terminal.output.skills.currentlyLearning'),
    ...learningGroups.map((group) => `${t(`skills.learningGroups.${group.id}`)}: ${group.skills.join(', ')}`),
  ].join('\n');

  const contactOutput = [
    `${t('terminal.output.contact.email')}: ${gmail.value}`,
    ...networkSocials.map((social) => `${social.platform}: ${social.url}`),
  ].join('\n');

  const resumeOutput = milestones
    .map((milestone) => {
      const key = `portfolio.timeline.items.${milestone.id}`;
      const highlights = translateList(`${key}.highlights`);
      return `${t(`${key}.title`)} @ ${t(`${key}.organization`)}\n${t(`${key}.period`)} · ${t(`${key}.location`)}\n${highlights.join(', ')}`;
    })
    .join('\n\n');

  return {
    help: { name: 'help', description: descriptions.help, output: helpOutput },
    about: {
      name: 'about',
      description: descriptions.about,
      output: [
        t('terminal.output.about.title'),
        t('terminal.output.about.description'),
        t('terminal.output.about.location'),
      ].join('\n'),
    },
    projects: { name: 'projects', description: descriptions.projects, output: projectOutput },
    skills: { name: 'skills', description: descriptions.skills, output: skillsOutput },
    contact: { name: 'contact', description: descriptions.contact, output: contactOutput },
    resume: { name: 'resume', description: descriptions.resume, output: resumeOutput },
    clear: { name: 'clear', description: descriptions.clear, output: '' },
    whoami: { name: 'whoami', description: descriptions.whoami, output: '' },
  };
}

type ExecuteCommandParams = {
  cmd: string;
  commands: CommandMap;
  host: string;
  t: Composer['t'];
};

export type CommandExecution = {
  clear: boolean;
  output: string;
};

export function executeCommand({ cmd, commands, host, t }: ExecuteCommandParams): CommandExecution {
  const trimmed = cmd.trim().toLowerCase();

  if (trimmed === 'clear') return { clear: true, output: '' };
  if (trimmed === 'whoami') return { clear: false, output: `guest@${host}` };

  const command = commands[trimmed as CommandName];
  if (command) return { clear: false, output: command.output };

  return {
    clear: false,
    output: t('terminal.output.commandNotRecognized', { command: trimmed }),
  };
}
