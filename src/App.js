import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
      <Routes>
        <Route path="/movies/:id" element={<Movie/>}/>
      </Routes>
    </Router>
  );
}

export default App;
