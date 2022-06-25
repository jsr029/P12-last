import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Handle4Urls from '../components/utils/Handle4Urls';
import HandleMockedData from '../components/utils/HandleMockedData';
import GetUserMainData from './GetUserMainData';

const SwitchBetweenApiAndMock = () => {
    /**
     * Retrieves the id passed in the url
     */
    const id = useParams().id
    /**
     * switches to Api event 
     */
    const [api, setApi] = useState(false);
    /**
     * Switches to MockedApi
     */
    const [mockedapi, setMockedApi] = useState(false);
    /**
     * Switches to api data
     */
    const [data2, setData2] = useState({})
    /**
     * Switches to mocked api data
     */
    const [data3, setData3] = useState({})
    /**
     * Retrieves api data from Handle4Urls function by id
     */
    const { data, isLoading, error } = Handle4Urls(id)
    /**
     * Retrieves mocked api data from HandleMockedData function 
     */
    const {  mockedData } = HandleMockedData(id)
    const [hideBySass, setHideBySass] = useState(false)
    function handleHide(){
        setHideBySass((prevState) => (!prevState ))
    }
    const apiHandler = (e) => {
        setApi(true);
        setMockedApi(false);
        setData2({ data, isLoading, error })
        };
    const mockedapiHandler = () => {
        setApi(false);
        setMockedApi(true);
        setData3({ mockedData })
    };
    return (
        <div className='sportSee-switcher-button'>
            <button onClick={apiHandler}>
                <span>The Server Backend is turned On</span>
                </button>
            <button onClick={mockedapiHandler}>
                <span>The Server Backend is turned Off</span>
            </button>
            {api && (
                <>
                        <GetUserMainData {...data2} />
                </>
            )}
            {mockedapi && (
                <>
                        <GetUserMainData {...data3} />
                </>
            )}
        </div>
    );
};

export default SwitchBetweenApiAndMock;