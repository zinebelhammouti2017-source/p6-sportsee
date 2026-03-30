import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

function TopNav() {
  const { logout } = useAuth()

  return (
    <header
      style={{
        maxWidth: "1130px",
        margin: "0 auto 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div
        style={{
          fontSize: "28px",
          fontWeight: "700",
          color: "#2338ff",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <span style={{ color: "#ff5a3c" }}>≋</span>
        <span>SPORTSEE</span>
      </div>

      <nav
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "999px",
          padding: "16px 28px",
          display: "flex",
          alignItems: "center",
          gap: "28px"
        }}
      >
        <Link
          to="/dashboard"
          style={{
            textDecoration: "none",
            color: "#222222",
            fontSize: "16px"
          }}
        >
          Tableau de bord
        </Link>

        <Link
          to="/profile"
          style={{
            textDecoration: "none",
            color: "#222222",
            fontSize: "16px"
          }}
        >
          Mon profil
        </Link>

        <span
          style={{
            width: "1px",
            height: "20px",
            backgroundColor: "#d9d9d9"
          }}
        ></span>

        <button
          onClick={logout}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#2338ff",
            fontSize: "16px",
            fontWeight: "500"
          }}
        >
          Se déconnecter
        </button>
      </nav>
    </header>
  )
}

export default TopNav