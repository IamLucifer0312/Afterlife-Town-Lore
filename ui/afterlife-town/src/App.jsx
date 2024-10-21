import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import UnauthorizedPage from "./components/common/UnauthorizedPage";
import MainPage from "./MainPage";
import GetStory from "./components/GetStory";
import LoginRegister from "./components/LoginRegister";
function App() {
  const userId = "671380c7735f09a4ddcbe906";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/main-page/:userId" element={<MainPage />} />
        <Route path="/401" element={<UnauthorizedPage />} />
        <Route path="/get-story/:userId/:storyNo" element={<GetStory />} />
      </Routes>
    </Router>
  );
}

export default App;
