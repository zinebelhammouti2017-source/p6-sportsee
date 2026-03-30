import { goalData } from "../mocks/goalData"

const utiliserMock = true

async function getGoal(userId) {
  if (utiliserMock) {
    // ici on pourrait filtrer selon userId plus tard
    return goalData
  }

  throw new Error("Aucune route API goal disponible pour le moment")
}

export { getGoal }