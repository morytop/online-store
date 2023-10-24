"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import supabase from "@/supabase/client"

import { Alert } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const Form = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  async function signInWithEmail() {
    try {
      if (email && password) {
        const resp = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })
        if (resp.error) throw resp.error
        const userId = resp.data.user?.id

        console.log("userId: ", userId)
        setSuccessMessage("Login successful!")
        setTimeout(() => {
          setSuccessMessage("")
          router.push("/")
        }, 5000)
      }
    } catch {
      setError("Incorrect email or password")
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} className="w-full space-y-12 sm:w-[400px]">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          className="w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          data-testid="email-input"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          className="w-full"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      {error && <Alert>{error}</Alert>}
      {successMessage && (
        <div className="rounded bg-green-400 p-2">{successMessage}</div>
      )}
      <div className="w-full">
        <Button className="w-full" size="lg" onClick={signInWithEmail}>
          Login
        </Button>
      </div>
    </form>
  )
}
