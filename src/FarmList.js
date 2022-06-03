import React from 'react';
import { Link } from 'react-router-dom';
const FarmList = ({thefarms,title }) => {
    //const farms = props.thefarms;
    //const titler = props.title;
    //console.log(props,farms);

    return ( 
        <div className="farm-list">
            <h2>{title}</h2>
            {thefarms.map((farms) => 
                <div className="farm-preview" key={farms.id}>
                    <Link to={`/farms/${farms.id}`} >
                        <h2>{farms.title}</h2>
                        <p>hi there {farms.head}</p>
                    </Link>
                   
                    
                </div>  
            )} 
        </div>
     );
}
 
export default FarmList;