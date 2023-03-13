import React from "react";
import Homepage from "./components/homepage/Homepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ServiceDetails from "./components/serviceDetails/ServiceDetails";
import Blogs from "./components/blogs/Blogs";
import Error from "./components/error/Error";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
