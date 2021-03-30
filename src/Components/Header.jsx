import React from 'react';
import {Link} from 'react-router-dom';
//import '../CSS/Header.css';

const Header = (props) => {

    const connected = props.logged;
    console.log(connected);

    if (connected === false) {
        return (
            <header className="fixed grid grid-cols-10 col-span-10 p-3 mb-16 bg-gray-50 h-30">
    
                <div className="col-start-1">
                    Vous aimez les défis?
                </div>
                <div className="col-start-3">
                    Vous allez être servi
                </div>
                <div className="col-start-5">
                <Link to={{pathname:"/", state:{connect : connected}}}><img className="cursor-pointer" src ="https://images.gamebanana.com/img/ico/sprays/acdc_png.png" alt="ceci la" ></img></Link>
                </div>
                <div className="grid col-start-10 grid-rows-3">
                    <Link className ="row-start-1 p-2 text-center text-white bg-black border-2 hover:text-blue-500 hover:underline" to="/Login">Connexion</Link>
                </div>
            
            </header>);

    }

    else if (connected === true) {
        return(
            <header className="fixed grid grid-cols-10 col-span-10 p-3 mb-16 bg-gray-50 h-30">
    
                <div className="col-start-1">
                    Vous aimez les défis?
                </div>
                <div className="col-start-3">
                    Vous allez être servi
                </div>
                <div className="col-start-5">
                <Link to={{pathname:"/", state:{connect : connected}}}><img className="cursor-pointer" src ="https://images.gamebanana.com/img/ico/sprays/acdc_png.png" alt="ceci la" ></img></Link>
                </div>
                <div className="grid col-start-10 grid-rows-3">
                    VOUS ETES CONNECTE
                </div>
            
            </header>);


    }

    else {return <div>TESTTEDS</div>}

}

export default Header