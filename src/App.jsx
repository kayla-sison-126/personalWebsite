import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import ClickSpark from "./assets/ClickSpark";


function App() {
  return (
    <BrowserRouter>
      <ClickSpark
        sparkColor="#ffffff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
        style={{ minHeight: "100vh" , zIndex: "100"}}
      > {/* clicking animation */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </ClickSpark>
    </BrowserRouter>
  );
}

export default App;
