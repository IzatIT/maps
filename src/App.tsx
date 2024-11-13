import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {KgMapDistrictsPage, KgMapRegionsPage} from "./pages";
import {WorldMapPage} from "./pages/world-map";

function App() {
  return (
    <div>
        <div>
            <a href="/world">World</a><br/>
            <a href="/district">Kg Map with districts</a><br/>
            <a href="/">Kg Map with regions</a>
        </div>
        <Routes>
          <Route path="/" element={<KgMapRegionsPage />} />
          <Route path="/world" element={<WorldMapPage />} />
          <Route path="/district" element={<KgMapDistrictsPage />} />
      </Routes>
    </div>
  );
}

export default App;
