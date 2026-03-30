import { activityData } from "../mocks/activityData"

const utiliserMock = false

async function getActivity(token) {
  if (utiliserMock) {
    return activityData
  }

  const reponse = await fetch(
    "http://localhost:8000/api/user-activity?startWeek=2025-06-01&endWeek=2025-06-30",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  if (!reponse.ok) {
    throw new Error("Erreur lors de la récupération de l'activité")
  }

  const donneesApi = await reponse.json()

  const tailleGroupe = Math.ceil(donneesApi.length / 4)

  const groupes = []

  for (let i = 0; i < donneesApi.length; i += tailleGroupe) {
    groupes.push(donneesApi.slice(i, i + tailleGroupe))
  }

  const activite = groupes.map((groupe, index) => {
    const totalDistance = groupe.reduce((total, session) => {
      return total + session.distance
    }, 0)

    return {
      semaine: `S${index + 1}`,
      km: Number(totalDistance.toFixed(1))
    }
  })

  return activite
}

async function getWeeklyStats(token) {
  if (utiliserMock) {
    return {
      dureeTotale: 140,
      distanceTotale: 21.7
    }
  }

  const reponse = await fetch(
    "http://localhost:8000/api/user-activity?startWeek=2025-06-23&endWeek=2025-06-30",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  if (!reponse.ok) {
    throw new Error("Erreur lors de la récupération des statistiques hebdomadaires")
  }

  const donneesApi = await reponse.json()

  const dureeTotale = donneesApi.reduce((total, session) => {
    return total + session.duration
  }, 0)

  const distanceTotale = donneesApi.reduce((total, session) => {
    return total + session.distance
  }, 0)

  return {
    dureeTotale: dureeTotale,
    distanceTotale: Number(distanceTotale.toFixed(1))
  }
}

export { getActivity, getWeeklyStats }