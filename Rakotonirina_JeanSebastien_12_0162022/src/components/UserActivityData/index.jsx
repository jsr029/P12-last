import React from 'react'
import UserActivityDataItem from '../UserActivityDataItem'
import PropTypes from 'prop-types'
/**
 * Transmits data and id to UserActivityDataItem component
 * 
 * @param { Object } data 
 * data retrieves userId and average-sessions array
 * {
    "data": {
        "userId": 12,
        "sessions": [
            {
                "day": "2020-07-01",
                "kilogram": 80,
                "calories": 240
            },
            etc...
        ]
    },
    "id": 12
}
 * @param { Number } id 
 * id which was passed in the url
 * @returns { Component } UserActivityDataItem with id and data.sessions as userId and sessions props
 */
function UserActivityData({ data, id }) {
    return (
        <>
            <div className='sportSee-activity'>
                <UserActivityDataItem
                    userId={data.id}
                    sessions={data.sessions}
                />
            </div>
        </>
    )
};
UserActivityData.proptype = {
    /**
     * id is number not required
     */
    id: PropTypes.number,
    /**
     * data is an Object of {userId, sessions[{day,  kilogram, calories}]}
     */
    data: PropTypes.object.isRequired
}

export default UserActivityData