import React from 'react'
import UserSessionsData from '../components/UserSessionsData'
import PropTypes from 'prop-types'
/**
 * Gets User Average-Sessions data 
 * Uses UserSessionsData component in which props data was passed
 * 
 * @param { Object } props.data props data and userId, it is used as parameter to retrieve data  
 * by an endPoints url 
 * @returns { component } UserSessionsData
 */
function GetUserSessionsData(props) {
	return (
		<React.Fragment>
			<UserSessionsData data={props.data}/>
		</React.Fragment>
	)
};
GetUserSessionsData.propTypes = {
	/**
	 * props is an object of {userId, data{}}
	 */
	data : PropTypes.object.isRequired
}
export default GetUserSessionsData