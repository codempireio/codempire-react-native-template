import React from 'react';

import { AppRouter } from './app.router';

import { AppService } from './app.service';

export const App = () => (
  <AppService>
    <AppRouter />
  </AppService>
);
