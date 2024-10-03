import { RouteObject, useRoutes } from 'react-router-dom';
import CustomerRouter from './CustomersRouter';
import InvoicesRouter from './InvoicesRouter';
import TeamRouter from './TeamRouter';

function Router() {
  const myRoutes: RouteObject[] = [CustomerRouter, InvoicesRouter, TeamRouter];
  return useRoutes(myRoutes);
}

export default Router;
