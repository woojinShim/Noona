import "./App.css";
import { Aboutpage } from "./pages/Aboutpage";
import { Homepage } from "./pages/Homepage";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { UserPage } from "./pages/UserPage";
import { LoginPage } from "./pages/LoginPage";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(false);

  const PrivateRoute = () => {
    return auth == true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id/:num" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
