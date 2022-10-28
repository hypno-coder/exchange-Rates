import React from 'react';
import Converter from './pages/Сonverter/Сonverter'
import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
        <Routes>
            <Route path="/" element={<Converter />} />
        </Routes>
  );
}

export default App;
