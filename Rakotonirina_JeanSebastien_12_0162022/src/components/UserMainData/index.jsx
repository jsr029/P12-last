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
 * @param { Object } props 
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

function UserMainData(props) {
    const USERMAINNAME = props.datas.datas[0].userInfos.firstName
    const USERMAINCAL = props.datas.datas[0].keyData.calorieCount
    const USERMAINPRO = props.datas.datas[0].keyData.proteinCount
    const USERMAINCAR = props.datas.datas[0].keyData.carbohydrateCount
    const USERMAINLIP = props.datas.datas[0].keyData.lipidCount
    /** end Datas.data.datas */

    return (
        <>
            <div className='sportSee-main'>
                <h2><span className='sportSee-main-hello'>Bonjour</span> <span className='sportSee-main-name'>{USERMAINNAME}</span></h2>
                <p>Félicitation ! Vous avez explosé vos objectifs hier <span role='img' aria-label='emoji'>👏</span></p>
                <div className='spotSee-main-bloc'>
                    <div className='sportSee-main-graph'>
                        <GetUserActivityData id={props.datas.datas[0].id} data={props.datas.datas[1]} />
                        <div className='sportSee-main-grapBloc'>
                            <GetUserSessionsData id={props.datas.datas[0].id}  data={props.datas.datas[3]} />
                            <GetUserPerformance  id={props.datas.datas[0].id}  data={props.datas.datas[2]} />
                            <div className='sportSee-score'>
                                <RPieChart scoreUser={props.datas.datas[0]} />
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
    USERMAINNAME : PropTypes.string,
    USERMAINCAL : PropTypes.number,
    USERMAINCAR : PropTypes.number,
    USERMAINLIP : PropTypes.number,
    USERMAINPRO : PropTypes.number
}
export default UserMainData