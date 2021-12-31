import { Popover, Transition } from "@headlessui/react"
import Link from "next/link"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import React, { Fragment } from "react"

const routeConfig = [
  { name: "Services", path: "/", hideInNav: false },
  // { name: "Past Projects", path: "/past-projects", hideInNav: false },
  // { name: "Articles", path: "/posts", hideInNav: false },
  { name: "About Us", path: "/about-us", hideInNav: false },
]

export function NavBar() {
  return (
    <header>
      <Popover className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Lucid Horizons</span>
                {/*<LucidLogo className="h-10 w-auto sm:h-12 fill-current text-gray-500 m-0" />*/}
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {routeConfig.map(
              (route, index) =>
                !route?.hideInNav && (
                  <Link key={index} href={route.path}>
                    <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                      {route.name}
                    </a>
                  </Link>
                )
            )}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="https://clients.lucidhorizons.com.au/"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
            >
              Client Login
            </a>
            <a
              href="https://clients.lucidhorizons.com.au/contact"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-gray-600 to-black bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-green-200 hover:to-green-400"
            >
              Contact us
            </a>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="border-black rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    {/*<LucidLogo className="m-0 h-10 w-auto fill-current text-gray-500" />*/}
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  {routeConfig.map(
                    (route, index) =>
                      !route.hideInNav && (
                        <Link key={index} href={route.path}>
                          <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                            {route.name}
                          </a>
                        </Link>
                      )
                  )}

                  <div className="mt-6">
                    <a
                      href="https://clients.lucidhorizons.com.au/contact"
                      className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
                    >
                      Contact Us
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <a
                        href="https://clients.lucidhorizons.com.au/"
                        className="text-gray-900"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}
