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

async function getProfileStats(token, dateInscription) {
  if (utiliserMock) {
    return {
      totalDistance: 312,
      totalSessions: 41,
      totalDuration: 1635,
      totalCalories: 25000,
      joursDeRepos: 9
    }
  }

  const aujourdhui = new Date()
  const dateFin = aujourdhui.toISOString().split("T")[0]

  const reponse = await fetch(
    `http://localhost:8000/api/user-activity?startWeek=${dateInscription}&endWeek=${dateFin}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  if (!reponse.ok) {
    throw new Error("Erreur lors de la récupération des statistiques du profil")
  }

  const donneesApi = await reponse.json()

  const totalDistance = donneesApi.reduce((total, session) => {
    return total + session.distance
  }, 0)

  const totalSessions = donneesApi.length

  const totalDuration = donneesApi.reduce((total, session) => {
    return total + session.duration
  }, 0)

  const totalCalories = donneesApi.reduce((total, session) => {
    return total + session.caloriesBurned
  }, 0)

  const joursAvecActivite = new Set(
    donneesApi.map((session) => session.date)
  ).size

  const debut = new Date(dateInscription)
  const fin = new Date(dateFin)

  const differenceTemps = fin - debut
  const nombreJoursDepuisInscription =
    Math.floor(differenceTemps / (1000 * 60 * 60 * 24)) + 1

  const joursDeRepos = nombreJoursDepuisInscription - joursAvecActivite

  return {
    totalDistance: Number(totalDistance.toFixed(1)),
    totalSessions: totalSessions,
    totalDuration: totalDuration,
    totalCalories: totalCalories,
    joursDeRepos: joursDeRepos
  }
}

export { getActivity, getWeeklyStats, getProfileStats }