import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

function HeartRateChart({ data }) {
  const moyenneGenerale = Math.round(
    data.reduce((total, element) => total + element.moyenne, 0) / data.length
  )

  const premiereDate = new Date(data[0].date)
  const derniereDate = new Date(data[data.length - 1].date)

  const mois = [
    "janv.",
    "févr.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juil.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc."
  ]

  const texteDate = `${premiereDate.getDate()} ${
    mois[premiereDate.getMonth()]
  } - ${derniereDate.getDate()} ${mois[derniereDate.getMonth()]}`

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "24px 28px",
        width: "100%"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "20px"
        }}
      >
        <div>
          <h3 style={{ color: "#ff4d2d", fontSize: "20px", marginBottom: "8px" }}>
            {moyenneGenerale} BPM
          </h3>
          <p style={{ color: "#7b7b7b" }}>
            Fréquence cardiaque moyenne
          </p>
        </div>

        <p style={{ color: "#444" }}>{texteDate}</p>
      </div>

      <div style={{ width: "100%", height: "260px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid vertical={false} stroke="#eeeeee" />

            <XAxis
              dataKey="jour"
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[130, 190]}
              ticks={[130, 145, 160, 175, 190]}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="min"
              fill="#f7b8ac"
              radius={[10, 10, 0, 0]}
              barSize={10}
            />

            <Bar
              dataKey="max"
              fill="#ff4d1f"
              radius={[10, 10, 0, 0]}
              barSize={10}
            />

            <Line
              type="monotone"
              dataKey="moyenne"
              stroke="#3c4dff"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          display: "flex",
          gap: "24px",
          marginTop: "12px",
          fontSize: "14px",
          color: "#666"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#f7b8ac",
              display: "inline-block"
            }}
          ></span>
          <span>Min</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#ff4d1f",
              display: "inline-block"
            }}
          ></span>
          <span>BPM max</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#3c4dff",
              display: "inline-block"
            }}
          ></span>
          <span>Moyenne</span>
        </div>
      </div>
    </div>
  )
}

export default HeartRateChart