import React from 'react';
//import { useState, useEffect } from "react";
import FarmList from "./FarmList";
import useFetch from "./useFetch";
const Home = () => {
    const {data:farm,loading,error} = useFetch('http://localhost:8000/farmers');
    return ( 
        <div className="Home">
            {error && <div>{error}</div>}
            {loading && <div>loading...</div>}
            {farm && <FarmList thefarms={farm} title = "not sister"/>}
        </div>
        
     );
}
 
export default Home;