import React from 'react';
import './App.css'
import {Routes, Route } from "react-router-dom";
import Converter from './pages/Сonverter/Сonverter'
import Currency from "./pages/Currency/Currency";
import Layout from "./components/Layout/Layout";

function App() {
  return (
        <Routes>
          <Route path="/exchange-Rates" element={<Layout />}>
            <Route index element={<Currency />} />
            <Route path="converter" element={<Converter />} />
          </Route>
        </Routes>
  );
}

export default App;
