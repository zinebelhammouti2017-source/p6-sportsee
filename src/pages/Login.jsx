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
      console.log(donneesUtilisateur)

      login(donneesUtilisateur.token, donneesUtilisateur.userId)
      navigate("/dashboard")
    } catch {
      setErreur("Connexion impossible. Vérifiez vos identifiants.")
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        backgroundColor: "#ffffff"
      }}
    >
      <section
        style={{
          width: "44%",
          minWidth: "520px",
          backgroundColor: "#f3f4fc",
          padding: "48px 56px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start"
        }}
      >
        <div
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#2338ff",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "60px"
          }}
        >
          <span style={{ color: "#ff5a3c" }}>≋</span>
          <span>SPORTSEE</span>
        </div>

        <div
          style={{
            maxWidth: "380px",
            backgroundColor: "#ffffff",
            borderRadius: "28px",
            padding: "32px",
            boxSizing: "border-box"
          }}
        >
          <h1
            style={{
              color: "#1f2fff",
              fontSize: "28px",
              lineHeight: "1.2",
              fontWeight: "700",
              marginBottom: "28px"
            }}
          >
            Transformez
            <br />
            vos stats en résultats
          </h1>

          <h2
            style={{
              fontSize: "20px",
              fontWeight: "500",
              color: "#111111",
              marginBottom: "24px"
            }}
          >
            Se connecter
          </h2>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="username"
              style={{
                display: "block",
                fontSize: "14px",
                color: "#7b7b7b",
                marginBottom: "8px"
              }}
            >
              Nom d’utilisateur
            </label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "12px",
                border: "1px solid #d4d4d4",
                padding: "0 16px",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
                marginBottom: "18px"
              }}
            />

            <label
              htmlFor="password"
              style={{
                display: "block",
                fontSize: "14px",
                color: "#7b7b7b",
                marginBottom: "8px"
              }}
            >
              Mot de passe
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "12px",
                border: "1px solid #d4d4d4",
                padding: "0 16px",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
                marginBottom: "24px"
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                height: "48px",
                border: "none",
                borderRadius: "12px",
                backgroundColor: "#1f2fff",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
                marginBottom: "20px"
              }}
            >
              Se connecter
            </button>
          </form>

          {erreur && (
            <p
              style={{
                fontSize: "14px",
                color: "#d62828",
                marginBottom: "16px"
              }}
            >
              {erreur}
            </p>
          )}

          <p
            style={{
              fontSize: "14px",
              color: "#111111",
              margin: "0"
            }}
          >
            Mot de passe oublié ?
          </p>
        </div>
      </section>

      <section
        style={{
          width: "56%",
          position: "relative",
          backgroundImage: 'url("/images/marc.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "30px",
            bottom: "28px",
            backgroundColor: "#ffffff",
            borderRadius: "26px",
            padding: "18px 22px",
            maxWidth: "290px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)"
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#1f2fff",
              fontSize: "14px",
              lineHeight: "1.4"
            }}
          >
            Analysez vos performances en un clin d'œil, suivez vos progrès et
            atteignez vos objectifs.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Login