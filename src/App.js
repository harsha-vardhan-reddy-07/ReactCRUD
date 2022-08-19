import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import About from './pages/About';
import View from './pages/View';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

 

  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/add" element={<AddEdit />} />
          <Route exact path="/update/:id" element={<AddEdit />} />
          <Route exact path="/view/:id" element={<View />} />
          <Route exact path="/about" element={<About />} />
        </Routes>

        
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
