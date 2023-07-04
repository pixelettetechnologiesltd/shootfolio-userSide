import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Assets/Pages/Home";
import About from "./Assets/Pages/About";
import Portfolio from "./Assets/Pages/Portfolio";
import Loginform from "./Assets/Components/Loginform";
import Signup from "./Assets/Pages/Signup";
import Forget from "./Assets/Pages/Forget";
import Performance from "./Assets/Pages/Performance";
import Gamehome from "./Assets/Pages/Game/Gamehome";
import Playgame from "./Assets/Pages/Game/Playgame";
import Gamemode from "./Assets/Pages/Game/Gamemode";
import Joinleague from "./Assets/Pages/Game/Joinleague";
import Profile from "./Assets/Pages/Game/Profile";
import Portfoliocreation from "./Assets/Pages/Game/Portfoliocreation";
import Contact from "./Assets/Pages/Contact";
import Joinclub from "./Assets/Pages/Game/Joinclub";
import Play from "./Assets/Pages/Game/Play";
import store from "./store";
import { Provider } from "react-redux";
import Resetform from "./Assets/Components/Resetform";
import Index from "./Assets/Pages/Game/Index";
import PrivateRoute from "./Assets/Components/PrivateRoute";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/signin" element={<Loginform />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/forget" element={<Forget />}></Route>
            <Route path="/resetPassword/:token" element={<Resetform />}></Route>
            <Route path="/" element={<Index />}>
            <Route path="/" element={<PrivateRoute/>}>
            <Route path="/performance" element={<Performance />}></Route>
            <Route path="/gamehome" element={<Gamehome />}></Route>
            <Route path="/playgame" element={<Playgame />}></Route>
            <Route path="/gamemode/:id" element={<Gamemode />}></Route>
            <Route path="/joinleague" element={<Joinleague />}></Route>
            <Route path="/joinclub" element={<Joinclub />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/play" element={<Play />}></Route>
            <Route
              path="/portfoliocreation"
              element={<Portfoliocreation />}
            ></Route>
            </Route>
            </Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
