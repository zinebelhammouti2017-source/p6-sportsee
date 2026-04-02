import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

function TopNav() {
  const { logout } = useAuth()

  return (
    <header className="topnav">
      <div className="logo">
  <div className="logo-barres">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <span className="logo-texte">SPORTSEE</span>
</div>

      <nav className="topnav-menu">
        <Link to="/dashboard" className="topnav-link">
          Tableau de bord
        </Link>

        <Link to="/profile" className="topnav-link">
          Mon profil
        </Link>

        <span className="topnav-separator"></span>

        <button onClick={logout} className="topnav-button">
          Se déconnecter
        </button>
      </nav>
    </header>
  )
}

export default TopNav