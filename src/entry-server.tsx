import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import AppRoutes from './AppRoutes'

// Re-export the isomorphic helpers so the prerender script can pull
// everything it needs from this single built bundle.
export { canonicalRoutes } from './lib/routes'
export { resolveSeo } from './lib/seo'

/** Render the app to an HTML string for a given URL path. */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  )
}
