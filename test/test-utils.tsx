/**
 * A wrapper for react testing-library
 *
 * As per https://testing-library.com/docs/react-testing-library/setup/
 * we set up a custom renderer, and re-export the entire testing-library.
 * Our tests should import from this module instead of the testing-library one.
 */

import React from "react"
import { render, RenderOptions } from "@testing-library/react"
// make sure we apply the fetch polyfill
import "next"
import { QueryClient, QueryClientProvider } from "react-query"
import { DefaultSeo } from "next-seo"
import seoConfig from "../src/next-seo.config"

// Turn off retries to speed up test failures
const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
})

// eslint doesn't like us using FC, but for now we're just copying the testing-library example
// eslint-disable-next-line react/prop-types
const Wrapper: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo {...seoConfig} />
      {children}
    </QueryClientProvider>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Wrapper, ...options })

// re-export everything
export * from "@testing-library/react"
// override render method exported above with our own
export { customRender as render }
