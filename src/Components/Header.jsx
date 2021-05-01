import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import sword from '../Images/icons//sword.png';
import user from '../Images/icons/user.svg';


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
                <div className="col-span-2 col-start-5 pt-10 pl-28">
                <img src ={user} width="70" height="70" alt="logo profile" ></img>
                </div>
                <nav className="col-start-10" onMouseOver= {()=>{showMenu()}} onMouseLeave={()=>{hideMenu()}}>
                        <ul>
                            <li className="p-2 text-center text-white bg-black hover:bg-blue-600">Menu</li>
                            <li className={menuDisplay}><Link to={{pathname:"/", state:{connect : false}}}>Accueil</Link></li>
                            <li className={menuDisplay}><Link to="/Login">Connexion</Link></li>
                            <li className={menuDisplay}><Link to="/Inscription">Inscription</Link></li>
                        </ul>
                </nav>
            
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
                <div className="col-span-2 col-start-5 pt-10 pl-28">
                <img src ={user} width="70" height="70" alt="ceci la" ></img>
                </div>
                    <nav className="col-start-10" onMouseOver= {()=>{showMenu()}} onMouseLeave={()=>{hideMenu()}}>
                        <ul>
                            <li className="p-2 text-center text-white bg-black hover:bg-blue-600">Menu</li>
                            <li className={menuDisplay}><Link to={{pathname:"/", state:{connect : true}}}>Accueil</Link></li>
                            <li className={menuDisplay}><Link to={{pathname:"/Compte", state:{connect : true}}}>Mon compte</Link></li>
                            <li className={menuDisplay}><Link to={{pathname:"/DefiCreation", state:{connect : true}}}>Créer un défi</Link></li>
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