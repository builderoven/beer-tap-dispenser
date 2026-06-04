"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { login } from "@/lib/auth"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (login(username, password)) {
      router.push("/admin")
    } else {
      setError("Credenciales incorrectas")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-600 bg-black text-white rounded px-4 py-2 focus:outline-none focus:border-green-500"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-600 bg-black text-white rounded px-4 py-2 focus:outline-none focus:border-green-500"
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-green-500 text-black font-semibold rounded px-4 py-2 hover:bg-green-400 transition cursor-pointer"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
