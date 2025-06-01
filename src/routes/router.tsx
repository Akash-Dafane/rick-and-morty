import { createRootRoute, createRoute, Outlet, Router } from '@tanstack/react-router'
import CharacterListPage from '../pages/CharacterListPage'
import { CharacterDetailPage } from '../pages/CharacterDetailPage'
import { ROUTES } from './routesConfig'

const rootRoute = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export const characterListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.CHARACTER_LIST,
  component: CharacterListPage,
})

export const characterDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.CHARACTER_DETAIL,
  component: CharacterDetailPage,
})

const routeTree = rootRoute.addChildren([characterListRoute, characterDetailRoute])

export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
