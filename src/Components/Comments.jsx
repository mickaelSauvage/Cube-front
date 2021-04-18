import React, {useEffect, useState} from 'react';
import Comment from './Comment';
import Client from '../Api/Client.js';

const Comments = (props)=>{

    const idRes = props.id;
    //console.log(idRes);
    const [Comms, setComms] = useState([]);
    
    useEffect(() => {
        const api = new Client();
        api.get('http://localhost:8000/ressources/'+idRes+'/commentaire')
        .then(response =>{
            setComms(response.data);
   
        })
        
      }, []);

      //console.log(Comms);
    return(
        <div className="col-start-1 row-start-10">
            <h4><b>Lire les commentaires</b></h4>
            <br/>
            {Comms.map(comm => (
                <div key= {comm["date du comm"]}>
                <label>Anonyme - {comm["date du comm"]}</label>
                <br></br>
                <textarea name="commentaire" rows="5" cols="33" value={comm.commentaire} disabled="disabled"></textarea>
            </div>
            ))}
        </div>
        
    )
}

export default Comments