import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";

function App() {
  const Token = useSelector((store) => store.User.Token);

  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={Token ? <Home /> : <Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={Token ? <Home /> : <Login />} />
          <Route path="/home" element={Token ? <Home /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
