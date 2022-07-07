import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

// LAYOUTS
import MainLayout from "./commons/layouts/MainLayout";

// VIEWS
import Home from "./views/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
