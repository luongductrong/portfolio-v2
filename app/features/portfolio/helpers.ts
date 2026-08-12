import { milestones } from './constants';
import { projects } from '@/features/projects/constants';
import { gmail, networkSocials } from '@/features/contact/constants';
import { learningGroups, skillGroups } from '@/features/skills/constants';

// @export
export const COMMANDS: Record<string, { name: string; description: string; output: string }> = {
  help: {
    name: 'help',
    description: '',
    output: `Available commands:\n  about      - Display bio & summary\n  projects   - List featured systems & architecture\n  skills     - Display technical stack\n  contact    - Get contact information\n  resume     - View career experience\n  clear      - Clear terminal screen\n  whoami     - Print current session user`,
  },
  about: {
    name: 'about',
    description: 'Display bio & summary',
    output: `Duc Trong Luong - Front-end Developer\nFrontend Developer specializing in modern web and cross-platform mobile applications.\nLocation: Ho Chi Minh City, Vietnam`,
  },
  projects: {
    name: 'projects',
    description: 'List featured systems & architecture',
    output: projects
      .map((project) => `• ${project.title} [${project.category}] - ${project.metadata.status}`)
      .join('\n'),
  },
  skills: {
    name: 'skills',
    description: 'Display technical stack',
    output: [
      ...skillGroups.map((group) => `${group.title}: ${group.skills.join(', ')}`),
      '',
      'Currently learning:',
      ...learningGroups.map((group) => `${group.title}: ${group.skills.join(', ')}`),
    ].join('\n'),
  },
  contact: {
    name: 'contact',
    description: 'Get contact information',
    output: [`Email: ${gmail.value}`, ...networkSocials.map((social) => `${social.platform}: ${social.url}`)].join(
      '\n',
    ),
  },
  resume: {
    name: 'resume',
    description: 'View career experience',
    output: milestones
      .map(
        (milestone) =>
          `${milestone.title} @ ${milestone.organization}\n${milestone.period} · ${milestone.location} · ${milestone.status}\n${milestone.highlights.join(', ')}`,
      )
      .join('\n\n'),
  },
  whoami: { name: 'whoami', description: 'Print current session user', output: '' },
  clear: { name: 'clear', description: 'Clear terminal screen', output: '' },
};

// @export
export const QUICK_COMMANDS = Object.keys(COMMANDS).filter((name) => name !== 'whoami');

type ExecuteCommandParams = {
  cmd: string;
  onClear: () => void;
  onOutput: (output: string) => void;
};

// @export
export function executeCommand({ cmd, onClear, onOutput }: ExecuteCommandParams) {
  const trimmed = cmd.trim().toLowerCase();
  let output = `Command not recognized: '${trimmed}'. Type 'help' for available commands.`;

  if (trimmed === 'clear') {
    output = '';
    onClear();
  } else if (trimmed === 'whoami') {
    output = `guest@${window.location.host}`;
  } else {
    const command = COMMANDS[trimmed];
    if (command) output = command.output || '';
  }

  if (output) onOutput(output);
}
