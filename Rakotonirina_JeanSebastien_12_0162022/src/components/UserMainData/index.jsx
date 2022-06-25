import React from 'react'
import GetUserPerformance from '../../pages/GetUserPerformance'
import GetUserActivityData from '../../pages/GetUserActivityData'
import GetUserSessionsData from '../../pages/GetUserSessionsData'
import RightBloc from '../RightBloc'
import RPieChart from '../RPieChart'

/** 
 * Retrieves all data we need from all endpoints
 * 
 * Uses components :
 * - GetUserActivityData component gets user activity data for Bar chart
 * - GetUserSessionsData  component gets user average sessions data for Line chart
 * - GetUserPerformance component gets user performance data for radar chart
 * - RPieChart component gets user score data for pie chart
 * - RightBloc component gets user data for displaying calories, lipid, protein and glucid counts in the right bloc
 * 
 * @param { Object } props 
 * Object passed in props which contains
 * {
 *  "datas": {
 *      "id": 12,
 *      "userInfos": {
 *          "firstName": "Karl",
 *          "lastName": "Dovineau",
 *          "age": 31
 *      },
 *      "score": 0.12,
 *      "keyData": {
 *          "calorieCount": 1930,
 *          "proteinCount": 155,
 *          "carbohydrateCount": 290,
 *          "lipidCount": 50
 *      }
 *  },
 *  "id": "12"
 *  }
 * @returns { Component } 
 * - GeteUserActivityData
 * - GetUserSessionsData
 * - GetUserPerformance
 * - RPieChart
 * - RightBloc
*/

function UserMainData(props) {
     /**Datas from http://localhost:3000/user/${userId} endpoint */
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

export default UserMainData