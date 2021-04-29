import React from 'react';
import Login from "../Components/Login";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Connection = () => {

return(
    <div className="grid h-screen grid-cols-10 gap-4 bg-no-repeat bg-cover bg-form">
        <Header logged ={false} />
        <Login />
        <Footer />
    </div>
);

}

export default Connection