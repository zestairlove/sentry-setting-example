import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

export const initSentry = () => {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    release: `${process.env.REACT_APP_SENTRY_RELEASE}`,
    environment: 'production',
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
};
