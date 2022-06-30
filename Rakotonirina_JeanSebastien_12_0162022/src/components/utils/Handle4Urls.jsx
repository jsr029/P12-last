import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

/**
 * Gets data from Api 
 * @param { Number } id user id passed in form
 * @returns { Object } data{}, isLoading(boolean), error(boolean)
 */
function Handle4Urls(id) {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const urls = [
        `http://localhost:5000/user/${id}`,
        `http://localhost:5000/user/${id}/activity`,
        `http://localhost:5000/user/${id}/performance`,
        `http://localhost:5000/user/${id}/average-sessions`,
    ];
        useEffect(() => {
            Promise.all(
            urls.map(url =>
                fetch(url)
                .then(res => {
                   return res.json()
                })
                .then(res => res.data)
                .catch(err=> {
                    setError(err.message)
                })
            )
            ).then(data => {
            setData({
                datas: {...data}
            });
            setIsLoading(false)
        });
        },[])
   
        return { data, isLoading, error }
}
  Handle4Urls.propTypes = {
    /**
     * user id passed in form
     */
    id : PropTypes.number.isRequired
  }
export default Handle4Urls 