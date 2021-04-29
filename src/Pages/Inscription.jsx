import React from 'react';
import FormInscription from "../Components/FormInscription";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Inscription = () => {

return(
    <div className="grid grid-cols-10 gap-4 bg-no-repeat bg-cover bg-form">
        <Header logged ={false} />
        <FormInscription />
        <Footer />
    </div>
);

}

export default Inscription