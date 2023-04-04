import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Navbar = () => {
  return (
    <nav className="flex content-center justify-center gap-3 bg-slate-300 py-4 fixed w-full">
      <Link className="hover:text-orange-500" to="/">
        Home
      </Link>
      <Link className="hover:text-orange-500" to="/about">
        About
      </Link>
      <Link className="hover:text-orange-500" to="/contact">
        Contact
      </Link>
    </nav>)
}

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact/*" element={<Contact />} />
          <Route path="about/*" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
