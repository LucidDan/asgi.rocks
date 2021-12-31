import React, { PropsWithChildren } from "react"
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"
// import * as Sentry from "@sentry/react"
// import { FallbackRender } from "@sentry/react/dist/errorboundary"

// const defaultErrorDialogOptions: Sentry.ReportDialogOptions = {
//   title: "It looks like we're having issues",
//   user: { email: "", name: "" },
//   subtitle: "Our team has been notified.",
//   subtitle2: "If you'd like to help, tell us what happened below.",
//   labelName: "Name",
//   labelEmail: "Email",
//   labelComments: "What happened?",
//   labelClose: "Close",
//   labelSubmit: "Submit",
//   errorGeneric:
//     "An unknown error occurred while submitting your report. Please try again.",
//   errorFormEntry:
//     "Some fields you entered were invalid, please check the errors and try again.",
//   successMessage: "Thanks so much, your feedback has been submitted!",
// }

// type ErrorBoundaryProps = PropsWithChildren<{
//   fallback: React.ReactElement | FallbackRender
//   reportToSentry?: boolean
//   options?: Sentry.ReportDialogOptions
// }>

// function SentryErrorBoundary({
//   children,
//   fallback,
//   options = {},
// }: ErrorBoundaryProps): JSX.Element {
//   // fixme useUser and get user name/email information, if available, put it in setSentryTags and errorDialogOptions.
//
//   function setSentryTags(
//     scope: Sentry.Scope
//     // error: Error | null,
//     // componentStack: string | null
//   ): void {
//     // distinguish from other error boundaries in the app
//     scope.setTag("location", "GlobalErrorBoundary")
//   }
//
//   return (
//     <Sentry.ErrorBoundary
//       beforeCapture={setSentryTags}
//       fallback={fallback}
//       showDialog
//       dialogOptions={{ ...defaultErrorDialogOptions, ...options }}
//     >
//       {children}
//     </Sentry.ErrorBoundary>
//   )
// }

export { ReactErrorBoundary as ErrorBoundary }
// export { SentryErrorBoundary }
