import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Converter from './pages/Сonverter/Сonverter'

function App() {
  return (
        <Routes>
            <Route path="/" element={<Converter />} />
        </Routes>
  );
}

export default App;
