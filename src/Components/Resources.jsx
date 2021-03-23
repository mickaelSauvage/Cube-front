import React from 'react';
import { getResources } from '../Objects/ResourcesList'
import { Link } from 'react-router-dom';

const Resources = () => {


    const ResourcesList = getResources();

        return (

            <div className="grid grid-cols-4 col-span-8 col-start-2 gap-4 border-0 rounded-lg mt-52 bg-gray-50">
                {
                    ResourcesList.map(resource => (
                    <Link key = {resource._id} className="grid grid-cols-2 col-span-2 col-start-2 gap-4 p-8 mt-5 mb-5 border-4 rounded-lg cursor-pointer border-gray-50 hover:border-gray-800 grid-rows-8 bg-gradient-to-r from-yellow-500 to-yellow-800" to={{pathname:"/Defi/" + resource._id, state:{res : resource}}}>
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
                    
                    </Link>
                
                ))}
        </div>

        );
    

}

export default Resources