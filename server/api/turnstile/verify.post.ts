import { createError, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody<{ token?: unknown }>(event);
  const token = typeof body?.token === 'string' ? body.token.trim() : '';

  if (!token) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Turnstile token is required.',
    });
  }

  const result = await verifyTurnstileToken(token, event);

  if (!result.success) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Turnstile verification failed.',
    });
  }

  return { success: true };
});
