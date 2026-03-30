import { PieChart, Pie, Cell } from "recharts"

const couleurs = ["#1f2fff", "#bfc5ff"]

function GoalChart({ data }) {
  const realise = data[0].value
  const restant = data[1].value
  const total = realise + restant

  return (
    <div>
      <h3 style={{ marginBottom: "8px" }}>
        <span style={{ color: "#1f2fff", fontWeight: "600" }}>x{realise}</span>{" "}
        <span style={{ color: "#bfc5ff" }}>sur objectif de {total}</span>
      </h3>

      <p style={{ color: "#7b7b7b", marginBottom: "20px" }}>
        Courses hebdomadaire réalisées
      </p>

      <div style={{ width: "220px", margin: "0 auto" }}>
        <PieChart width={220} height={220}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={55}
            startAngle={180}
            endAngle={-180}
          >
            {data.map((element, index) => (
              <Cell key={element.name} fill={couleurs[index]} />
            ))}
          </Pie>
        </PieChart>

        {/* Légendes */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "-10px",
            fontSize: "14px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#1f2fff"
              }}
            ></div>
            <p>{realise} réalisées</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#bfc5ff"
              }}
            ></div>
            <p>{restant} restants</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoalChart