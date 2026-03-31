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
    <section
      style={{
        maxWidth: "1130px",
        margin: "0 auto 30px",
        backgroundColor: "#f6f6f6",
        borderRadius: "16px",
        padding: "36px 54px",
        display: "flex",
        alignItems: "center",
        gap: "30px"
      }}
    >
      <img
        src={utilisateur.userInfos.profilePicture}
        alt={`Profil de ${utilisateur.userInfos.firstName}`}
        style={{
          width: "112px",
          height: "112px",
          objectFit: "cover",
          borderRadius: "12px"
        }}
      />

      <div>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "500",
            marginBottom: "10px",
            color: "#111111"
          }}
        >
          {utilisateur.userInfos.firstName} {utilisateur.userInfos.lastName}
        </h1>

        <p
          style={{
            color: "#7b7b7b",
            fontSize: "16px"
          }}
        >
          Membre depuis le {dateFormatee}
        </p>
      </div>
    </section>
  )
}

export default ProfileHeader