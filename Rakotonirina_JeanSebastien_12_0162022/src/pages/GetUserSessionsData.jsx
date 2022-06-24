import React from 'react'
/*import { useFetch } from '../components/utils/Hooks'*/
import UserSessionsData from '../components/UserSessionsData'

/**
 * Gets User Average-Sessions data 
 * Uses UserSessionsData component in which props data was passed
 * 
 * @param { Number } id props user id, it is used as parameter in HandleChange function to retrieve data  
 * by the endPoints url case 2 in the switch function
 * @returns { component } UserSessionsData
 */
function GetUserSessionsData(props) {
	return (
		<React.Fragment>
			<UserSessionsData data={props.data}/>
		</React.Fragment>
	)
};
export default GetUserSessionsData