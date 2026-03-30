import { useEffect, useState } from "react"
import TopNav from "../components/TopNav"
import UserHeader from "../components/UserHeader"
import PerformanceSection from "../components/PerformanceSection"
import WeeklySection from "../components/WeeklySection"
import useAuth from "../hooks/useAuth"
import { getUser } from "../services/userService"

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
      <main style={{ padding: "40px 0 80px" }}>
        <TopNav />
        <p>{erreur}</p>
      </main>
    )
  }

  if (!utilisateur) {
    return (
      <main style={{ padding: "40px 0 80px" }}>
        <TopNav />
        <p>Chargement...</p>
      </main>
    )
  }

  return (
    <main style={{ padding: "40px 0 80px" }}>
      <TopNav />
      <UserHeader utilisateur={utilisateur} />
      <PerformanceSection />
      <WeeklySection />
    </main>
  )
}

export default Dashboard