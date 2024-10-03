import { RouteObject, useRoutes } from 'react-router-dom';
import CustomerRouter from './CustomersRouter';
import InvoicesRouter from './InvoicesRouter';
import TeamRouter from './TeamRouter';
import { useMemo } from 'react';

function Router() {
  const customRoutes = useMemo(()=>{
    const myRoutes: RouteObject[] = [CustomerRouter, InvoicesRouter, TeamRouter];
    return myRoutes;
  },[])
  return useRoutes(customRoutes);
}

export default Router;
