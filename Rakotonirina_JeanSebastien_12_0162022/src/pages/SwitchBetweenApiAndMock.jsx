import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Handle4Urls from '../components/utils/Handle4Urls';
import HandleMockedData from '../components/utils/HandleMockedData';
import GetUserMainData from './GetUserMainData';

/**
 * Switches between Api and Mocked one
 * @return { Component } GetUserMainData with one of 2 props {...data2} or {...data3}, depends on the click choice 
 */
const SwitchBetweenApiAndMock = () => {
    /**
     * Retrieves the id passed in the url
     */
    const id = parseInt(useParams().id)
    /**
     * switches to Api event 
     */
    const [api, setApi] = useState(false);
    /**
     * Switches to MockedApi
     */
    /**
     * Switches to api data
     */
    let [data2, setData2] = useState({})
    /**
     * Switches to mocked api data
     */
    let [data3, setData3] = useState({})
    const [mockedapi, setMockedApi] = useState(false);
    const [hideBySass, setHideBySass] = useState(false)
    function handleHide(){
        setHideBySass((prevState) => (!prevState ))
    }    
   /**
     * Retrieves api data from Handle4Urls function by id
     */
    const { data, isLoading, error } = Handle4Urls(id)
    /**
     * Retrieves mocked api data from HandleMockedData function 
     */
    const {  mockedData, isPending, error2 } = HandleMockedData(id)
    const apiHandler = () => {
        setApi(true);
        setMockedApi(false);
        setData2({ data, isLoading, error })
        };
     const mockedapiHandler = () => {
        setApi(false);
        setMockedApi(true);
        setData3({ mockedData, isPending, error2 })
    };
        //console.clear()

     return (
        <React.Fragment>
        <div className={"sportSee-switcher-button " + (hideBySass ? "visible" : "hidden")}>
        <h1>P12 openClassRooms</h1>
        <p>Read and Act (React) before clicking a button</p>
            <button onClick={()=>
            {
                apiHandler();
                handleHide();
            }
                }>
                <span>The Server Backend is turned On</span>
                </button>
            <button onClick={()=>
            {
                mockedapiHandler()
                handleHide()
            }
                }>
                <span>The Server Backend is turned Off</span>
            </button>
        </div>
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
        </React.Fragment>
    );
};

export default SwitchBetweenApiAndMock;