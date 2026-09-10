import type { ContactI18n } from './type';

export const contactI18n = {
  seo: {
    title: 'Contact - Duc Trong Luong',
    description: 'Contact Duc Trong Luong about web development, collaboration, and technical projects.',
  },
  header: {
    eyebrow: 'Open for collaboration',
    firstLine: 'Initialize',
    secondLine: 'Connection.',
    note: "Let's connect over a technical challenge or collaborative project.",
  },
  direct: {
    ariaLabel: 'Direct contact options',
    title: 'Direct access',
    description: 'Contact me directly at',
    emailCopied: 'Email copied',
    copyEmail: 'Copy email address',
  },
  network: {
    title: 'Network nodes',
  },
  awaitingInput: '// awaiting input...',
  form: {
    ariaLabel: 'Contact form',
    subject: 'Portfolio inquiry from {name}',
    placeholders: {
      name: 'Enter your name',
      email: 'Enter your email',
      message: 'Enter your message...',
    },
    responseTime: '// Expect a response within 24 hours',
    send: 'Send message',
    sending: 'Sending...',
    feedback: {
      success: 'Message sent successfully.',
      successDescription: 'I will get back to you soon.',
      captchaError: 'Security verification failed. Please try again.',
      error: 'Your message could not be sent. Please try again.',
    },
  },
} satisfies ContactI18n;
