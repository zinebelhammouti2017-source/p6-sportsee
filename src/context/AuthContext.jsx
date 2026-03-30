import { createContext, useState } from "react"

const AuthContext = createContext()

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"))     //localStorage Pour garder l’utilisateur connecté même si la page se recharge.
  const [userId, setUserId] = useState(localStorage.getItem("userId"))

  function login(token, userId) {
    localStorage.setItem("token", token)
    localStorage.setItem("userId", userId)
    setToken(token)
    setUserId(userId)
  }

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    setToken(null)
    setUserId(null)
  }

  return (
    <AuthContext.Provider value={{ token, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }