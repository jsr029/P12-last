import React from 'react'
import UsePerformanceData from '../components/UserPerformanceData'
import PropTypes from 'prop-types'
/**
 * 
 * Gets User Performance data
 * @param { object } props.data props data is {userId, kind{}, datas[]}
 * @returns { Component } UserPerformanceData in which we passed props data.data as perfData
 * and data as performance 
 */

function GetUserPerformance(props) {
	return (
		<React.Fragment>
			<UsePerformanceData perfData={props.data.data} performance={props.data}/>
		</React.Fragment>
	)
};
GetUserPerformance.propTypes = {
	/**
	 * data is an object of {userId, kind{}, datas[]}
	 */
	data: PropTypes.object.isRequired
}
export default GetUserPerformance