import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Client from '../Api/Client.js';
import certificate from '../Images/icons/rewards/017-certificate.svg';



const Resources = (props) => {

    const connected = props.logged;
    const [ResourcesList, setResourcesList] = useState([]);
    
    useEffect(() => {
        const api = new Client();
        
        api.get('http://localhost:8000/ressources')
        .then(response =>{
            setResourcesList(response.data);
   
        })
        
      }, []);


    
        return (

            <div className="grid grid-cols-4 col-span-8 col-start-2 gap-4">
                <select className ="col-start-2 row-start-1 mt-4 text-white border-2 border-gray-300 rounded bg-btn" name="filtrer" id="filtre-select">
                    <option value="">Filtrer</option>
                    <option value="TypeRelation">Type de relation</option>
                </select>
                <select className ="col-start-3 row-start-1 mt-4 text-white border-2 border-gray-300 rounded bg-btn" name="trier" id="trie-select">
                    <option value="">Trier</option>
                    <option value="Difficulte">Difficulté</option>
                    <option value="Avis">Avis utilisateurs</option>
                </select>
                {
                    ResourcesList.map(resource => (
                    <div key = {resource.id} className="grid grid-cols-2 col-span-2 col-start-2 gap-4 p-8 mt-5 mb-5 bg-white border-4 rounded-lg border-gray-50 grid-rows-8">
                        <div className="col-start-1 row-start-1 text-2xl">
                            <b>Défi  {resource.title}</b>
                        </div>
                        <div className="col-start-1 row-start-2 text-gray-500">        
                            {resource.content}
                        </div>
                        <div className="col-start-1 row-start-3">        
                            <b>Difficulté : </b>
                        </div>
                        <div className="col-start-1 row-start-4">
                            {/*resource.diificulty*/}
                            
                            <span className="grid grid-cols-2 grid-rows-1"><span className="grid grid-cols-5 col-start-1 grid-rows-1">
                            <svg className="col-start-1 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 576 512"><path d="M139.886 512C132.824 512 125.793 508.656 121.106 503.031C116.513 497.531 114.669 490.531 115.919 483.281L142.104 328.469L31.331 218.906C24.613 212.281 22.332 202.906 25.238 193.875C28.113 184.781 35.456 178.5 44.83 177.125L197.788 154.5L266.189 13.688C270.345 5.125 278.501 0 287.938 0C297.312 0 305.686 5.25 309.811 13.688L378.212 154.5L531.201 177.125C540.419 178.5 547.918 184.937 550.762 193.906C553.668 202.906 551.387 212.281 544.669 218.906L433.896 328.469L460.081 483.281C461.3 490.594 459.456 497.562 454.894 503C447.801 511.625 434.895 514.5 424.802 509.094L288 436.062L151.198 509.094C147.667 511 143.854 512 139.886 512ZM280.563 20.688L208.475 169.062L47.174 192.938C39.498 194.107 38.234 203.242 42.581 207.531L159.291 322.969L131.668 485.969C130.333 494.072 138.742 497.699 143.573 495L288 417.938L432.333 494.969C437.408 497.769 445.613 493.905 444.301 485.938L416.709 322.969L533.419 207.531C537.796 203.212 536.345 194.094 528.826 192.938L367.525 169.062L295.437 20.687C292.502 14.754 283.818 14.07 280.563 20.688Z"/></svg>
                            <svg className="col-start-2 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 576 512"><path d="M139.886 512C132.824 512 125.793 508.656 121.106 503.031C116.513 497.531 114.669 490.531 115.919 483.281L142.104 328.469L31.331 218.906C24.613 212.281 22.332 202.906 25.238 193.875C28.113 184.781 35.456 178.5 44.83 177.125L197.788 154.5L266.189 13.688C270.345 5.125 278.501 0 287.938 0C297.312 0 305.686 5.25 309.811 13.688L378.212 154.5L531.201 177.125C540.419 178.5 547.918 184.937 550.762 193.906C553.668 202.906 551.387 212.281 544.669 218.906L433.896 328.469L460.081 483.281C461.3 490.594 459.456 497.562 454.894 503C447.801 511.625 434.895 514.5 424.802 509.094L288 436.062L151.198 509.094C147.667 511 143.854 512 139.886 512ZM280.563 20.688L208.475 169.062L47.174 192.938C39.498 194.107 38.234 203.242 42.581 207.531L159.291 322.969L131.668 485.969C130.333 494.072 138.742 497.699 143.573 495L288 417.938L432.333 494.969C437.408 497.769 445.613 493.905 444.301 485.938L416.709 322.969L533.419 207.531C537.796 203.212 536.345 194.094 528.826 192.938L367.525 169.062L295.437 20.687C292.502 14.754 283.818 14.07 280.563 20.688Z"/></svg>
                            <svg className="col-start-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 576 512"><path d="M139.886 512C132.824 512 125.793 508.656 121.106 503.031C116.513 497.531 114.669 490.531 115.919 483.281L142.104 328.469L31.331 218.906C24.613 212.281 22.332 202.906 25.238 193.875C28.113 184.781 35.456 178.5 44.83 177.125L197.788 154.5L266.189 13.688C270.345 5.125 278.501 0 287.938 0C297.312 0 305.686 5.25 309.811 13.688L378.212 154.5L531.201 177.125C540.419 178.5 547.918 184.937 550.762 193.906C553.668 202.906 551.387 212.281 544.669 218.906L433.896 328.469L460.081 483.281C461.3 490.594 459.456 497.562 454.894 503C447.801 511.625 434.895 514.5 424.802 509.094L288 436.062L151.198 509.094C147.667 511 143.854 512 139.886 512ZM280.563 20.688L208.475 169.062L47.174 192.938C39.498 194.107 38.234 203.242 42.581 207.531L159.291 322.969L131.668 485.969C130.333 494.072 138.742 497.699 143.573 495L288 417.938L432.333 494.969C437.408 497.769 445.613 493.905 444.301 485.938L416.709 322.969L533.419 207.531C537.796 203.212 536.345 194.094 528.826 192.938L367.525 169.062L295.437 20.687C292.502 14.754 283.818 14.07 280.563 20.688Z"/></svg>
                            <svg className="col-start-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 576 512"><path d="M139.886 512C132.824 512 125.793 508.656 121.106 503.031C116.513 497.531 114.669 490.531 115.919 483.281L142.104 328.469L31.331 218.906C24.613 212.281 22.332 202.906 25.238 193.875C28.113 184.781 35.456 178.5 44.83 177.125L197.788 154.5L266.189 13.688C270.345 5.125 278.501 0 287.938 0C297.312 0 305.686 5.25 309.811 13.688L378.212 154.5L531.201 177.125C540.419 178.5 547.918 184.937 550.762 193.906C553.668 202.906 551.387 212.281 544.669 218.906L433.896 328.469L460.081 483.281C461.3 490.594 459.456 497.562 454.894 503C447.801 511.625 434.895 514.5 424.802 509.094L288 436.062L151.198 509.094C147.667 511 143.854 512 139.886 512ZM280.563 20.688L208.475 169.062L47.174 192.938C39.498 194.107 38.234 203.242 42.581 207.531L159.291 322.969L131.668 485.969C130.333 494.072 138.742 497.699 143.573 495L288 417.938L432.333 494.969C437.408 497.769 445.613 493.905 444.301 485.938L416.709 322.969L533.419 207.531C537.796 203.212 536.345 194.094 528.826 192.938L367.525 169.062L295.437 20.687C292.502 14.754 283.818 14.07 280.563 20.688Z"/></svg>
                            <svg className="col-start-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 576 512"><path d="M139.886 512C132.824 512 125.793 508.656 121.106 503.031C116.513 497.531 114.669 490.531 115.919 483.281L142.104 328.469L31.331 218.906C24.613 212.281 22.332 202.906 25.238 193.875C28.113 184.781 35.456 178.5 44.83 177.125L197.788 154.5L266.189 13.688C270.345 5.125 278.501 0 287.938 0C297.312 0 305.686 5.25 309.811 13.688L378.212 154.5L531.201 177.125C540.419 178.5 547.918 184.937 550.762 193.906C553.668 202.906 551.387 212.281 544.669 218.906L433.896 328.469L460.081 483.281C461.3 490.594 459.456 497.562 454.894 503C447.801 511.625 434.895 514.5 424.802 509.094L288 436.062L151.198 509.094C147.667 511 143.854 512 139.886 512ZM280.563 20.688L208.475 169.062L47.174 192.938C39.498 194.107 38.234 203.242 42.581 207.531L159.291 322.969L131.668 485.969C130.333 494.072 138.742 497.699 143.573 495L288 417.938L432.333 494.969C437.408 497.769 445.613 493.905 444.301 485.938L416.709 322.969L533.419 207.531C537.796 203.212 536.345 194.094 528.826 192.938L367.525 169.062L295.437 20.687C292.502 14.754 283.818 14.07 280.563 20.688Z"/></svg>

                                
                            </span>
                            </span>
                        </div>
                        <div className="col-start-1 row-start-5">
                                
                            <b>Réalisable avec :</b>
                        </div>  
                        {resource.Relation.map(relation => (
                        <div key = {50} className="col-start-1 row-start-6 text-gray-500">     
                            {relation.relation.label}
                        </div>))
                        } 
                        <div className="col-start-2 row-span-6 row-start-1">
                            <img src ="https://telfer.uottawa.ca/assets/images/2018/Career-Centre/Blog/_cache/1200x511/0_20_1200_530_relever-defi.jpg" alt="ceci la" ></img>
                        </div>
                        <div className="col-span-2 text-center text-gray-500 row-start-8">
                        <Link to={{pathname:"/Defi/" + resource.id, state:{res : resource, connect : connected, id : resource.id}}}><input type="button" className="w-3/5 p-2 border-2 rounded-lg cursor-pointer bg-btn text-gray-50" id='submit' size="30" value="Voir plus"/></Link>

                        </div>
                        <div className="col-span-2 text-center text-gray-500 row-start-9">
                            <img className="inline-block" src ={certificate} alt ="certificat" width="40" height="40"/>
                            <span>Menez à bien ce défi et obtenez le rang de Mini Capus</span>
                        </div>
                    
                    </div>
                
                ))}
        </div>

        );
    

}

export default Resources