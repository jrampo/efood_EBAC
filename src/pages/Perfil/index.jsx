import Banner from "../../components/PerfilComponents/Banner";

import ProductsList from "../../components/PerfilComponents/ProductsList";

import Footer from "../../components/Footer";

const Perfil = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <ProductsList />
      </div>
      <Footer />
    </>
  );
};

export default Perfil;
