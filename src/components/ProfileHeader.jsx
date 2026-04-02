function ProfileHeader({ utilisateur }) {
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
    <section className="profile-header">
      <div className="profile-header-photo-box">
        <img
          src={utilisateur.userInfos.profilePicture}
          alt={`Profil de ${utilisateur.userInfos.firstName}`}
          className="profile-header-photo"
        />
      </div>

      <div className="profile-header-text">
        <h1 className="profile-header-name">
          {utilisateur.userInfos.firstName} {utilisateur.userInfos.lastName}
        </h1>

        <p className="profile-header-date">
          Membre depuis le {dateFormatee}
        </p>
      </div>
    </section>
  )
}

export default ProfileHeader