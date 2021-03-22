import React from 'react';
import Comment from './Comment';

const Comments = ()=>{

    return(
        <div className="col-start-1 row-start-10">
            <h4><b>Lire les commentaires</b></h4>
            <br/>
            <Comment />
            <Comment />
        </div>
    )
}

export default Comments