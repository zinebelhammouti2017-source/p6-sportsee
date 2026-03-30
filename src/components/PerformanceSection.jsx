import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
import DistanceChart from "../charts/DistanceChart"
import HeartRateChart from "../charts/HeartRateChart"
import { getActivity } from "../services/activityService"
import { getHeartRate } from "../services/heartRateService"

function PerformanceSection() {
  const [activite, setActivite] = useState(null)
  const [frequenceCardiaque, setFrequenceCardiaque] = useState(null)
  const [erreur, setErreur] = useState(null)

  const { token } = useAuth()

  useEffect(() => {
    async function fetchPerformanceData() {
      try {
        const donneesActivite = await getActivity(token)
        const donneesFrequenceCardiaque = await getHeartRate(token)

        setActivite(donneesActivite)
        setFrequenceCardiaque(donneesFrequenceCardiaque)
      } catch (error) {
        console.log("ERREUR :", error)
        setErreur("Impossible de charger les données de performance.")
      }
    }

    if (token) {
      fetchPerformanceData()
    }
  }, [token])

  if (erreur) {
    return <p>{erreur}</p>
  }

  if (!activite || !frequenceCardiaque) {
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
      <h2 style={{ marginBottom: "30px" }}>Vos dernières performances</h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "stretch"
        }}
      >
        <div style={{ flex: 0.9 }}>
          <DistanceChart data={activite} />
        </div>

        <div style={{ flex: 1.1 }}>
          <HeartRateChart data={frequenceCardiaque} />
        </div>
      </div>
    </section>
  )
}

export default PerformanceSection