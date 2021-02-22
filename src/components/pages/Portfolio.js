import React from "react";
import Project from "../Project/";

function Portfolio() {

  const projectsArr = [

    {
      name: "Marvel Hero-Finder",
      imgSrc: "/assets/images/marvel.jpg",
      deployedHref: "https://anzelcapparelli.github.io/marvelHeroFinder/",
      githubHref: "https://github.com/anzelcapparelli/marvelHeroFinder/"
    },

    // {
    //   name: ,
    //   imgSrc: ,
    //   deployedHref: ,
    //   githubHref:
    // }

  ]



  return (
    <div>
      <h1>Portfolio Page</h1>

      <Project {...projectsArr[0]} />

    </div>
  );
}

export default Portfolio;
