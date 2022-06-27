import React from 'react'
import UserActivityData from '../components/UserActivityData'
import PropTypes from 'prop-types'
/**
 * Gets user activity data 
 * @param { Object } data  
 * 
 * @returns { Component } UserActivityData with data.data as props data
 */
function GetUserActivityData({ data }) {
	return (
		<React.Fragment>
			<UserActivityData data={data} />
		</React.Fragment>
	)
};
GetUserActivityData.propTypes = {
	/**
	 * data is an object of {userId, sessions[{day},{kilogram},{calories}]}
	 */
	
    data: PropTypes.object.isRequired
}

export default GetUserActivityData