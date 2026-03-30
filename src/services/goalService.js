import { goalData } from "../mocks/goalData"

const utiliserMock = true

async function getGoal() {
  if (utiliserMock) {
    return goalData
  }

  throw new Error("Aucune route API goal disponible pour le moment")
}

export { getGoal }