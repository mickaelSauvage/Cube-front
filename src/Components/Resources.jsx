import React , { useState }from 'react';
import { getResources } from '../Objects/ResourcesList'
import ResourceDetails from './ResourceDetails'
//import './Resources.css';

const Resources = () => {

    //const [ResourcesList, setResourcesList] = useState(getResources());
    const ResourcesList = getResources();
    const [Resource, setResource] = useState();
    const [Status, setStatus] = useState('false');

    const detailResource = (resource) => {

        setResource(resource);
        setStatus("true");
        

    }

    if (Status === "true") {

        return (
            <div className="grid grid-cols-4 col-span-8 col-start-2 gap-4 border-0 rounded-lg bg-gray-50">
                <button type="button" className="col-start-2 row-start-1 row-end-1 border-2 border-gray-150" onClick={() =>setStatus("false")}>Retour</button>
                <ResourceDetails res = {Resource} />
           </div> 
        )
    }
    else {
        return (

            <div className="grid grid-cols-4 col-span-8 col-start-2 gap-4 border-0 rounded-lg bg-gray-50">
                {
                    ResourcesList.map(resource => (
                    <div key = {resource._id} className="grid grid-cols-2 col-span-2 col-start-2 gap-4 p-8 mt-5 mb-5 border-4 rounded-lg cursor-pointer border-gray-50 hover:border-gray-800 grid-rows-8 bg-gradient-to-r from-yellow-500 to-gray-50" onClick={() => {detailResource(resource)}}>
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
                    </div>
                
                ))}
        </div>

        );
    }

}

export default Resources