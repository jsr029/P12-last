
import React from 'react'
import UserMainData from '../components/UserMainData';

function User(props) {
	return (
		<React.Fragment>
			<UserMainData data={props.data}/>
		</React.Fragment>
	);
};

export default User