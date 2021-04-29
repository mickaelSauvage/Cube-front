import React from 'react';




const MonCompte = (props) => {

    const connected = props.logged;
    
        return (

            <div className="grid grid-cols-4 col-span-8 col-start-2 gap-4">
                <div className="col-span-2 col-start-2 row-start-1 text-3xl font-bold text-center text-indigo-900">Mon compte</div>
                <span className="col-span-2 col-start-2 row-start-2 text-xl font-bold text-center text-gray-50">Editez vos informations personnelles</span>
                <span className="col-start-3 row-start-5 font-bold text-center text-gray-400">Tous les champs sont obligatoires</span>
                <form action="" method="get" className="col-span-2 col-start-2 row-start-5 mt-20 text-center">
                    <label for="lastname" className="font-bold">Nom</label>
                    <br/>
                    <input type="text" className="border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="Dupont" size="30" name="lastname" required/>
                    <br/><br/>
                    <label for="firstname" className="font-bold">Prénom</label>
                    <br/>
                    <input type="text" className="border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="Jean" size="30" name="firstname" required/>
                    <br/><br/>
                    <label for="username" className="font-bold">Nom d'utilisateur</label>
                    <br/>
                    <input type="text" className="border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="DJean" size="30" name="username" required/>
                    <br/><br/>
                    <label for="lastname" className="font-bold">Adresse email</label>
                    <br/>
                    <input type="text" className="border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="jeandupont@me.com" size="30" name="email" required/>
                    <br/><br/>
                    <label for="password" className="font-bold">Mot de passe</label>
                    <br/>
                    <input type="password" className="border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="******" size="30" name="password" required/>
                    <br/><br/>
                    <label for="confirm-password" className="font-bold">Confirmer le mot de passe</label>
                    <br/>
                    <input type="password" className="border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="******" size="30" name="confirm-password" required/>
                    <br/><br/>
                    <label for="dateNaissance" className="font-bold">Date de naissance</label>
                    <br/>
                    <input type="date" className="w-5/12 border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="Date de naissance" size="30" name="dateNaissance" required/>
                    <br/><br/>
                    <label for="codePostal" className="font-bold">Code postal</label>
                    <br/>
                    <input type="text" className="border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="33300" size="30" name="codePostal" required/>
                    <br/><br/>
                    <label for="catSoc" className="font-bold">Catégorie socio-professionnelle</label>
                    <br/>
                    <select className ="w-5/12 border-2 border-gray-300 rounded" name="filtrer" id="filtre-select">
                    <option value="">-- Sélectionner --</option>
                    <option value="agriculteur">Agriculteur</option>
                    <option value="agriculteur">Artisans/Commerçants/Chefs d'entreprise</option>
                    <option value="agriculteur">Cadres et professions intellectuelles supérieure...</option>
                    <option value="agriculteur">Professions intermédiaires</option>
                    <option value="agriculteur">Employés</option>
                    <option value="agriculteur">Ouvriers</option>
                    <option value="agriculteur">Retraités</option>
                    <option value="agriculteur">Autres personnes sans activité professionnelle</option>
                    </select>
                    <br/><br/>
                    <input type="button" className="w-3/12 p-2 bg-indigo-900 border-2 rounded-lg cursor-pointer text-gray-50" id='submit' size="30" value="Valider"/>
                    <br/><br/>
                </form>
        
      

            </div>

        );
    

}

export default MonCompte