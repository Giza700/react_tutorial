import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';
const FarmDetail = () => {
    const {id} = useParams() //grab parameters from router
    const{data:farm,loading,error} = useFetch('http://localhost:8000/farmers/' + id); 
    return (  
        <div className="farm_details">
            {loading && <div>loading...</div>}
            {error && <div>{error}</div>}
            {farm && (
                <article>
                    <h2>{farm.title}</h2>
                    <p>written by {farm.head}</p>
                    <div>{farm.body}</div>
                </article>
            ) }
        </div>
    );
}
 
export default FarmDetail;