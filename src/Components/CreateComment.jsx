import React, {useState} from 'react';
import Client from '../Api/Client.js';

const CreateComm = (props)=> {
    const [comm, setComm] = useState("");
    const idRes = props.idRes;
    const getComm = (e)=> {

        setComm({"id_user" : 1, "content_com": e.target.value});

    }

    const newComm = ()=> {

        const api = new Client();
        api.post('http://localhost:8000/ressources/'+idRes+'/commentaire',comm)
    .then(response =>{
        console.log(response)
    })
    document.getElementById("commentaire").value = "";
    setComm("");
    window.location.reload();

    }
    //console.log(comm);
    return(
        <div className="col-start-1 mb-4 row-start-9">
            <label>Ecrire un commentaire</label><br />
            <textarea id="commentaire" rows="5" cols="33" onChange={getComm}></textarea><br />
            <button type="button" className ="p-1 bg-gray-200 border-black hover:ring-2 hover:ring-black border-1" onClick={()=>{newComm()}}>Envoyer</button>
        </div>
        
    )
}

export default CreateComm