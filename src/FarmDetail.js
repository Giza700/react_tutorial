import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';
const FarmDetail = () => {
    const {id} = useParams() //grab parameters from router
    const history = useHistory()
    const{data:farm,loading,error} = useFetch('http://localhost:8000/farmers/' + id); 
    
    const handleClick = () =>{
        fetch('http://localhost:8000/farmers/' + farm.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return (  
        <div className="farm_details">
            {loading && <div>loading...</div>}
            {error && <div>{error}</div>}
            {farm && (
                <article>
                    <h2>{farm.title}</h2>
                    <p>written by {farm.head}</p>
                    <div>{farm.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            ) }
        </div>
    );
}
 
export default FarmDetail;