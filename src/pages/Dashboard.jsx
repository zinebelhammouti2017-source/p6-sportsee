import { useEffect, useState } from "react"
import TopNav from "../components/TopNav"
import UserHeader from "../components/UserHeader"
import PerformanceSection from "../components/PerformanceSection"
import WeeklySection from "../components/WeeklySection"
import useAuth from "../hooks/useAuth"
import { getUser } from "../services/userService"
import Footer from "../components/Footer"

function Dashboard() {
  const { token, userId } = useAuth()

  const [utilisateur, setUtilisateur] = useState(null)
  const [erreur, setErreur] = useState(null)

  useEffect(() => {
    async function chargerUtilisateur() {
      try {
        const donneesUtilisateur = await getUser(token)
        setUtilisateur(donneesUtilisateur)
      } catch {
        setErreur("Impossible de charger les données utilisateur.")
      }
    }

    if (token && userId) {
      chargerUtilisateur()
    }
  }, [userId, token])

  if (erreur) {
    return (
      <main className="page">
        <TopNav />
        <div className="page-content">
          <p style={{ maxWidth: "1130px", margin: "0 auto" }}>{erreur}</p>
        </div>
        <Footer />
      </main>
    )
  }

  if (!utilisateur) {
    return (
      <main className="page">
        <TopNav />
        <div className="page-content">
          <p style={{ maxWidth: "1130px", margin: "0 auto" }}>Chargement...</p>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="page">
      <TopNav />

      <div className="page-content">
        <UserHeader
          utilisateur={utilisateur}
          totalDistance={utilisateur.statistics.totalDistance}
        />
        <PerformanceSection />
        <WeeklySection />
      </div>

      <Footer />
    </main>
  )
}

export default Dashboard