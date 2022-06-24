
import React from 'react'
import { useParams } from 'react-router-dom'
import UserMainData from '../components/UserMainData'
import { useFetch } from '../components/utils/Hooks'

function Home() {
    const { id } = useParams()
    const { data, isLoading, error } = useFetch(
		`http://localhost:5000/user/${id}`
    )
    	if (error) {
		return <span>Il y a un problème</span>
	}

	return isLoading ? <div>Chargement...</div> : (
		<React.Fragment>
			<UserMainData data={data.data}/>
		</React.Fragment>
	)
}

export default Home