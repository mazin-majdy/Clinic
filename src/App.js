import React from "react";
import Homepage from "./components/homepage/Homepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ServiceDetails from "./components/serviceDetails/ServiceDetails";
import Blogs from "./components/blogs/Blogs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
