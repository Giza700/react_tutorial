const FarmList = ({thefarms,title, handleDelete}) => {
    //const farms = props.thefarms;
    //const titler = props.title;
    //console.log(props,farms);

    return ( 
        <div className="farm-list">
            <h2>{title}</h2>
            {thefarms.map((farms) => 
                <div className="farm-preview" key={farms.id}>
                    <h2>{farms.title}</h2>
                    <p>hi there {farms.head}</p>
                    <button onClick={() => handleDelete(farms.id)}>Delete List</button>
                </div>  
            )} 
        </div>
     );
}
 
export default FarmList;