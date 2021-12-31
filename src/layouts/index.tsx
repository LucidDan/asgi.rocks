import React, { ReactNode } from "react"
import { Footer } from "@/layouts/common/footer"
import { NavBar } from "@/layouts/common/navbar"

interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({
  children,
}: DefaultLayoutProps): JSX.Element {
  return (
    <>
      <div className="bg-white">
        <NavBar />

        <main>{children}</main>

        <Footer />
      </div>
    </>
  )
}
