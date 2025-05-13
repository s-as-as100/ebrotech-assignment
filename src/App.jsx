import "./App.css";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import SingleInvite from "./pages/singleInvite/SingleInvite";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/single-invite" element={<SingleInvite />} />
    </Routes>
  );
}

export default App;
