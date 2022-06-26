import {
    useState, useEffect
} from "react";

function HandleMockedData(id) {
    const [mockedData, setMockedData] = useState({})
    const [isPending, setIsPending] = useState(false)
    const [error2, setError2] = useState(false)
        const url = `http://127.0.0.1:3000/mockedjson/`+id+`.json`
    
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
            setError2(true)
          } finally {
            setIsPending(false)
          }
        }
        fetchData()
      }, [url])
            return { mockedData, isPending, error2 }
}

export default HandleMockedData;