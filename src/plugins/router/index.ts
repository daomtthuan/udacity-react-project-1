import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    lazy: async () => (await import('~components/layout/default')).default,

    children: [
      {
        index: true,
        lazy: async () => (await import('~components/page/home')).default,
      },
      {
        path: '/search',
        lazy: async () => (await import('~components/page/search')).default,
      },
    ],
  },
]);

export default router;
