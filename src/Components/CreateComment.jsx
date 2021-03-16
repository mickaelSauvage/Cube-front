import React from 'react';

const CreateComm = ()=> {

    return(
        <div>
            <label>Ecrire un commentaire</label><br />
            <textarea name="commentaire" rows="5" cols="33"></textarea><br />
            <button type="button">Envoyer</button>
        </div>
    )
}

export default CreateComm