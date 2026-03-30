import { useEffect, useState } from "react"
import GoalChart from "../charts/GoalChart"
import { getGoal } from "../services/goalService"
import useAuth from "../hooks/useAuth"

function WeeklySection() {
  const [objectif, setObjectif] = useState(null)
  const [erreur, setErreur] = useState(null)

  const { userId } = useAuth()

  useEffect(() => {
    async function fetchGoal() {
      try {
        const donneesObjectif = await getGoal(userId)
        setObjectif(donneesObjectif)
      } catch {
        setErreur("Impossible de charger les données hebdomadaires.")
      }
    }

    if (userId) {
      fetchGoal()
    }
  }, [userId])

  if (erreur) {
    return <p>{erreur}</p>
  }

  if (!objectif) {
    return <p>Chargement...</p>
  }

  return (
    <section
      style={{
        marginTop: "60px",
        maxWidth: "1130px",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <h2 style={{ marginBottom: "8px" }}>Cette semaine</h2>
      <p style={{ color: "#7b7b7b" }}>Du 23/06/2025 au 30/06/2025</p>

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "30px",
          alignItems: "stretch"
        }}
      >
        <div
          style={{
            width: "485px",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            padding: "30px"
          }}
        >
          <GoalChart data={objectif} />
        </div>

        <div
          style={{
            width: "355px",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "28px 32px",
              minHeight: "128px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <p style={{ color: "#7b7b7b", marginBottom: "18px", fontSize: "16px" }}>
              Durée d’activité
            </p>
            <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#2338ff" }}>
              140 <span style={{ color: "#bfc5ff", fontWeight: "400" }}>minutes</span>
            </h3>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "28px 32px",
              minHeight: "128px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <p style={{ color: "#7b7b7b", marginBottom: "18px", fontSize: "16px" }}>
              Distance
            </p>
            <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#ff5a3c" }}>
              21.7 <span style={{ color: "#f3b8ab", fontWeight: "400" }}>kilomètres</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeeklySection