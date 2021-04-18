import React from 'react';
import Comments from './Comments'
import CreateComm from './CreateComment'





const ResourceDetails = (props) => {

    const Res = [props.res];
    const connected = [props.logged];
    const id = [props.id];
    console.log(Res[0].id);
    
    return (
        
        <div className="grid grid-cols-4 col-span-8 col-start-2 gap-4 border-0 rounded-lg bg-gray-50">
            {
                Res.map(resource => (
                    <div key = {resource.id} className="grid grid-cols-2 col-span-2 col-start-2 p-2 m-4 border-2 border-black bg-gradient-to-r from-yellow-500 to-yellow-800" >
                        <div className="col-start-1 row-start-1">
                            <b>Défi  {resource.title}</b>
                        </div>
                        <div className="col-start-1 row-start-2">        
                            {resource.content}
                        </div>
                        <div className="col-start-1 row-start-3">        
                            <b>Difficulté : </b>
                        </div>
                        <div className="col-start-1 row-start-4">
                            {resource.diificulty}
                        </div>
                        <div className="col-start-1 row-start-5">
                                
                            <b>Réalisable avec :</b>
                        </div>  
                        {resource.Relation.map(relation => (
                        <div key = {51} className="col-start-1 row-start-6">     
                            {relation.relation.label}
                        </div>))
                        } 
                        {/*<div className="col-start-1 row-start-7">     
                            <b>Avis utilisateurs :</b>
                        </div>
                        <div className="col-start-1 row-start-8">       
                            {resource.userReview}
                        </div>*/}        
                        <div className="col-start-2 row-span-6 row-start-1">
                            <img src ="https://www.rockurlife.net/wp-content/uploads/2020/05/97410831_3017338285026471_1455400288734150656_n.jpg" alt="ceci la" ></img>
                        </div>
                        <div>
                            <button type="button" className ="col-start-2 p-2 bg-gray-200 border-black rounded hover:ring-offset-gray-200 hover:ring-offset-2 hover:ring-black hover:ring-2 border-1">Démarrer le défi</button>
                        </div>
                        <CreateComm idRes = {Res[0].id} />
                        
                        <Comments id = {Res[0].id} />

                    </div>
                
                ))}
        </div>

    );

}

export default ResourceDetails