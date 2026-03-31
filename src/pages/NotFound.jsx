import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

function NotFound() {
  const { token } = useAuth()

  return (
    <main
      className="page"
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "40px"
      }}
    >
      <section
        className="carte"
        style={{
          maxWidth: "520px",
          width: "100%",
          textAlign: "center",
          borderRadius: "24px",
          padding: "50px 40px",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)"
        }}
      >
        <div
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#2338ff",
            marginBottom: "30px"
          }}
        >
          <span style={{ color: "#ff5a3c" }}>≋</span> SPORTSEE
        </div>

        <h1
          style={{
            fontSize: "72px",
            color: "#2338ff",
            marginBottom: "10px"
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "28px",
            marginBottom: "16px"
          }}
        >
          Page introuvable
        </h2>

        <p
          style={{
            color: "#7b7b7b",
            marginBottom: "30px"
          }}
        >
          Oups, la page que vous cherchez n’existe pas ou n’est plus disponible.
        </p>

        <Link
          to={token ? "/dashboard" : "/"}
          style={{
            display: "inline-block",
            backgroundColor: "#2338ff",
            color: "#ffffff",
            textDecoration: "none",
            padding: "14px 24px",
            borderRadius: "12px",
            fontWeight: "500"
          }}
        >
          {token ? "Retour au tableau de bord" : "Retour à la connexion"}
        </Link>
      </section>
    </main>
  )
}

export default NotFound