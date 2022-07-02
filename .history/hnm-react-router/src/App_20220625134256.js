import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { ProductAll } from "./page/ProductAll";
import { Login } from "./page/Login";
import { ProductDetail } from "./page/ProductDetail";
import { Navbar } from "./components/Navbar";
import { useState, useEffect } from "react";
import { privateRoute } from "./route/privateRoute";

// 1. 전체 상품페이지, 로그인, 상품 상세페이지
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 눌렀으나, 로그인이 안되있을 경우에는 로그인페이지가 먼저 나온다.
// 5.
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("aa", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<privateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
