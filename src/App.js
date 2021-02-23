import { HashRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Jumbotron from "./components/Header";
import Footer from "./components/Footer.js";

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Jumbotron>
          <NavTabs />
        </Jumbotron>
        <Route exact path={["/", "/about"]}>
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>

      <Footer />

    </Router>
  );
}

export default App;

// Updated portfolio featuring 6 total projects

// A Header component that appears on multiple pages

// A single Project component that will be used multiple times on a single page

// Navigation with React Router, dynamic rendering, or another third part router

// A Footer component that appears on multiple pages

// Update GitHub profile with pinned repositories featuring those same projects

// Deploy this site to GitHub Pages using the Create React App docs for deployment.

// Important: Be sure to push your codebase to GitHub and NOT your built and deployed code. Ensure this happens by following the above instructions and using the gh-pages branch to host the deployed application's code.
