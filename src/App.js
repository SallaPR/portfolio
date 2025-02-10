import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Projects from "./components/Projects";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
