import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

// Pages
import Accueil from "./Pages/Accueil";
import NosPacks from "./Pages/NosPacks";
import NotreExpertise from "./Pages/NotreExpertise";
import Contact from "./Pages/Contact";
import NosServices from "./Pages/NosServices";
import NotreApproche from "./Pages/NotreApproche";
import APropos from "./Pages/APropos";
import MentionsLegales from "./Pages/MentionsLegales";
import PolitiqueConfidentialite from "./Pages/PolitiqueConfidentialite";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/NosPacks" element={<NosPacks />} />
          <Route path="/NotreExpertise" element={<NotreExpertise />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NosServices" element={<NosServices />} />
          <Route path="/NotreApproche" element={<NotreApproche />} />
          <Route path="/APropos" element={<APropos />} />
          <Route path="/MentionsLegales" element={<MentionsLegales />} />
          <Route path="/PolitiqueConfidentialite" element={<PolitiqueConfidentialite />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);