function gererErreurAuthentification(reponse) {
  if (reponse.status === 401 || reponse.status === 403) {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    window.location.href = "/"
    return true
  }

  return false
}

export { gererErreurAuthentification }