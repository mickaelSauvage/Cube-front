import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [count, setCount] = useState(0);


    return (
      
      <div className="grid grid-cols-3 col-span-8 col-start-2 gap-4 p-10 border-0 rounded-lg bg-gray-50">

        <div className="col-start-2 row-start-1">
          <h1><b>Connectez-vous</b></h1><br />
          <input className="border-2 border-gray-200 rounded-lg bg-gray-50" type="text" placeholder="Entrer le nom d'utilisateur" name="username" required/>
          <br/><br/>
          <input type="password" className="border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="Entrer le mot de passe" name="password" required/>
          <br/><br/>
          <Link to={{pathname:"/", state:{connect : true}}}>
            <input type="button" className="p-2 cursor-pointer hover:ring-offset-gray-200 hover:ring-offset-2 hover:ring-black hover:ring-2" id='submit' value='Se connecter'/>
          </Link>
        </div>

        <br/><br/>
        <span className="col-start-2 row-start-3"><b>Pas encore inscrit ? Venez relever nos défis, c’est gratuit !</b></span>
        <br/><br/>

        <div className="col-start-2 row-start-5">
          <input type="text" className="border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="Pseudo" name="username" required/>
          <br/><br/>
          <input type="text" className="border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="E-mail" name="email" required/>
          <br/><br/>
          <input type="password" className="border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="Mot de passe" name="password" required/>
          <br/><br/>
          <input type="password" className="border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="Confirmer mot de passe" name="password" required/>
          <br/><br/>
          <span>
            <input type="date" className="border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="Date de naissance" name="dateNaissance" required/>
            <input type="text" className="m-4 border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="Code postal" name="codePostal" required/>
          </span>
          <br/><br/>
          <input type="button" className="p-2 cursor-pointer hover:ring-offset-gray-200 hover:ring-offset-2 hover:ring-black hover:ring-2" id='submit' value="S'inscrire"/>
        </div>
        
      </div>
      
    );
  
}
export default Login