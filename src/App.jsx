import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import Register from "./components/Register";

function App() {
  return (
    <div className="w-[100%] h-auto bg-blue">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
