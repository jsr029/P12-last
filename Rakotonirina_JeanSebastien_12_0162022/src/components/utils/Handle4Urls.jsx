import { useEffect, useState } from "react";

function Handle4Urls(id) {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
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
                datas: [].concat(...data)
            });
            setIsLoading(false)
        });
        },[])
   
        return { data, isLoading, error }
}
  
export default Handle4Urls 