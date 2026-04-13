import { gererErreurAuthentification } from "./apiUtils"

const utiliserMock = false

function recupererIndexJourLundiPremier(dateTexte) {
  const date = new Date(dateTexte)

  return (date.getDay() + 6) % 7
}

function calculerMoyenne(tableau) {
  if (tableau.length === 0) {
    return null
  }

  const total = tableau.reduce((somme, valeur) => somme + valeur, 0)

  return Math.round(total / tableau.length)
}

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

   if (gererErreurAuthentification(reponse)) {
    return
  }

  if (!reponse.ok) {
    throw new Error("Erreur lors de la récupération de la fréquence cardiaque")
  }

  const donneesApi = await reponse.json()

  const semaine = [
    { jour: "Lun", minValeurs: [], maxValeurs: [], moyenneValeurs: [] },
    { jour: "Mar", minValeurs: [], maxValeurs: [], moyenneValeurs: [] },
    { jour: "Mer", minValeurs: [], maxValeurs: [], moyenneValeurs: [] },
    { jour: "Jeu", minValeurs: [], maxValeurs: [], moyenneValeurs: [] },
    { jour: "Ven", minValeurs: [], maxValeurs: [], moyenneValeurs: [] },
    { jour: "Sam", minValeurs: [], maxValeurs: [], moyenneValeurs: [] },
    { jour: "Dim", minValeurs: [], maxValeurs: [], moyenneValeurs: [] }
  ]

  donneesApi.forEach((session) => {
    const indexJour = recupererIndexJourLundiPremier(session.date)

    semaine[indexJour].minValeurs.push(session.heartRate.min)
    semaine[indexJour].maxValeurs.push(session.heartRate.max)
    semaine[indexJour].moyenneValeurs.push(session.heartRate.average)
  })

  const donneesFinales = semaine.map((jour) => {
    return {
      jour: jour.jour,
      min: calculerMoyenne(jour.minValeurs),
      max: calculerMoyenne(jour.maxValeurs),
      moyenne: calculerMoyenne(jour.moyenneValeurs)
    }
  })

  return {
  donnees: donneesFinales,
  startDate: "2025-05-28",
  endDate: "2025-06-04"
}
}

export { getHeartRate }