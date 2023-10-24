import Link from "next/link"

import { Form as LoginForm } from "./form"

export default function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="space-y-12 rounded-xl px-8 pb-8 pt-12 sm:bg-white sm:shadow-xl">
        <h1 className="text-2xl font-semibold">Login</h1>
        <LoginForm />
        <p className="text-center">
          Need to create an account?{" "}
          <Link className="text-indigo-500 hover:underline" href="/register">
            Create Account
          </Link>{" "}
        </p>
      </div>
    </div>
  )
}
