import React from 'react'
import UsePerformanceData from '../components/UserPerformanceData'
import PropTypes from 'prop-types'
/**
 * 
 * Gets User Performance data
 * @param { object } props user props id 
 * @returns { Component } UserPerformanceData in which we passed props data.data as perfData
 * and data as performance 
 */

function GetUserPerformance(props) {
	console.log(props)
	return (
		<React.Fragment>
			<UsePerformanceData perfData={props.data.data} performance={props.data}/>
		</React.Fragment>
	)
};

export default GetUserPerformance