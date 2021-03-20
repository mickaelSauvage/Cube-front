import React from 'react';

const CreateComm = ()=> {

    return(
        <div className="col-start-1 row-start-9">
            <label>Ecrire un commentaire</label><br />
            <textarea name="commentaire" rows="5" cols="33"></textarea><br />
            <button type="button" className ="bg-gray-200 border-black border-1">Envoyer</button>
        </div>
    )
}

export default CreateComm