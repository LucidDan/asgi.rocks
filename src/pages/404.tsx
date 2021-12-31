import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { ChevronRightIcon } from "@heroicons/react/solid"
import { BookmarkAltIcon, RssIcon } from "@heroicons/react/outline"
import DefaultLayout from "@/layouts"
import { NextSeo } from "next-seo"

export default function NotFound(): JSX.Element {
  const { pathname } = useRouter()

  return (
    <DefaultLayout>
      <NextSeo>
        <title>Page not found</title>
      </NextSeo>
      <div className="flex-shrink-0 pt-16">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
          alt="Workflow"
        />
      </div>
      <div className="max-w-xl mx-auto py-16 sm:py-24">
        <div className="text-center">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            404 error
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            The page does not exist.
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            The page {'"'}
            {pathname}
            {'"'} could not be found.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
            Popular pages
          </h2>
          <div className="mt-8">
            <Link href="/">
              <a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                Or go back home<span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
