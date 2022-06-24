import React from 'react'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(...registerables);

function UserDataItem({ id, userInfos, todayScore, keyData }){
    let score = []
    score.push(todayScore)
    const data = {
        labels: ['Score'],
        datasets:[
            {
                label : score + "% de votre objectif",
                data: score,
                backgroundColor:['#FF0101']
            }
        ]
    }
    const options = {
        maintainRespectRatio:false
    }
    return (
        <>
            <h1><span className='sportSee-item-welcome'>Bonjour</span> <span className='sportSee-item-firstname'>{userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <ul className='sportSee-item'>
                <li className='sportSee-item-todayScore'>
                    <Doughnut data={data} options={options} />
                </li>
                <li className='sportSee-item-calorieCount'>{keyData.calorieCount}</li>
                <li className='sportSee-item-proteineCount'>{keyData.proteinCount}</li>
                <li className='sportSee-item-carbohydrateCount'>{keyData.carbohydrateCount}</li>
                <li className='sportSee-item-lipidCount'>{keyData.lipidCount}</li>
            </ul>
         </>    
    )
}

export default UserDataItem