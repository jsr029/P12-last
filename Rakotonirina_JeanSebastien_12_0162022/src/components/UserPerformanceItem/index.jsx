import React from 'react' 
import RRadarChart from '../RRadarChart'

/**
 * Transmits user performance data to RRadarChart component
 * @param { Object } userId user id
 * @returns { Component } RRadarChart with userId, kind, perfData as props
 */
function UserPerformanceItem({ userId, kind, perfData }){
    let perfValue = []
    let perfKind = []
    for(let i=0; i < perfData.length; i++){
        perfValue.push(perfData[i].value)
        perfKind.push(kind[perfData[i].kind])
    }
      return (
        <>
            <div className='sportSee-performance-item'>
                <RRadarChart userId={userId} kind={kind} perfData={perfData} />
            </div>
        </>    
    )
}

export default UserPerformanceItem