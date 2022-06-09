import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [head,setDrop] = useState('Avocado');
    const[loading,setLoading] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const farm = {title,body,head}; //added our inputs in the object for manuplation

        setLoading(true);
        fetch('http://localhost:8000/farmers/',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(farm) //change the input into json format
        }).then(() => {
            console.log('New vegetable added');
            setLoading(false);
            //history.go(-1);
            history.push('/');   
        })
    }
    return ( 
        <div className="create">
            <h2>Add new fruit</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Add New Plant:
                </label>
                <input 
                  type="text" 
                  required
                  value = {title}
                  onChange = {(e) => setTitle(e.target.value)}// helps to track what user types in the fields
                />
                <label>
                    Add Plant Description:
                </label> 
                <textarea
                  required
                  value={body}
                  onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>
                    Grown By:
                </label>
                <select
                  value={head}
                  onChange = {(e) => setDrop(e.target.value)}
                >
                    <option value="Avocado">Avocado</option>
                    <option value="Mango">Mango</option>
                </select>
                {!loading && <button>Add Plant</button>}
                {loading && <button disabled> Adding Yetaaaa</button>}
            </form>
        </div>
     );
}
 
export default Create;