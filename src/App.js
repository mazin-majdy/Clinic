import React from "react";
import Homepage from "./components/homepage/Homepage";
import { Routes, Route } from 'react-router-dom'
import ServiceDetails from "./components/serviceDetails/ServiceDetails";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Blogs from "./components/blogs/Blogs";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
        </Routes>

    </div>
  );
}

export default App;
