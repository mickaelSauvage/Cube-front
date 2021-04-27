import React from 'react';




const MonCompte = (props) => {

    const connected = props.logged;
    
        return (

            <div className="grid grid-cols-4 col-span-8 col-start-2 gap-4">
                <div className="col-span-2 col-start-2 row-start-1 text-3xl font-bold text-center text-indigo-900">Mon compte</div>
                <span className="col-span-2 col-start-2 row-start-2 text-2xl font-bold text-center text-gray-50">Editez vos informations personnelles et personnalisez votre expérience utilisateur</span>
                

            </div>

        );
    

}

export default MonCompte