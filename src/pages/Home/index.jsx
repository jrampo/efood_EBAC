import React from "react";

import ProductsList from "../../components/HomeComponents/ProductsList";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <div className="container">
        <ProductsList />
      </div>
      <Footer />
    </>
  );
};

export default Home;
