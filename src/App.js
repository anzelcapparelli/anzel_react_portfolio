import { HashRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Header from "./components/Header/";
import Footer from "./components/Footer.js";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header>
          <NavTabs />
        </Header>
        <div className="bg-white">
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
      </div>

      <Footer />
      {/* <img src="assets/images/marvel.jpg" alt="marvel" /> */}

    </Router>
  );
}

export default App;

// Updated portfolio featuring 6 total projects

// Update GitHub profile with pinned repositories featuring those same projects

// Deploy this site to GitHub Pages using the Create React App docs for deployment.

// Important: Be sure to push your codebase to GitHub and NOT your built and deployed code. Ensure this happens by following the above instructions and using the gh-pages branch to host the deployed application's code.
