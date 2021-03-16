import React from 'react';
import {Link} from 'react-router-dom';
//import '../CSS/Header.css';

const Header = () => {

    return (

    <header className="grid col-span-10 p-3 mb-16 text-white bg-black border-2 grid-col-10 h-30">
        
            <div>
                <Link className="cursor-pointer" to="/">Vous aimez les défis?</Link>
            </div>
            <div>
                Vous allez être servi
            </div>
            <div className="col-start-5">
                <img src ="https://www.pngfactory.net/_png/_1615849202/13194-sparkweb-ACDClogo.png" alt="ceci la" ></img>
            </div>
            <div className="col-start-9">
                <Link className ="hover:text-blue-500 hover:underline" to="/Login">Connexion</Link>
            </div>
        
    </header>

    );

}
export default Header