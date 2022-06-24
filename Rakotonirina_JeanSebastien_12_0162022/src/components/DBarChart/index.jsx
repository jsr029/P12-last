import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";


/**
 * Gets name, kg, calories user datas
 * Uses BarChart component from recharts library to display bar graph
 * @param { Object } sessions
 * {
    "sessions": [
        {
            "day": "2020-07-01",
            "kilogram": 80,
            "calories": 240
        },
        etc..
    ]
}
 * @returns { Html } displays Bar Chart graph
 */
function DBarChart(props) {
   let data = []
  for(let i=0; i < props.sessions.length; i++){
      data.push({
        name: props.sessions[i].day,
        kg: props.sessions[i].kilogram,
        cal: props.sessions[i].calories
      })
  }

  return (
    <>
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height={320}>
          <BarChart
          data={data}
            margin={{
              top: -24,
              right: 29,
              left: 32,
              bottom: 23
            }}
          >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip wrapperStyle={{ fontFamily: 'Roboto, sans-serif' }} />
      <Legend         
        wrapperStyle={{ fontFamily: 'Roboto, sans-serif' }}
        verticalAlign="top"
        align="right"
        height={12}
      />
      <Bar dataKey="kg" barSize={10} fill="#282D30" />
      <Bar dataKey="cal" barSize={10} fill="#FF0101" />
    </BarChart>
    </ResponsiveContainer>
    </>
  );
}
export default DBarChart;