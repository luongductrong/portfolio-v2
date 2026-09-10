export type ContactI18n = {
  seo: {
    title: string;
    description: string;
  };
  header: {
    eyebrow: string;
    firstLine: string;
    secondLine: string;
    note: string;
  };
  direct: {
    ariaLabel: string;
    title: string;
    description: string;
    emailCopied: string;
    copyEmail: string;
  };
  network: {
    title: string;
  };
  awaitingInput: string;
  form: {
    ariaLabel: string;
    subject: string;
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
    responseTime: string;
    send: string;
    sending: string;
    feedback: {
      success: string;
      successDescription: string;
      captchaError: string;
      error: string;
    };
  };
};
