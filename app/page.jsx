import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-fuulll flex flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Promts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern wotld to
        discover, createe and share creative promptingts
      </p>

      {/* feed */}
      <Feed />
    </section>
  );
};

export default Home;
