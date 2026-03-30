function UserHeader({ utilisateur }) {

  if (!utilisateur) {
    return null
  }

  return (
    <section
      style={{
        maxWidth: "1130px",
        margin: "0 auto 60px",
        backgroundColor: "#f6f6f6",
        borderRadius: "16px",
        padding: "36px 54px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "30px"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px"
        }}
      >
        <img
          src="/images/profil.jpg"
          alt="Profil utilisateur"
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
            Membre depuis le 14 juin 2023
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px"
        }}
      >
        <p
          style={{
            color: "#7b7b7b",
            fontSize: "16px"
          }}
        >
          Distance totale parcourue
        </p>

        <div
          style={{
            backgroundColor: "#2338ff",
            color: "#ffffff",
            borderRadius: "12px",
            padding: "20px 24px",
            minWidth: "196px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "14px"
          }}
        >
          <span style={{ fontSize: "26px" }}>✦</span>
          <span style={{ fontSize: "20px", fontWeight: "500" }}>312 km</span>
        </div>
      </div>
    </section>
  )
}

export default UserHeader