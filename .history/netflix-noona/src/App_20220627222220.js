import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import Movies from "./page/Movies";
import { MovieDetail } from "./page/MovieDetail";

// 1. 3개 페이지 필요, 홈페이지, 무비페이비, 무비디테일페이지
// 2. 홈페이지에서 배너를 볼 수 있따.
// 3. 3가지 섹션의 영화를 볼수있다(popular, top rated, upcoming)
// 4. 각 영화에 마우스를 올려두면, 제목, 장르, 점수, 인기도, 청불여부
// 5. 영화를 슬라이드로 넘기면서 볼 수 있다.
// 6. 영화디테일 페이지에서 영화에 대한 디테일한 정보를 볼 수 있다. (포스터, 제목, 줄거리, 점수, 인기도, 예산, 청불, 러닝타임 등등)
// 7. trailer를 누르면 예고편을 볼수 있다.
// 8. 영화에 리뷰도 볼 수 있다.
// 9. 추천 관련된 영화도 볼 수 있다.
// 10. 영화 검색을 할 수 있다.
// 11. 영화 정렬 할 수 있따.
// 12. 영화 필터링 할 수 있다.

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
