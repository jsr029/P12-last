import React from 'react'
import DBarChart from '../DBarChart'

/**
 * Displays datas userId and sessions for DBarChart component
 * @param { Number } userId props user id
 * @param { Object } sessions props user sessions
 * {
    "userId": 12,
    "sessions": [
        {
            "day": "2020-07-01",
            "kilogram": 80,
            "calories": 240
        },
        etc...
    ]
}
 * @return { Component } DBarChart with sessions as props sessions
 */
function UserActivityDataItem(props){
    let sessionsDay = []
    let sessionsKg = []
    let sessionsCal = []    

    for(let i=0; i < props.sessions.length; i++){
        sessionsDay.push(props.sessions[i].day)
        sessionsKg.push(props.sessions[i].kilogram)
        sessionsCal.push(props.sessions[i].calories)
    }
    
    return (
        <>
            <div className='sportSee-activity-item'>
                <DBarChart sessions={props.sessions} />
            </div>
         </>    
    )
}

export default UserActivityDataItem