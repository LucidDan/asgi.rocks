import { DefaultSeoProps } from "next-seo/lib/types"

const seoConfig: DefaultSeoProps = {
  noindex: true,
  nofollow: true,
  titleTemplate: "ASGI Rocks | %s",
  defaultTitle: "A website promoting python ASGI packages",
  description:
    "ASGI Rocks is a site about Python ASGI applications and servers, and the tools and packages" +
    "used to build, test, and run them",
  additionalLinkTags: [
    { sizes: "57x57", rel: "apple-touch-icon", href: "/favicon-57x57.png" },
    { sizes: "60x60", rel: "apple-touch-icon", href: "/favicon-57x57.png" },
    { sizes: "72x72", rel: "apple-touch-icon", href: "/favicon-72x72.png" },
    { sizes: "76x76", rel: "apple-touch-icon", href: "/favicon-76x76.png" },
    { sizes: "114x114", rel: "apple-touch-icon", href: "/favicon-114x114.png" },
    { sizes: "120x120", rel: "apple-touch-icon", href: "/favicon-120x120.png" },
    { sizes: "144x144", rel: "apple-touch-icon", href: "/favicon-144x144.png" },
    { sizes: "152x152", rel: "apple-touch-icon", href: "/favicon-152x152.png" },
    { sizes: "180x180", rel: "apple-touch-icon", href: "/favicon-180x180.png" },
    {
      sizes: "16x16",
      type: "image/png",
      rel: "icon",
      href: "/favicon-16x16.png",
    },
    {
      sizes: "32x32",
      type: "image/png",
      rel: "icon",
      href: "/favicon-32x32.png",
    },
    {
      sizes: "96x96",
      type: "image/png",
      rel: "icon",
      href: "/favicon-96x96.png",
    },
    {
      sizes: "192x192",
      type: "image/png",
      rel: "icon",
      href: "/favicon-192x192.png",
    },
    { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  ],
  additionalMetaTags: [
    { name: "theme-color", content: "#000000" },
    { name: "msapplication-TileColor", content: "#ffffff" },
    { name: "msapplication-TileImage", content: "/favicon-144x144.png" },
    { name: "msapplication-config", content: "/browserconfig.xml" },
  ],
}

export default seoConfig
