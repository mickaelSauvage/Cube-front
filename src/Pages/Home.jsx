import React from 'react';
import Resources from "../Components/Resources";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';

const Home = () => {

    let location = useLocation();

    function verifConnect () {

    
        if (location.state === undefined) {
            return false;
        }

        else {
            return location.state.connect;
        }
    }
    return (

        <div className="grid grid-cols-10 gap-4 bg-no-repeat bg-cover bg-body">
            <Header logged = {verifConnect()} />
            <Resources logged = {verifConnect()} />
            <Footer />
        </div>
    );

}

export default Home