import React from "react";
import Hero from "../components/homepage/Hero";
import BestDeals from "../components/homepage/BestDeals";
import Promotions from "../components/homepage/Promotions";
import Popular from "../components/homepage/Popular";
import Collection from "../components/homepage/Collection";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <BestDeals />
      <Promotions />
      <Popular />
      <Collection />
    </div>
  );
};

export default Homepage;
