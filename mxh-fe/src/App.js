import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ShowHome from "./pages/ShowHome";
import Register from "./pages/Register";
import MyAbout from "./pages/MyAbout";
import MyTimeLine from "./pages/MyTimeLine";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/registers" element={<Register/>}/>
        <Route path="/home" element={<Home/>}>
            <Route path={""} element={<ShowHome/>}/>
            <Route path={"MyAbout"} element={<MyAbout/>}/>
            <Route path={"MyTimeLine/:idAccount"} element={<MyTimeLine/>}/>
        </Route>
    </Routes>
  )
}

export default App;
