// @export
export const COMMANDS: Record<string, { name: string; description: string; output: string }> = {
  help: {
    name: 'help',
    description: '',
    output: `Available commands:\n  about      - Display bio & summary\n  projects   - List featured systems & architecture\n  skills     - Display technical stack\n  contact    - Get direct email & connection status\n  resume     - View career experience\n  clear      - Clear terminal screen\n  whoami     - Print current session user`,
  },
  about: {
    name: 'about',
    description: 'Display bio & summary',
    output: `Duc Trong Luong - Front-end Developer\nFrontend Developer specializing in modern web and cross-platform mobile applications.\nLocation: Ho Chi Minh City, Vietnam`,
  },
  projects: {
    name: 'projects',
    description: 'List featured systems & architecture',
    output: ['Project 1', 'Project 2', 'Project 3'].map((p) => `• ${p} [Project Category] - Project status`).join('\n'),
  },
  skills: {
    name: 'skills',
    description: 'Display technical stack',
    output: 'Skill 1, Skill 2, Skill 3, Skill 4, Skill 5',
  },
  contact: {
    name: 'contact',
    description: 'Get direct email & connection status',
    output: `Email: email@example.com`,
  },
  resume: {
    name: 'resume',
    description: 'View career experience',
    output: `Duc Trong Luong | Front-end Developer\nExperience: 2+ Years\nSpecialization: Web Applications, Mobile Applications\nEducation: Bachelor's Degree in Software Engineering\nPortfolio: https://example.com\nLinkedIn: https://linkedin.com/in/example\nGitHub: https://github.com/example`,
  },
  whoami: { name: 'whoami', description: 'Print current session user', output: '' },
  clear: { name: 'clear', description: 'Clear terminal screen', output: '' },
};

// @export
export const QUICK_COMMANDS = Object.keys(COMMANDS).filter((name) => name !== 'resume' && name !== 'whoami');

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
