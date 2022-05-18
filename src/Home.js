import { useState, useEffect } from "react";
import FarmList from "./FarmList";
const Home = () => {
    const [farm,setFarm] = useState(null);
const [name,setname] = useState('star fruit');

    const handleDelete = (id) => {
        const newFarm = farm.filter(farm => farm.id !== id);
        setFarm(newFarm);
    }
    useEffect(() =>{
        fetch('http://localhost:8000/farms')
        .then(res => {
           return res.json()
        })   
    },[]);
    return ( 
        <div className="Home">
            <FarmList thefarms={farm} title = "not sister" handleDelete = {handleDelete}/>
        </div>
        
     );
}
 
export default Home;