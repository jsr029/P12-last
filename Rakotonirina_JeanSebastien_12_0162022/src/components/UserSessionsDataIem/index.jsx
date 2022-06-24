import React from 'react'
import { Line } from 'react-chartjs-2'


/**
 * Transmits user average-sessions data to Line component
 * @param { Numnber } userId props user id 
 * @param { Object } sessions props average-sessions
 * @returns { Component } Line component from recharts library
 */
function UserSessionsDataItem({ userId, sessions }){
    let averageSessionDay = []
    let averageSessionLength = []
    for(let i=0; i < sessions.length; i++){
        averageSessionDay.push(sessions[i].day)
        averageSessionLength.push(sessions[i].sessionLength)
    }
    const data = {
        labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
        datasets:[
            {
                label : "Durée Moyenne des Sessions",
                data: averageSessionLength,
                backgroundColor:['#FF0101']
            }
        ]
    }
    return (
        <>
                <div className={'sportSee-sessions-item'}>
                    <Line data={data} />
                </div>
         </>    
    )
}

export default UserSessionsDataItem