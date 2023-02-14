import React from "react";
import Navbar from "../navbar/Navbar";
import Routers from "../../routers/Routers";
import Footer from "../footer/Footer";
function layout() {
  return (
    <>
      <Navbar />

      <div>
        <Routers />
      </div>

      <Footer />
    </>
  );
}

export default layout;
