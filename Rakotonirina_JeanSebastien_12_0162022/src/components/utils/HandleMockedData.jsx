import {
    useState, useEffect
} from "react";

function HandleMockedData(id) {
    const [mockedData, setMockedData] = useState({})
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
        const url = `http://127.0.0.1:3000/mockedjson/data.json`
    
    useEffect(() => {
        setIsPending(true)
        async function fetchData() {
          try {
            const response = await fetch(url, { 
              headers: { 'Content-Type': 'application/json' }
            })
            const data = await response.json()
            setMockedData(data)
          } catch (err) {
            console.log(err)
            setError(true)
          } finally {
            setIsPending(false)
          }
        }
        fetchData()
      }, [url])
            return { mockedData, isPending, error }
}

export default HandleMockedData;