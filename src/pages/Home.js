import React from "react";
import Layout from ".././components/Layouts/Layout";
import ".././styles/HomeStyle.css";
import Bubble1 from "./Bubble1";
import Bubble2 from "./Bubble2";
import Bubble3 from "./Bubble3";
import Bubble4 from "./Bubble4";
import Bubble5 from "./Bubble5";


const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Bubble1 />

        {/* Home Section About */}
        <Bubble2 />

        {/* Home Section Menu */}
        <Bubble3 />

        {/* Home Section Promotion */}
        <Bubble4 />

        {/* Home Section Shop */}
        <Bubble5 />

       
      </Layout>
    </>
  );
};

export default Home;