function UserHeader({ utilisateur, totalDistance }) {
  if (!utilisateur) {
    return null
  }

  const dateInscription = new Date(utilisateur.userInfos.createdAt)

  const mois = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ]

  const dateFormatee = `${dateInscription.getDate()} ${
    mois[dateInscription.getMonth()]
  } ${dateInscription.getFullYear()}`

  return (
    <section className="user-header">
      <div className="user-header-left">
        <div className="user-header-photo-box">
          <img
            src={utilisateur.userInfos.profilePicture}
            alt={`Profil de ${utilisateur.userInfos.firstName}`}
            className="user-header-photo"
          />
        </div>

        <div className="user-header-text">
          <h1 className="user-header-name">
            {utilisateur.userInfos.firstName} {utilisateur.userInfos.lastName}
          </h1>

          <p className="user-header-date">
            Membre depuis le {dateFormatee}
          </p>
        </div>
      </div>

      <div className="user-header-right">
        <p className="user-header-label">Distance totale parcourue</p>

        <div className="user-header-distance-box">
          <span className="user-header-distance-icon">✦</span>
          <span className="user-header-distance-value">{totalDistance} km</span>
        </div>
      </div>
    </section>
  )
}

export default UserHeader