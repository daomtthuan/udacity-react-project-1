import '~styles/theme.scss';
import 'bootstrap';

import React from 'react';

import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '~plugins/router';

const rootEl = document.querySelector('main');
if (!rootEl) {
  throw new Error('Root app not found');
}

const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
