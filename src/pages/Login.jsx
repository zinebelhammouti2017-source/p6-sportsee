import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { connecterUtilisateur } from "../services/authService"

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [erreur, setErreur] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setErreur(null)

    try {
      const donneesUtilisateur = await connecterUtilisateur(username, password)

      login(donneesUtilisateur.token, donneesUtilisateur.userId)
      navigate("/dashboard")
    } catch {
      setErreur("Connexion impossible. Vérifiez vos identifiants.")
    }
  }

  return (
    <main className="login-page">
      <section className="login-left">
        <div className="login-logo">
          <span className="login-logo-icon">≋</span>
          <span>SPORTSEE</span>
        </div>

        <div className="login-card">
          <h1 className="login-title">
            Transformez
            <br />
            vos stats en résultats
          </h1>

          <h2 className="login-subtitle">Se connecter</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="login-label">
              Nom d’utilisateur
            </label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />

            <label htmlFor="password" className="login-label">
              Mot de passe
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input login-input-password"
            />

            <button type="submit" className="login-button">
              Se connecter
            </button>
          </form>

          {erreur && <p className="login-error">{erreur}</p>}

          <p className="login-forgot">Mot de passe oublié ?</p>
        </div>
      </section>

      <section className="login-right">
        <div className="login-message-box">
          <p className="login-message-text">
            Analysez vos performances en un clin d'œil, suivez vos progrès et
            atteignez vos objectifs.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Login