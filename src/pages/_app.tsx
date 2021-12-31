import React from "react"
import { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"
import { QueryClient, QueryClientProvider } from "react-query"
import { Hydrate } from "react-query/hydration"
import { ReactQueryDevtools } from "react-query/devtools"
import "tailwindcss/tailwind.css"
import seoConfig from "../next-seo.config"

export default function NextApp({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  // In NextJS, this might be executing client or server side. We need to guarantee that we have
  // a unique client per user that lasts the lifetime of the component. useState is one of the ways to do this
  const [queryClient] = React.useState<QueryClient>(
    () =>
      new QueryClient({
        defaultOptions: { queries: { suspense: false } },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <DefaultSeo {...seoConfig} />
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  )
}
