import React from 'react'
import DBarChart from '../DBarChart'
import PropTypes from 'prop-types'

/**
 * Displays datas userId and sessions for DBarChart component
 * @param { Number } userId props user id
 * @param { Array } sessions props user sessions
 * @return { Component } DBarChart with sessions as props sessions
 */
function UserActivityDataItem({ userId, sessions }){
     let sessionsDay = []
    let sessionsKg = []
    let sessionsCal = []    

    for(let i=0; i < sessions.length; i++){
        sessionsDay.push(sessions[i].day)
        sessionsKg.push(sessions[i].kilogram)
        sessionsCal.push(sessions[i].calories)
    }
    
    return (
        <>
            <div className='sportSee-activity-item'>
                <DBarChart sessions={sessions} />
            </div>
         </>    
    )
}
UserActivityDataItem.propTypes = {
    /**
     * sessions array of [day, kilogram, calories] all required
     */
    sessions : PropTypes.arrayOf(PropTypes.shape({
        /** day is date */
        day: PropTypes.string.isRequired,
        /** kilogram is number */
        kilogram: PropTypes.number.isRequired,
        /** calories us number */
        calories: PropTypes.number.isRequired
    })).isRequired
}
export default UserActivityDataItem