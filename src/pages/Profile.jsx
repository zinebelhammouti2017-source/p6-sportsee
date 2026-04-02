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
        <div className="container">
          <div className="profil-page">
            <div className="profil-colonne-gauche">
              <ProfileHeader utilisateur={utilisateur} />

              <div className="carte profil-carte-infos">
                <h2 className="titre-section">Votre profil</h2>
                <div className="ligne-separation"></div>

                <div className="profil-infos">
                  <p className="profil-item">Âge : {utilisateur.userInfos.age}</p>
                  <p className="profil-item">
                    Genre : {utilisateur.userInfos.gender || "non renseigné"}
                  </p>
                  <p className="profil-item">
                    Taille : {utilisateur.userInfos.height} cm
                  </p>
                  <p className="profil-item">
                    Poids : {utilisateur.userInfos.weight} kg
                  </p>
                </div>
              </div>
            </div>

            <div className="profil-colonne-droite">
              <div className="profil-stats">
                <h2 className="titre-section titre-section-stats">
                  Vos statistiques :
                </h2>

                <p className="sous-texte">
                  depuis le {formaterDateDepuis(utilisateur.userInfos.createdAt)}
                </p>

                <div className="profil-stats-grille">
                  <div className="carte-stat">
                    <p className="carte-stat-label">Temps total couru</p>
                    <h3 className="carte-stat-valeur">
                      {formaterDuree(statistiquesProfil.totalDuration)}
                    </h3>
                  </div>

                  <div className="carte-stat">
                    <p className="carte-stat-label">Calories brûlées</p>
                    <h3 className="carte-stat-valeur">
                      {statistiquesProfil.totalCalories} cal
                    </h3>
                  </div>

                  <div className="carte-stat">
                    <p className="carte-stat-label">Distance totale parcourue</p>
                    <h3 className="carte-stat-valeur">
                      {statistiquesProfil.totalDistance} km
                    </h3>
                  </div>

                  <div className="carte-stat">
                    <p className="carte-stat-label">Nombre de jours de repos</p>
                    <h3 className="carte-stat-valeur">
                      {statistiquesProfil.joursDeRepos} jours
                    </h3>
                  </div>

                  <div className="carte-stat">
                    <p className="carte-stat-label">Nombre de sessions</p>
                    <h3 className="carte-stat-valeur">
                      {statistiquesProfil.totalSessions} séances
                    </h3>
                  </div>
                </div>
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