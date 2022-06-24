import React from 'react'
import RRadarChart from '../RRadarChart'


/**
 * Retrieves user performance data and transmits props to RRadarChart component
 * @param { Object } perfData userId, kind{1:cardio, 2:energy, etc..}, data[value, kind]
 * @param { Object } performance parent Object
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

export default UserPerformanceData