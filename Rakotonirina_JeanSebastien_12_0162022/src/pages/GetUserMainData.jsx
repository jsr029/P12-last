import React from 'react'
import UserMainData from '../components/UserMainData'
import HorizontalMenu from '../components/HorizontalMenu'
import VerticalMenu from '../components/VerticalMenu'
import PropTypes from 'prop-types'

/**
 * Switches between 2 apis : Api data and mocked one 
 * @param { Object } props props.data or props.mockedData
 * 
 * @returns { Component } HorizontalMenu, VerticalMenu, UserMainData with props named datas 
 * which contains props.data or props.mockedData
 */
function GetUserMainData(props) {
	if (!props.mockedData) {
		return (
			<React.Fragment>
				<HorizontalMenu />
				<div className='menu-graph-bloc'>
					<VerticalMenu />
					<UserMainData datas={props.data} />
				</div>
			</React.Fragment>
		)
	}
	if (props.mockedData) {
		return (
			<React.Fragment>
				<HorizontalMenu />
				<div className='menu-graph-bloc'>
					<VerticalMenu />
					<UserMainData datas={props.mockedData} />
				</div>
			</React.Fragment>
		)
	}
};
GetUserMainData.proptypes = {
	/**props is an object of an Objet and an array */
	props : PropTypes.objectOf({
		mockedData : PropTypes.object,
		isPending : PropTypes.bool,
		error2: PropTypes.bool,
		datas: PropTypes.arrayOf(PropTypes.object),
	}).isRequired
}
export default GetUserMainData