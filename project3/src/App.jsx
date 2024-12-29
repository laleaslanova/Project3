import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Layout from './layout/Layout';
import Home from './pages/Home';
import { Helmet, HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
 

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />

              <Route path="*" element={<h1>404 tpilmadi bu sehife</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App
