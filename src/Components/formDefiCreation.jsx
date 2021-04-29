import React from 'react';




const CreationDefi = (props) => {

    const connected = props.logged;
    
        return (

            <div className="grid grid-cols-4 col-span-8 col-start-2 gap-4">
                <div className="col-span-2 col-start-2 row-start-1 text-3xl font-bold text-center text-indigo-900">Mon compte</div>
                <span className="col-span-2 col-start-2 row-start-2 text-xl font-bold text-center text-gray-50">Editez vos informations personnelles</span>
                <span className="col-start-3 row-start-5 font-bold text-center text-gray-400">Tous les champs sont obligatoires</span>
                <form action="" method="get" className="col-span-2 col-start-2 row-start-5 mt-20 text-center">
                    <label for="title" className="font-bold">Titre</label>
                    <br/>
                    <input type="text" className="border-2 border-gray-200 rounded-lg bg-gray-50" placeholder="Préparation repas" size="30" name="title" required/>
                    <br/><br/>
                    <label for="label" className="font-bold">Description</label>
                    <br/>
                    <textarea type="text" className="border-2 border-gray-200 rounded-lg bg-gray-50" rows="5" cols="33" placeholder="Préparer un diner avec un membre de sa famille" size="30" name="label" required/>
                    <br/><br/>
                    <label className="font-bold">Réalisable avec :</label>
                    <br/>
                    <input type="checkbox" id="conjoints" name="conjoints" />
                    <label for="conjoints" className="ml-2">Conjoints</label>
                    <br/>
                    <input type="checkbox" id="collègues" name="collègues" />
                    <label for="collègues" className="ml-2">Collègues</label>
                    <br/>
                    <input type="checkbox" id="amis" name="amis" />
                    <label for="amis" className="ml-2">Amis</label>
                    <br/>
                    <input type="checkbox" id="communauté" name="communauté" />
                    <label for="communauté" className="ml-2">Communauté</label>
                    <br/>
                    <input type="checkbox" id="famille" name="famille" />
                    <label for="famille" className="ml-2">Famille</label>
                    <br/>
                    <input type="checkbox" id="inconnus" name="inconnus" />
                    <label for="inconnus" className="ml-2">Inconnus</label>
                    <br/>
                    <input type="checkbox" id="enfant" name="enfant" />
                    <label for="enfant" className="ml-2">Enfant</label>
                    <br/>
                    <input type="checkbox" id="connaissances" name="connaissances" />
                    <label for="connaissances" className="ml-2">Connaissances</label>
                    <br/><br/>
                    <input type="button" className="w-3/12 p-2 bg-indigo-900 border-2 rounded-lg cursor-pointer text-gray-50" id='submit' size="30" value="Valider"/>
                    <br/><br/>
                </form>
        
      

            </div>

        );
    

}

export default CreationDefi