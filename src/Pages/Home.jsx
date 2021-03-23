import React from 'react';
import Resources from "../Components/Resources";
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const Home = () => {

    return (

        <div className="grid grid-cols-10 gap-4 bg-gray-300">
            <Header />
            <Resources />
            <Footer />
        </div>
    );

}

export default Home