import React from 'react'
import RLineChart from '../RLineChart'
import PropTypes from 'prop-types'
/**
 * Transmits props data as sessions to RlineChart component for displaying Line Chart
 * @param { Object } props.data an Object of {userId, sessions}
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
UserSessionsData.propTypes = {
    /**
     * data is an object of {userId, sessions{}}
     */
    data : PropTypes.object.isRequired
}
export default UserSessionsData