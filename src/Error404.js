import React from 'react';
import { Link } from "react-router-dom";

const Error404 = () => {
    return ( 
        <div className="error404">
            <h2>ERROR 404</h2>
            <p>Page not found</p>
            <Link to = '/'>Return to the home Page</Link>
        </div>
     );
}
 
export default Error404;