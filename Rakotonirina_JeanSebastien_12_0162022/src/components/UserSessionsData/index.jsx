import React from 'react'
import RLineChart from '../RLineChart'

/**
 * Transmits props data as sessions to RlineChart component for displaying Line Chart
 * @param { Object } data userId, sessions[{day, sessionLength}]
 * @return { Component } RLineChart
 */
function UserSessionsData(props) {
     return (
        <>
                 <div className='sportSee-sessions'>
                    <RLineChart sessions={props.data.sessions} />
                </div>
         </>
    )
};

export default UserSessionsData