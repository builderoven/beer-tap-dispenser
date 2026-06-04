"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { isAuthenticated, logout } from "@/lib/auth"

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    setAuthed(isAuthenticated())
  }, [pathname])

  function handleLogout() {
    logout()
    router.push("/")
  }

  return (
    <nav className="bg-green-500 text-black px-6 py-4 flex items-center justify-between font-semibold">
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:underline">Dispensadores</Link>
        <Link href="/admin" className="hover:underline">Admin</Link>
      </div>
      <div>
        {authed ? (
          <button onClick={handleLogout} className="hover:underline cursor-pointer">
            Cerrar sesión
          </button>
        ) : (
          pathname !== "/login" && (
            <Link href="/login" className="hover:underline">Iniciar sesión</Link>
          )
        )}
      </div>
    </nav>
  )
}
