import React from 'react';
import {Link} from 'react-router-dom';
//import '../CSS/Header.css';

const Header = () => {

    return (

    <header className="grid grid-cols-10 col-span-10 p-3 mt-4 mb-16 bg-gray-50 h-30">
        
            <div className="col-start-1">
                Vous aimez les défis?
            </div>
            <div className="col-start-3">
                Vous allez être servi
            </div>
            <div className="col-start-5">
            <Link to="/"><img className="cursor-pointer" src ="https://images.gamebanana.com/img/ico/sprays/acdc_png.png" alt="ceci la" ></img></Link>
            </div>
            <div className="col-start-10">
                <Link className ="p-2 text-white bg-black border-2 hover:text-blue-500 hover:underline" to="/Login">Connexion</Link>
            </div>
        
    </header>

    );

}
export default Header