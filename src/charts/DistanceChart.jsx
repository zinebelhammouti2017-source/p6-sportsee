import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"



function DistanceChart({ data }) {
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
          <h3 style={{ color: "#2338ff", fontSize: "20px", marginBottom: "8px" }}>
            18km en moyenne
          </h3>
          <p style={{ color: "#7b7b7b" }}>
            Total des kilomètres 4 dernières semaines
          </p>
        </div>

        <p style={{ color: "#444" }}>28 mai - 25 juin</p>
      </div>

      <div style={{ width: "100%", height: "260px" }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 10 }}
          >
          

            <CartesianGrid
              vertical={false}
              stroke="#e6e6e6"
              strokeDasharray="3 3"
            />


            <XAxis
              dataKey="semaine"
              tickLine={false}
              axisLine={{ stroke: "#7b7b7b", strokeWidth: 1 }}
              tick={{ fill: "#7b7b7b", fontSize: 14 }}
            />
            

            <YAxis
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tickLine={false}
              axisLine={{ stroke: "#7b7b7b", strokeWidth: 1 }}
              tick={{ fill: "#7b7b7b", fontSize: 14 }}
            />

            <Bar
              dataKey="km"
              fill="#bfc5ff"
              radius={[10, 10, 0, 0]}
              barSize={14}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          marginTop: "12px",
          fontSize: "14px",
          color: "#666"
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#7f8cff",
            display: "inline-block"
          }}
        ></span>
        <span>Km</span>
      </div>
    </div>
  )
}

export default DistanceChart
