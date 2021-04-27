import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import sword from '../Images/icons//sword.svg';


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
            <header className="grid grid-cols-10 col-span-10 p-3 m-3 border-0 border-black rounded-md mb-14 h-30">
    
                <div className="col-span-2 col-start-1">
                   <span className="text-3xl font-bold text-white"> CAPUS</span>
                   <img src={sword} className="inline-block pb-3 ml-3" alt="icone épée" width="30" height="30" />
                   <p className="font-bold text-indigo-900"> (Re)Connecter les gens</p>
                </div>
                <div className="col-start-5">
                <Link to={{pathname:"/", state:{connect : connected}}}><img className="cursor-pointer" src ="https://images.gamebanana.com/img/ico/sprays/acdc_png.png" alt="logo profile" ></img></Link>
                </div>
                <div className="grid col-start-10 grid-rows-3">
                    <Link className ="row-start-1 p-2 text-center text-white bg-black hover:bg-blue-600" to="/Login">Connexion</Link>
                </div>
            
            </header>);

    }

    else if (connected === true) {
        return(
            <header className="grid grid-cols-10 col-span-10 p-3 m-3 border-0 border-black rounded-md mb-14 h-30">
    
            <div className="col-span-2 col-start-1">
                   <span className="col-start-1 text-3xl font-bold text-white">CAPUS</span>
                   <img src={sword} className="inline-block pb-3 ml-3" alt="icone épée" width="30" height="30" />
                   <p className="font-bold text-indigo-900"> (Re)Connecter les gens</p>
                </div>
                <div className="col-start-5">
                <Link to={{pathname:"/", state:{connect : connected}}}><img className="cursor-pointer" src ="https://images.gamebanana.com/img/ico/sprays/acdc_png.png" alt="ceci la" ></img></Link>
                </div>
                {/*<div className="grid col-start-10 grid-rows-3 row-start-1">*/}
                    <nav className="col-start-10" onMouseOver= {()=>{showMenu()}} onMouseLeave={()=>{hideMenu()}}>
                        <ul>
                            <li className="p-2 text-center text-white bg-black hover:bg-blue-600">Menu</li>
                            <li className={menuDisplay}><Link to={{pathname:"/Compte", state:{connect : true}}}>Mon compte</Link></li>
                            <li className={menuDisplay}>Carte créée</li>
                            <li className={menuDisplay}><Link to={{pathname:"/Favoris", state:{connect : true}}}>Favoris</Link></li>
                            <li className={menuDisplay}><Link to={{pathname:"/Badges", state:{connect : true}}}>Mes badges</Link></li>
                            <li className={menuDisplay}><Link to={{pathname:"/", state:{connect : false}}}>Déconnexion</Link></li>
                        </ul>
                    </nav>
                    
                {/*</div>*/}
                
            
            </header>);


    }


}

export default Header