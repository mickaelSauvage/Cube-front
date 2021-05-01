import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


    return (
      <div className="grid grid-cols-3 col-span-8 col-start-2 gap-4 p-10 border-0 rounded-lg">
      
        <div className="col-start-2 row-start-1 mt-10 text-3xl font-bold text-center text-indigo-900">Se connecter</div>
        
        <form action="" method="get" className="col-start-2 row-start-2 text-center">
        <br/><br/><br/><br/>
          <label for="username" className="font-bold">Nom d'utilisateur</label>
          <br/>
          <input className="col-span-2 col-start-2 border-2 border-gray-200 rounded-lg bg-gray-50" type="text" size="30" placeholder="Djean" name="username" required/>
          <br/><br/>
          <label for="password" className="font-bold">Mot de passe</label>
          <br/>
          <input type="password" className="col-span-2 col-start-2 border-2 border-gray-200 rounded-lg bg-gray-50" size="30" placeholder="******" name="password" required/>
          <br/><br/>
          <Link to={{pathname:"/", state:{connect : true}}}>
            <input type="button" className="w-1/2 col-span-2 col-start-2 p-2 border-2 rounded-lg cursor-pointer bg-btn text-gray-50" id='submit' value='Se connecter'/>
          </Link>
        </form>
        
      </div>
      
    );
  
}
export default Login