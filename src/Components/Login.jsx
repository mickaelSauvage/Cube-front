import React from 'react';

class Login extends React.Component {



  render() {
    return (
      
      <div className = "loginForm">

        <form action="/" method="POST">
          <h1>Connectez-vous</h1>
          <input type="text" placeholder="Entrer le nom d'utilisateur" name="username" required/>
          <br/><br/>
          <input type="password" placeholder="Entrer le mot de passe" name="password" required/>
          <br/><br/>
          <input type="submit" id='submit' value='Se connecter'/>
        </form>

        <br/><br/>
        <span><b>Pas encore inscrit ? Venez relever nos défis, c’est gratuit !</b></span>
        <br/><br/>

        <form action="index.html" method="POST">
          <input type="text" placeholder="Pseudo" name="username" required/>
          <br/><br/>
          <input type="text" placeholder="E-mail" name="email" required/>
          <br/><br/>
          <input type="password" placeholder="Mot de passe" name="password" required/>
          <br/><br/>
          <input type="password" placeholder="Confirmer mot de passe" name="password" required/>
          <br/><br/>
          <span>
            <input type="date" placeholder="Date de naissance" name="dateNaissance" required/>
            <input type="text" placeholder="Code postal" name="codePostal" required/>
          </span>
          <br/><br/>
          <input type="submit" id='submit' value="S'inscrire"/>
        </form>
        
      </div>
      
    );
  }
}
export default Login