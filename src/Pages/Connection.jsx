import React from 'react';
import Login from "../Components/Login";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Connection = () => {

return(
    <div className="grid grid-cols-10 gap-4 bg-gray-300">
        <Header />
        <Login />
        <Footer />
    </div>
);

}

export default Connection