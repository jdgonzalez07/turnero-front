import React, { useEffect, useState } from "react";

import ShowTurnos from "../../components/ShowTurnos/ShowTurnos";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
    <Hero/>
      <ShowTurnos />
    <Footer/>
    </>
  );
}

export default Home;
