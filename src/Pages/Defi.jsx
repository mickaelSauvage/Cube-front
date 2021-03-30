import React from 'react';
import ResourceDetails from "../Components/ResourceDetails";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';


const Defi = () => {

    let location = useLocation();
    console.log(location.state.connect);
    function verifConnect () {

    
        if (location.state === undefined) {
            return false;
        }

        else {
            return location.state.connect;
        }
    }

    return (

        <div className="grid grid-cols-10 gap-4 bg-gray-300">
            <Header logged = {verifConnect()} />
            <ResourceDetails res = {location.state.res} logged = {verifConnect()} />
            <Footer />
        </div>
    );

}

export default Defi