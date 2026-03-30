async function connecterUtilisateur(username, password) {
  const reponse = await fetch("http://localhost:8000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })

  if (!reponse.ok) {
    throw new Error("Identifiants incorrects")
  }

  const donnees = await reponse.json()

  return {
    token: donnees.token,
    userId: donnees.userId
  }
}

export { connecterUtilisateur }