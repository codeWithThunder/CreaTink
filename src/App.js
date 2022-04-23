import './App.css';
import Header from './Components/Header/Header';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Services from './Components/Services/Services';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Price from './Components/Price/Price';
import About from './Components/About/About';
import Login from './Components/LogIn/Login';
import Footer from './Components/Footer/Footer';
import Portfolio from './Components/Portfolio/Portfolio';



function App() {
  return (
    <div className="App" >

      <Header></Header>
      
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/price' element={<Price/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>

      <Footer></Footer>
      
      </div>
  );
}

export default App;
