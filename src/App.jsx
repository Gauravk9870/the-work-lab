import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Organization from "./pages/join/organization";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join">
          <Route path="freelancer" element={<Join />} />
          <Route path="organization" element={<Organization />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
