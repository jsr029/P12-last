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
import PropTypes from "prop-types";


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
function DBarChart({ sessions }) {
   let data = []
   let dates = []
   let kgs = []
   let cals = []
  for(let i=0; i < sessions.length; i++){
    dates.push(sessions[i].day)
    kgs.push(sessions[i].kilogram)
    cals.push(sessions[i].calories)
      data.push({
        name: sessions[i].day,
        kg: sessions[i].kilogram,
        cal: sessions[i].calories
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
DBarChart.propTypes = {
  /**
   * data is an object
   */
  data: PropTypes.object,
    /**
   * sessions is an array of day (date string type)
   * kilogram and calories (number type) is required
   */
  sessions : PropTypes.arrayOf(PropTypes.shape({
    /** day is string (date) is required*/
    day: PropTypes.string.isRequired,
    /**kilogram is number is required */
    kilogram: PropTypes.number.isRequired,
    /**calorioes is number is required */
    calories: PropTypes.number.isRequired,
  })).isRequired,

/**
   * dates is an array of dates
   */
  dates: PropTypes.arrayOf(
    PropTypes.instanceOf(Date).isRequired
  ),
  /**
   * kgs is an array of numbers
   */
  kgs: PropTypes.arrayOf(
    PropTypes.instanceOf(Number).isRequired
  ),  
  /**
   * cals is an array of numbers
   */
  cals: PropTypes.arrayOf(
    PropTypes.instanceOf(Number).isRequired
  )
}
export default DBarChart;