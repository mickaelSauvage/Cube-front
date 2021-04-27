import React from 'react';



const MesBadges = (props) => {

    const connected = props.logged;



    
        return (

            <div className="grid grid-cols-4 col-span-8 col-start-2 gap-4">
            <span className="col-span-2 col-start-2 text-3xl font-bold text-center text-indigo-900">Mes badges </span>
            <span className="col-span-2 col-start-2 row-start-2 text-2xl font-bold text-center text-gray-50">Retrouvez ici les trophés obtenus grâce à l'achèvement de vos défis</span>

            </div>

        );
    

}

export default MesBadges