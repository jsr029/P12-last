import React from 'react'
import GetUserPerformance from '../../pages/GetUserPerformance'
import GetUserActivityData from '../../pages/GetUserActivityData'
import GetUserSessionsData from '../../pages/GetUserSessionsData'
import RightBloc from '../RightBloc'
import RPieChart from '../RPieChart'
import PropTypes from 'prop-types'
/** 
 * Retrieves all data we need from all endpoints
 *  * 
 * @param { Object } datas 
 * {datas:{datas:{id,userInfos{...}, score, keyData:{...}},
 * {userId, sessions:Array(7)},
 * {userId, kind:{...}, data:Array(6)},
 * {userId, sessions:Array(7)}}}
 * @returns { Component } 
 * - GetUserActivityData
 * - GetUserSessionsData
 * - GetUserPerformance
 * - RPieChart
 * - RightBloc
*/

function UserMainData({ datas }) {
     const USERMAINNAME = datas.datas[0].userInfos.firstName
    const USERMAINCAL = datas.datas[0].keyData.calorieCount
    const USERMAINPRO = datas.datas[0].keyData.proteinCount
    const USERMAINCAR = datas.datas[0].keyData.carbohydrateCount
    const USERMAINLIP = datas.datas[0].keyData.lipidCount
    /** end Datas.data.datas */

    return (
        <>
            <div className='sportSee-main'>
                <h2><span className='sportSee-main-hello'>Bonjour</span> <span className='sportSee-main-name'>{USERMAINNAME}</span></h2>
                <p>Félicitation ! Vous avez explosé vos objectifs hier <span role='img' aria-label='emoji'>👏</span></p>
                <div className='spotSee-main-bloc'>
                    <div className='sportSee-main-graph'>
                        <GetUserActivityData data={datas.datas[1]} />
                        <div className='sportSee-main-grapBloc'>
                            <GetUserSessionsData data={datas.datas[3]} />
                            <GetUserPerformance  data={datas.datas[2]} />
                            <div className='sportSee-score'>
                                <RPieChart scoreUser={datas.datas[0]} />
                            </div>
                        </div>
                    </div>
                    <RightBloc 
                        calories={USERMAINCAL}
                        protein={USERMAINPRO}
                        glucid={USERMAINCAR}
                        lipid={USERMAINLIP}
                        />
                </div>
            </div>
         </>
    )
};
UserMainData.propTypes = {
    /**
     * datas is object of {id, userInfos{}, score, keyData}, {userId, sessions[]}, {userId, kind{}, data[]}, {userId, sessions[]} required
     */
    datas : PropTypes.object.isRequired,
    }
export default UserMainData