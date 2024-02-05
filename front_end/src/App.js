// importování rotes
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importování layoutu
import Layout from "./pages/layouts/Layout"

// importování stránek
import LandingPage from "./pages/landingPage/LandingPage"
import Concerts from "./pages/concerts/Concerts"
import Discography from "./pages/discography/Discography"
import Contacts from "./pages/contacts/Contacts"

const App = () =>{
return <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="concerts" element={<Concerts />} />
          <Route path="discography" element={<Discography />} />
          <Route path="contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>

}

export default App