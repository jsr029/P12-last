import React from 'react'
import RRadarChart from '../RRadarChart'
import PropTypes from 'prop-types'

/**
 * Retrieves user performance data and transmits props to RRadarChart component
 * @param { Object } props props perfdata, props performance 
 * @returns { Component } RRadarChart 
 */
function UserPerformanceData(props) {
    return (
        <>
                <div className='sportSee-performance'>
                    <RRadarChart
                        perfData={props.performance.data}
                    />
                </div>
        </>
    )
};
UserPerformanceData.propTypes = {
    /**
     * perfdata is an array of [value, kind]
     */
    perfData: PropTypes.array.isRequired,
    /**
     * performance is an Object of {userId, kind{}, data[]}
     */
    performance: PropTypes.object.isRequired
}
export default UserPerformanceData