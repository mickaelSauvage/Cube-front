import React from 'react';
import CarteBadge from './CarteBadge'



const MesBadges = (props) => {

    const connected = props.logged;



    
        return (

            <div className="grid grid-cols-4 col-span-8 col-start-2 gap-4">
            <span className="col-span-2 col-start-2 text-3xl font-bold text-center text-indigo-900">Mes badges </span>
            <span className="col-span-2 col-start-2 row-start-2 text-xl font-bold text-center text-gray-50">Retrouvez ici les trophés obtenus grâce à <br/> l'achèvement de vos défis</span>
            <div className="col-start-2 p-4 mt-24">
            <CarteBadge />
            </div>
            <div className="col-start-3 p-4 mt-24">
            <CarteBadge />
            </div>
            <div className="col-start-2 row-start-4 p-4">
            <CarteBadge />
            </div>
            <div className="col-start-3 row-start-4 p-4">
            <CarteBadge />
            </div>
            </div>

        );
    

}

export default MesBadges