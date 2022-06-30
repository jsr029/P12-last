import {
    useState, useEffect
} from "react";

function HandleChange(id, url) {
    
    /**
     * Statements initialiazing object, booleans 
     */
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    /**
     * Swicthes between 2 ids in each switches between 4 urls endPonts
     */
    switch (id) {
        case 12:
        default:
            switch(url){
                case 0:
                default:
                    url = "http://localhost:5000/user/"+id;
                    break;
                case 1:
                    url = "http://localhost:5000/user/"+id+"/activity"
                    break;
                case 2:
                    url = "http://localhost:5000/user/"+id+"/average-sessions"
                    break;                
                case 3:
                    url = "http://localhost:5000/user/"+id+"/performance"
                    break;
            }
        break;
        case 18:
            switch(url){
                case 0:
                default:
                    url = "http://localhost:5000/user/"+id;
                    break;
                case 1:
                    url = "http://localhost:5000/user/"+id+"/activity"
                    break;
                case 2:
                    url = "http://localhost:5000/user/"+id+"/average-sessions"
                    break;                
                case 3:
                    url = "http://localhost:5000/user/"+id+"/performance"
                    break;
            }
        break;
        }
/**
 * Allows us to inject lifeCycle notion Hook (ComponentDidiMount, ComponentWillMount...) inside components functions
 * here fetchData
 */
    useEffect(() => {
        if (!url) return
        /**
         * boolean state at true
         */
        setLoading(true)
        /**
         * Fetches API to get data
         * 
         */
        async function fetchData() {
            try {
                /**
                 * The fetch takes the location of the resource as an argument
                 */
                const response = await fetch(url, {})
                /**
                 *  returns a promise as response 
                 */
                const data = await response.json()
                /**
                 * Data Object state changes
                 */
                setData(data)

            } catch (err) {
                console.log(err)
                /**
                 * error boolean state at true
                 */
                setError(true)
            } finally {
                /**
                 * isLoading boolean state at false
                 */
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    
    return { data, isLoading, error, url }    
    
};

export default HandleChange;