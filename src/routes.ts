import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import FHS from './pages/Schools/Districts/fhs';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/Schools/Districts/FHS',
    component: lazy(() => import('./pages/Schools/Districts/fhs')),
    // data: FHSData,
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
