import {
  useState, useEffect
} from "react";
import PropTypes from 'prop-types'

/**
 * Gets datas from mocked Api
 * @param { Number } id user id
 * @returns { Object } mockedData, isPending, error2
 */
function HandleMockedData(id) {
  const [mockedData, setMockedData] = useState({})
  const [isPending, setIsPending] = useState(false)
  const [error2, setError2] = useState(false)
  const urls = [`http://127.0.0.1:3000/mockedjson/${id}.json`]

  useEffect(() => {
    fetch(urls, {
      headers: { 'Content-type': 'application/json' },
      mode: 'no-cors'
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setMockedData(data);
        setIsPending(false)
      })
      .catch(err => {
        setError2(err.message)
      })
  }, [])
  return { mockedData, isPending, error2 }
}
HandleMockedData.propType = {
  /**
   * user id passed in form
   */
  id: PropTypes.number.isRequired
}
export default HandleMockedData;