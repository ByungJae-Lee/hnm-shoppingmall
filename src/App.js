import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";

/* 
로직정의
1. 3개의 페이지: 전체상품페이지, 로그인, 상품상세페이지
1-1. Navigation bar
2. 전체 상품페이지에서는 전체 상품을 볼 수 있다
3. 로그인 버튼을 누르면 로그인 페이지가 나온다
4. 상품디테일을 클릭했으나, 로그인이 안되어 있는 경우 로그인페이지가 먼저 나온다
5. 로그인이 되있으면 상품 디테일 페이지를 볼 수 있다
6. 로그아웃 버튼을 클릭시 로그아웃이 됨
7. 로그아웃 되면 상품 디테일페이지를 볼 수없음, 다시 로그인 해야만 페이지가 보임
8. 로그인 하면 로그아웃이 보이고 로그아웃하면 로그인이 보인다
9. 상품을 검색할 수 있음
*/

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
