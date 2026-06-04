const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "admin"

export function login(username: string, password: string): boolean {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    localStorage.setItem("admin_session", "true")
    return true
  }
  return false
}

export function logout(): void {
  localStorage.removeItem("admin_session")
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem("admin_session") === "true"
}
