import React from 'react'
import UserMainData from '../components/UserMainData'
import HorizontalMenu from '../components/HorizontalMenu'
import VerticalMenu from '../components/VerticalMenu'
import PropTypes from "prop-types";
/**
 * Switches between 2 apis : Api data and mocked one 
 * @param { Object } props props.data or props.mockedData
 * 
 * @returns { Component } HorizontalMenu, VerticalMenu, UserMainData with props named datas 
 * which contains props.data or props.mockedData
 */
function GetUserMainData(props) {
	console.log(props)
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
GetUserMainData.proppTypes = {
	/**
	 * props is an object  
	 */
	props: PropTypes.objectOf(PropTypes.shape({
		/** 
		 * data is an object is required
		 */
		data: PropTypes.arrayOf(PropTypes.shape({
			/** datas is array of id, userInfos, score, keyData*/
			datas: PropTypes.arrayOf(PropTypes.shape({
				/** id is number */
				id: PropTypes.number.isRequired,
				/**userInfos is object */
				userInfos: PropTypes.objectOf(PropTypes.shape({
					/** firstName is atring */
					firstName: PropTypes.string.isRequired,
					/**lastName is string */
					lastName: PropTypes.string.isRequired,
					/**age is number */
					age: PropTypes.number.isRequired
				})).isRequired,
				/** score is number */
				score: PropTypes.number.isRequired,
				/** keyData is object */
				keyData: PropTypes.object
			},
				{
					/**userId is number */
					userId: PropTypes.number.isRequired,
					/**sessions is array */
					sessions: PropTypes.arrayOf(PropTypes.shape({
						/** day is date */
						day: PropTypes.instanceOf(Date).isRequired,
						/** kilogram is number */
						kilogram: PropTypes.number.isRequired,
						/** calories is number */
						calories: PropTypes.number.isRequired
					}))
				},
				{
					/**userId is number */
					userId: PropTypes.number.isRequired,
					/** kind is string */
					kind: PropTypes.string.isRequired,
					/**data is array of value, kind */
					data: PropTypes.arrayOf(PropTypes.shape({
						/**value is number */
						value: PropTypes.number.isRequired,
						/**kind is nulber */
						kind: PropTypes.number.isRequired
					}))
				},
				{
					/** userId is number */
					userId: PropTypes.number.isRequired,
					/** sessions is  array of day, sessionLength */
					sessions: PropTypes.arrayOf(PropTypes.shape({
						/** day is date */
						day: PropTypes.instanceOf(Date),
						/** sessionLength is number */
						sessionLength: PropTypes.number.isRequired
					}))
				}
			))
		})).isRequired,
		/**kilogram is number is required */
		error: PropTypes.bool.isRequired,
		/**calorioes is number is required */
		isLoading: PropTypes.bool.isRequired,
	},
		{
			/** data is an object is required*/
			mockedData: PropTypes.arrayOf(PropTypes.shape({
				datas: PropTypes.arrayOf(PropTypes.shape({
					id: PropTypes.number.isRequired,
					userInfos: PropTypes.objectOf(PropTypes.shape({
						firstName: PropTypes.string.isRequired,
						lastName: PropTypes.string.isRequired,
						age: PropTypes.number.isRequired
					})).isRequired,
					score: PropTypes.number.isRequired,
					keyData: PropTypes.object
				},
					{
						userId: PropTypes.number.isRequired,
						sessions: PropTypes.arrayOf(PropTypes.shape({
							day: PropTypes.instanceOf(Date).isRequired,
							kilogram: PropTypes.number.isRequired,
							calories: PropTypes.number.isRequired
						}))
					},
					{
						userId: PropTypes.number.isRequired,
						kind: PropTypes.string.isRequired,
						data: PropTypes.arrayOf(PropTypes.shape({
							value: PropTypes.number.isRequired,
							kind: PropTypes.number.isRequired
						}))
					},
					{
						userId: PropTypes.number.isRequired,
						sessions: PropTypes.arrayOf(PropTypes.shape({
							day: PropTypes.instanceOf(Date),
							sessionLength: PropTypes.number.isRequired
						}))
					}
				))
			})).isRequired,
			/**kilogram is number is required */
			error: PropTypes.bool.isRequired,
			/**calorioes is number is required */
			isLoading: PropTypes.bool.isRequired,
		}
	)).isRequired,
}

export default GetUserMainData