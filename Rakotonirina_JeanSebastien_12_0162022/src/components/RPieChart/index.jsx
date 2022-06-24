import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Cell} from 'recharts'

/**
 * Retrieves user datas for displaying Pie Chart
 * @param { Object } scoreUser {id:, userInfos{firstName}, score, keyData{caloriesCount, etc..}}
 * @returns { Component } PieChart component from Recharts library
 */
const RPieChart = ({ scoreUser }) => { 
        const score = scoreUser.score * 100
        // Sample data
        const data = [
        {name: '% de votre objectif', score: score},
        {name: '100% de votre objectif', score: 75-score}
        ]
        const COLORS = [
                '#FF0000',
                '#FFF'
        ]
        
        return (
                <>
                <h2 className='sportSee-pie'><span className='sportSee-pie-scoreTitle'>{score}%</span> 
                <br /> <span className="sportSee-pie-scoreText">de votre <br /> objectif</span></h2>
                <ResponsiveContainer width="100%" height={300}>
                <PieChart width={340} height={340}>
                        <Pie 
                        data={data} 
                        dataKey="score" 
                        outerRadius={100} 
                        innerRadius={90} 
                        startAngle={90}
                         >
{
          	data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
          }
                        </Pie>
                </PieChart>
                </ResponsiveContainer>
                </>
        )
}

export default RPieChart;