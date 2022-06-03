import { useState,useEffect} from "react";
const useFetch = (url) => {
    const [data,setData] = useState(null);
    //const [name,setname] = useState('star fruit');
    const [loading,setloading] = useState(true);
    const [error,seterror] = useState(null);
    
    useEffect(() =>{
        const abortCont = new AbortController();//Setting up fetch stopper function

        setTimeout(() => {
            fetch(url,{signal: abortCont.signal})//Way to add the abort signal to the fetch function
                .then(res => {
                    if(!res.ok){
                        throw Error('couldnt find data');
                    }
                console.log(res);
                return res.json();
                })
                .then(db =>{
                    setData(db);
                    setloading(false);
                    seterror(null);
                })
                .catch(err => {
                    if(err.name === 'AbortError'){
                        console.log('Aborted the fetch')
                    }else{
                    setloading(false);
                    seterror(err.message); //server error
                    }
                }) 
        }, 1000);
        return () => abortCont.abort(); //preventing fetching of data while changing router links 
    },[url]);
    
    return{data,loading,error}
}
export default useFetch;