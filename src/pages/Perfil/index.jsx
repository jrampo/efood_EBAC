import React from "react";
import { useParams } from "react-router-dom";

import Banner from "../../components/PerfilComponents/Banner";
import ProductsList from "../../components/PerfilComponents/ProductsList";
import Footer from "../../components/Footer";

const Perfil = () => {
  const { id } = useParams();

  return (
    <>
      <Banner id={id} />
      <div className="container">
        <ProductsList id={id} />
      </div>
      <Footer />
    </>
  );
};

export default Perfil;
