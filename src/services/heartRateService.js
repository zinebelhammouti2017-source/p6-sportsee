const utiliserMock = false

async function getHeartRate(token) {
  if (utiliserMock) {
    return []
  }

  const reponse = await fetch(
    "http://localhost:8000/api/user-activity?startWeek=2025-05-28&endWeek=2025-06-25",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  if (!reponse.ok) {
    throw new Error("Erreur lors de la récupération de la fréquence cardiaque")
  }

  const donneesApi = await reponse.json()

  const jours = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
  const ordreSemaine = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]

  const donneesTrieesParDate = [...donneesApi].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  )

  const donneesLimitees = donneesTrieesParDate.slice(-7)

  const donneesFormatees = donneesLimitees.map((session) => {
    const date = new Date(session.date)

    return {
      jour: jours[date.getDay()],
      date: session.date,
      min: session.heartRate.min,
      max: session.heartRate.max,
      moyenne: session.heartRate.average
    }
  })

  const donneesFinales = donneesFormatees.sort((a, b) => {
    return ordreSemaine.indexOf(a.jour) - ordreSemaine.indexOf(b.jour)
  })

  return donneesFinales
}

export { getHeartRate }