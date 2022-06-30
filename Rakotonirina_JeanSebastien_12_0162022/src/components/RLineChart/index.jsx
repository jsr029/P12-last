import React from 'react'
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis
} from 'recharts';
import PropTypes from 'prop-types'
  
/**
 * Displays Line Chart graph
 * @param { Object } sessions props sessions bringing data we need to build Line Chart graph 
 * @returns { Component } LineChart from recharts library
 */
function RLineChart({ sessions }) {
    let pdata = []
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    for(let i=0; i < sessions.length; i++){
        pdata.push({
            name: days[i],
            min: sessions[i].sessionLength
        })
    }
    return (
        <>
            <h2 className="text-sessions">
                Duréee Moyenne <br/>des Sessions
            </h2>
            <ResponsiveContainer width="95%" height={300}>
                <LineChart data={pdata} 
               height={340} 
                margin={{ top:0, bottom:0, right: 5, left:-55 }} 
                stroke="white"
                >
                    <XAxis 
                        dataKey="name" 
                        axisLine={false}
                        interval={'preserveStartEnd'} 
                        stroke="white"
                        />
                    <YAxis dataKey="min" domain={[0, 100]} xd={25} axisLine={false} tick={false} />
                    <Legend />
                    <Tooltip />
                    <Line type="monotone" dataKey="min"
                        stroke="#FFF" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
RLineChart.propTypes = {
    /**
     * sessions is an array of [day, sessionLength]
     * its datas are used to display the Line Chart Graph
     */
    sessions: PropTypes.arrayOf(PropTypes.shape({
        /**day is number */
        day: PropTypes.number.isRequired,
        /** sessionLength is number */
        sessionLength: PropTypes.number.isRequired
    })).isRequired,
}
export default RLineChart