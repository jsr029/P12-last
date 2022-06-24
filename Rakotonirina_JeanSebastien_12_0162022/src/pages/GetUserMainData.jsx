import React from 'react'
import UserMainData from '../components/UserMainData'
import { useParams } from 'react-router-dom'
import HorizontalMenu from '../components/HorizontalMenu'
import VerticalMenu from '../components/VerticalMenu'
import Handle4Urls from '../components/utils/Handle4Urls'
import HandleMockedData from '../components/utils/HandleMockedData'

/**
 * 
 * Retrieves the id with useParams hook and pass it in the url with useFetch hook
 * 
 * Uses the first endPoints http://localhost:5000/user/${id} to connect at the datas server 
 * 
 * Gets the user datas infos
 * @returns { Component } HorizontalMenu, VerticalMenu, UserMainData 
 */
function GetUserMainData() {
		/**
	 * Retrieves the id by useParms hook function
	 */
	const id = useParams().id
	/**
	 * Puts conditions :
	 * - if id!=12 and id!=18 returns error 404 page inside <NotFound /> component
	 * - else @returns {Promise} function HandleChange 
	 *  
	 */
		/**
		 * retrieves data, isLoading, error from HandleChange using id and case 0 
		 * corresponding at first endPoints url in the switch
		 */

	const { data, isLoading } = Handle4Urls(id)
	const { mockedData, isPending } = HandleMockedData(12) 
	console.log(data.datas)
	/**
	 * @returns { String } 'Il y a un probleme' if error 
	 */
	/**
	 * Ternary
	 * 
	 * if isLoading = true returns 'Chargement...'
	 * 
	 * else returns <HorizontalMenu/>, <VerticalMenu /> and <UserMainData /> components
	 */
	return isLoading ? <div>Chargement...</div> :(
		<React.Fragment>
		<HorizontalMenu />
		<div className='menu-graph-bloc'>
			<VerticalMenu />
			<UserMainData datas={data.datas} />
		</div>
		</React.Fragment>
	)
	
};

export default GetUserMainData