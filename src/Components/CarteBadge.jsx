import React from 'react';
import certificate from '../Images/icons/rewards/017-certificate.svg';



const CarteBadges = () => {




    
        return (

            <div className="grid grid-cols-8 text-center bg-white border-2 border-white rounded-lg">
                <img className="col-span-2 col-start-4 m-4" src ={certificate} alt ="certificat" width="40" height="40"/>
                <span className="col-span-6 col-start-2 font-bold">Mini-capus</span><br/>
                <span className="col-span-6 col-start-2 text-gray-500">Défi</span><br/>
                <span className="col-span-6 col-start-2 font-bold text-indigo-900">Coffee</span><br/>
                <input type="button" className="col-span-6 col-start-2 p-2 mt-4 mb-4 border-2 rounded-lg cursor-pointer bg-btn text-gray-50" id='submit' size="30" value="Revoir le défi"/>
            </div>

        );
    

}

export default CarteBadges