// @export
export type PortfolioI18n = {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    greeting: string;
    headline: {
      start: string;
      highlight: string;
      end: string;
    };
    description: string;
    actions: {
      viewWork: string;
      resume: string;
    };
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      education: {
        period: string;
        title: string;
        organization: string;
        location: string;
        description: string;
        highlights: string[];
      };
      internship: {
        period: string;
        title: string;
        organization: string;
        location: string;
        description: string;
        highlights: string[];
      };
      developer: {
        period: string;
        title: string;
        organization: string;
        location: string;
        description: string;
        highlights: string[];
      };
    };
  };
};

// @export
export type TerminalI18n = {
  open: string;
  title: string;
  description: string;
  inputLabel: string;
  placeholder: string;
  runCommand: string;
  commands: {
    descriptions: {
      help: string;
      about: string;
      projects: string;
      skills: string;
      contact: string;
      resume: string;
      clear: string;
      whoami: string;
    };
  };
  output: {
    welcome: string;
    availableCommands: string;
    commandNotRecognized: string;
    about: {
      title: string;
      description: string;
      location: string;
    };
    projects: {
      categories: {
        eLearningPlatform: string;
        enterpriseWebApplication: string;
        webGame: string;
        portfolioWebsite: string;
      };
      statuses: {
        completed: string;
        inDevelopment: string;
        maintained: string;
        archived: string;
      };
    };
    skills: {
      groups: string[];
      currentlyLearning: string;
      learningGroups: string[];
    };
    contact: {
      email: string;
    };
  };
};
