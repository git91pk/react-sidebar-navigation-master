import "./App.css";
import SideMenu from "./components/SideMenu";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TagSync from "./Pages/Tag Sync/Tagsync";
import Tagview from "./Pages/Tag Sync/Tagview";
import Tagupdate from "./Pages/Tag Sync/Tagupdate";
import Tagcreate from "./Pages/Tag Sync/Tagcreate";
import Home from "./Pages/Home";

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <>
      <Header />
      <Router>
        <SideMenu inactive={inactive} setInactive={setInactive} />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/tag"}>
            <TagSync />
          </Route>
          <Route path={"/tag/tagcreate"}>
            <Tagcreate />
          </Route>
          <Route path={"/tag/tagupdate"}>
            <Tagupdate />
          </Route>
          <Route path={"/tag/tagview"}>
            <Tagview />
          </Route>
        </div>
      </Router>
    </>
  );
}

export default App;
