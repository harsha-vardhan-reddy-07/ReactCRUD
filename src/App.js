import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import About from './pages/About';
import View from './pages/View';
import NoPageFound from './pages/NoPageFound'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';



function App() {

 

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<NoPageFound/>}/> 
          {/* for all the remaining pages */}
        </Routes>

        
        <ToastContainer position='top-center'/>
      </div>
    </BrowserRouter>
  );
}

export default App;
