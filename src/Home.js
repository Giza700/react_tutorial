import { useState } from "react";
import FarmList from "./FarmList";
const Home = () => {
    const [farm,setFarm] = useState([
        {title: "fruit", body: "new farm", head: "family", id:1},
        {title: "fruit", body: "new farm", head: "sister", id:2},
        {title: "fruit", body: "new farm", head: "brother", id:3}       
    ]);

    const handleDelete = (id) => {
        const newFarm = farm.filter(farm => farm.id !== id);
        setFarm(newFarm);
    }
    return ( 
        <div className="Home">
            <FarmList thefarms={farm} title = "not sister" handleDelete = {handleDelete}/>
        </div>
     );
}
 
export default Home;