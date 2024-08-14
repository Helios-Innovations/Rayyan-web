import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardSlider from './Components/card/Card';
import Footer from './Components/footer/Footer';
import AboutUs from './Components/About/About';
import Home from './Components/Home/Home';
import Product from './Components/Products/Product';
import './App.css';
import Nav from './Components/Nav/Nav';
import Contact from './Components/Contact/Contact';
import SignIn from './Components/Login/Login';
import RG from './Components/RayyanGroups/Rayyan';
import HomeThree from './Components/Home/HomeThree';
import HomeReal from './Components/Home/HomeReal';
import HomeOther from './Components/Home/HomeOther';
import Two1 from './Components/Details/Two1';
import Two2 from './Components/Details/Two2';
import Two3 from './Components/Details/Two3';
import Two4 from './Components/Details/Two4';
import Three1 from './Components/Details/Three1';
import Three2 from './Components/Details/Three2';
import Three3 from './Components/Details/Three3';
import Three4 from './Components/Details/Three4';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Nav/>
    <Routes>
       <Route path="/" element={<RG/>}/>
       <Route path="/HomeTwo" element={<Home/>}/>
       <Route path="/HomeThree" element={<HomeThree/>}/>
       <Route path="/HomeReal" element={<HomeReal/>}/>
       <Route path="/HomeOther" element={<HomeOther/>}/>
       <Route path="/about" element={<AboutUs/>}/>
       <Route path="/service" element={<CardSlider/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/product" element={<Product/>}/>
       <Route path="/login" element={<SignIn/>}/>
       <Route path="/Two1" element = {<Two1/>}/>
       <Route path="/Two2" element = {<Two2/>}/>
       <Route path="/Two3" element = {<Two3/>}/>
       <Route path="/Two4" element = {<Two4/>}/>
       <Route path="/Three1" element = {<Three1/>}/>
       <Route path="/Three2" element = {<Three2/>}/>
       <Route path="/Three3" element = {<Three3/>}/>
       <Route path="/Three4" element = {<Three4/>}/>


    </Routes>
       <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
