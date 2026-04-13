import { userData } from "../mocks/userData"
import { gererErreurAuthentification } from "./apiUtils"

const utiliserMock = false

async function getUser(token) {
  if (utiliserMock) {
    return userData
  }

  const reponse = await fetch("http://localhost:8000/api/user-info", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })


  if (gererErreurAuthentification(reponse)) {
    return
  }

  if (!reponse.ok) {
    throw new Error("Erreur lors de la récupération utilisateur")
  }

  const donneesApi = await reponse.json()

  return {
    userInfos: {
      firstName: donneesApi.profile.firstName,
      lastName: donneesApi.profile.lastName,
      age: donneesApi.profile.age,
      gender: donneesApi.profile.gender || null,
      height: donneesApi.profile.height,
      weight: donneesApi.profile.weight,
      profilePicture: donneesApi.profile.profilePicture,
      createdAt: donneesApi.profile.createdAt
    },
    statistics: {
      totalDistance: Number(donneesApi.statistics.totalDistance),
      totalSessions: donneesApi.statistics.totalSessions,
      totalDuration: donneesApi.statistics.totalDuration
    }
  }
}


export { getUser }
