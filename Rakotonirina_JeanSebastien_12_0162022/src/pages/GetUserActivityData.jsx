import React from 'react'
import UserActivityData from '../components/UserActivityData'
import PropTypes from 'prop-types'
/**
 * Gets user activity data 
 * @param { number } props.id  
 * props user id
 * @returns { Component } UserActivityData with data.data as props data
 */
function GetUserActivityData(props) {
	return (
		<React.Fragment>
			<UserActivityData data={props.data} id={props.data.userId}/>
		</React.Fragment>
	)
};
GetUserActivityData.propTypes = {
    id : PropTypes.number
}

export default GetUserActivityData