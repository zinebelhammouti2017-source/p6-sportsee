import { useEffect, useState } from "react"
import TopNav from "../components/TopNav"
import ProfileHeader from "../components/ProfileHeader"
import useAuth from "../hooks/useAuth"
import { getUser } from "../services/userService"
import { getProfileStats } from "../services/activityService"
import Footer from "../components/Footer"

function Profile() {
  const { token, userId } = useAuth()

  const [utilisateur, setUtilisateur] = useState(null)
  const [statistiquesProfil, setStatistiquesProfil] = useState(null)
  const [erreur, setErreur] = useState(null)

  function formaterDuree(minutesTotales) {
    const heures = Math.floor(minutesTotales / 60)
    const minutes = minutesTotales % 60

    return `${heures} h ${minutes} min`
  }

  function formaterDateDepuis(dateTexte) {
    const date = new Date(dateTexte)

    const mois = [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre"
    ]

    return `${date.getDate()} ${mois[date.getMonth()]} ${date.getFullYear()}`
  }

  useEffect(() => {
    async function chargerDonnees() {
      try {
        const donneesUtilisateur = await getUser(token)
        const donneesProfil = await getProfileStats(
          token,
          donneesUtilisateur.userInfos.createdAt
        )

        setUtilisateur(donneesUtilisateur)
        setStatistiquesProfil(donneesProfil)
      } catch {
        setErreur("Impossible de charger le profil.")
      }
    }

    if (token && userId) {
      chargerDonnees()
    }
  }, [token, userId])

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

  if (!utilisateur || !statistiquesProfil) {
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
        <ProfileHeader utilisateur={utilisateur} />

        <div
          style={{
            maxWidth: "1130px",
            margin: "0 auto",
            display: "flex",
            gap: "30px",
            marginTop: "30px"
          }}
        >
          <div
            className="carte"
            style={{
              width: "50%"
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Votre profil</h2>

            <p>Âge : {utilisateur.userInfos.age}</p>
            <p>Genre : {utilisateur.userInfos.gender || "Non renseigné"}</p>
            <p>Taille : {utilisateur.userInfos.height} cm</p>
            <p>Poids : {utilisateur.userInfos.weight} kg</p>
          </div>

          <div style={{ width: "50%" }}>
            <h2 style={{ marginBottom: "8px" }}>Vos statistiques :</h2>
            <p style={{ color: "#7b7b7b", marginBottom: "20px" }}>
              depuis le {formaterDateDepuis(utilisateur.userInfos.createdAt)}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px"
              }}
            >
              <div className="carte-stat">
                <p>Temps total couru</p>
                <h3>{formaterDuree(statistiquesProfil.totalDuration)}</h3>
              </div>

              <div className="carte-stat">
                <p>Calories brûlées</p>
                <h3>{statistiquesProfil.totalCalories} cal</h3>
              </div>

              <div className="carte-stat">
                <p>Distance totale parcourue</p>
                <h3>{statistiquesProfil.totalDistance} km</h3>
              </div>

              <div className="carte-stat">
                <p>Nombre de jours de repos</p>
                <h3>{statistiquesProfil.joursDeRepos} jours</h3>
              </div>

              <div className="carte-stat">
                <p>Nombre de sessions</p>
                <h3>{statistiquesProfil.totalSessions} séances</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Profile