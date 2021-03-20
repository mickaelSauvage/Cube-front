import React from 'react';
import Comments from './Comments'
import CreateComm from './CreateComment'





const ResourceDetails = (props) => {

    const Res = [props.res];
    
    return (
        
        <div className="grid grid-cols-2 col-span-2 col-start-2 row-start-2 p-2 border-2 border-black bg-gradient-to-r from-yellow-500 to-gray-50">
            {
                Res.map(resource => (
                    <div key = {resource._id} className="grid grid-cols-2 col-span-2 col-start-1" >
                        <div className="col-start-1 row-start-1">
                            <b>Défi  {resource.title}</b>
                        </div>
                        <div className="col-start-1 row-start-2">        
                            {resource.label}
                        </div>
                        <div className="col-start-1 row-start-3">        
                            <b>Difficulté : </b>
                        </div>
                        <div className="col-start-1 row-start-4">
                            {resource.difficulty}
                        </div>
                        <div className="col-start-1 row-start-5">
                                
                            <b>Type de relation :</b>
                        </div>  
                        <div className="col-start-1 row-start-6">     
                            {resource.relationType}
                        </div>   
                        <div className="col-start-1 row-start-7">     
                            <b>Avis utilisateurs :</b>
                        </div>
                        <div className="col-start-1 row-start-8">       
                            {resource.userReview}
                        </div>       
                        <div className="col-start-2 row-span-6 row-start-1">
                            <img src ="https://www.rockurlife.net/wp-content/uploads/2020/05/97410831_3017338285026471_1455400288734150656_n.jpg" alt="ceci la" ></img>
                        </div>
                        <div>
                            <button type="button" className ="bg-gray-200 border-black border-1">Démarrer le défi</button>
                        </div>
                        <CreateComm />
                        
                        <Comments />

                    </div>
                
                ))}
        </div>

    );

}

export default ResourceDetails