import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const Header = (props) => {

    const connected = props.logged;
    const [menuDisplay, setMenuDisplay] = useState("invisible p-2 text-center text-white bg-black hover:bg-blue-600");
    const showMenu = ()=>{
        setMenuDisplay("visible p-2 text-center text-white bg-black hover:bg-blue-600");
    }
    const hideMenu = ()=>{
        setMenuDisplay("invisible p-2 text-center text-white bg-black hover:bg-blue-600");
    }

    if (connected === false) {
        return (
            <header className="grid grid-cols-10 col-span-10 p-3 m-3 border-0 border-black rounded-md mb-14 bg-gray-50 h-30">
    
                <div className="col-span-2 col-start-1">
                   <span className="text-3xl font-bold text-black"> CAPUS</span><br />
                   <span className="font-bold text-black"> (Re)Connecter les gens</span>
                </div>
                <div className="col-start-5">
                <Link to={{pathname:"/", state:{connect : connected}}}><img className="cursor-pointer" src ="https://images.gamebanana.com/img/ico/sprays/acdc_png.png" alt="ceci la" ></img></Link>
                </div>
                <div className="grid col-start-10 grid-rows-3">
                    <Link className ="row-start-1 p-2 text-center text-white bg-black hover:bg-blue-600" to="/Login">Connexion</Link>
                </div>
            
            </header>);

    }

    else if (connected === true) {
        return(
            <header className="grid grid-cols-10 col-span-10 p-3 m-3 border-0 border-black rounded-md mb-14 bg-gray-50 h-30">
    
            <div className="col-start-1">
                   <span className="text-3xl font-bold text-black"> CAPUS</span><br />
                   <span className="font-bold text-black"> (Re)Connecter les gens</span>
                </div>
                <div className="col-start-5">
                <Link to={{pathname:"/", state:{connect : connected}}}><img className="cursor-pointer" src ="https://images.gamebanana.com/img/ico/sprays/acdc_png.png" alt="ceci la" ></img></Link>
                </div>
                {/*<div className="grid col-start-10 grid-rows-3 row-start-1">*/}
                    <nav className="col-start-10" onMouseOver= {()=>{showMenu()}} onMouseLeave={()=>{hideMenu()}}>
                        <ul>
                            <li className="p-2 text-center text-white bg-black hover:bg-blue-600">Menu</li>
                            <li className={menuDisplay}>Carte créer</li>
                            <li className={menuDisplay}><Link to={{pathname:"/", state:{connect : false}}}>Déconnexion</Link></li>
                        </ul>
                    </nav>
                    
                {/*</div>*/}
                
            
            </header>);


    }


}

export default Header