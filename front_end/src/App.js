// importování rotes
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importování layoutu
import Layout from "./pages/Layout"

// importování stránek
import LandingPage from "./pages/LandingPage"
import Concerts from "./pages/Concerts"
import Discography from "./pages/Discography"
import Contacts from "./pages/Contacts"

const App = () =>{
return <BrowserRouter>
      <Routes>
          <Route path="landingPage" element={<LandingPage />} />
          <Route path="concerts" element={<Concerts />} />
          <Route path="discography" element={<Discography />} />
          <Route path="contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>

}

export default App