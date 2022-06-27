import React from 'react'
import { Radar, RadarChart, PolarGrid, 
        PolarAngleAxis, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

/**
 * Displays Radar graph using recharts library
 * @param { Object } perfData [{value:110, kind:6}, {etc..}]
 * @returns { Component } RadarChart from recharts library
 */
function RRadarChart({ perfData }) {   
           // Sample data
    let data = []
    const frenchKind = {
        6:'Intensité',
        5:'Vitesse',
        4:'Force',
        3:'Endurance',
        2:'Energie',
        1:'Cardio',
    }
    perfData.sort((a, b) => b.kind - a.kind)
    for(let i=0; i < perfData.length; i++){
        data.push({
            name: frenchKind[perfData[i].kind],
            min: perfData[i].value
        })
    }
      
        return (
            <ResponsiveContainer width="100%" height={300}>
            <RadarChart 
                outerRadius="60%" data={data}
                >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" stroke="white" />
                <Legend />
                <Radar dataKey="min" stroke="#FF0101" 
                    fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
            </ResponsiveContainer>
        )
    }
RRadarChart.propTypes = {
    /**
     * perfData is an Array of [value, kind] all required
     */
    perfData : PropTypes.arrayOf(PropTypes.shape({
        /** value is number */
        value: PropTypes.number.isRequired,
        /**kind is number */
        kind: PropTypes.number.isRequired
    })).isRequired
}
export default RRadarChart;