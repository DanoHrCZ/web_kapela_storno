// importování rotes
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importování layoutu
import Layout from "./pages/Layout"

// importování stránek
import LandingPage from "./pages/LandingPage"
import Concerts from "./pages/Concerts"
import Discography from "./pages/Discography"
import Contacts from "./pages/Contacts"

const App = () =>{
return <>
<Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="concerts" element={<Concerts />} />
          <Route path="discography" element={<Discography />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>

}

export default App