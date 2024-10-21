import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import UnauthorizedPage from "./components/common/UnauthorizedPage";
import MainPage from "./MainPage";
import GetStory from "./components/GetStory";
import LoginRegister from "./components/LoginRegister";
import MiddlePage from "./components/MiddlePage";
import Register from "./components/Register";
function App() {
  const userId = "671380c7735f09a4ddcbe906";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login/:purpose/:storyNo" element={<LoginRegister />} />
        <Route
          path="/main-page/:userId"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path="/401" element={<UnauthorizedPage />} />
        <Route path="/get-story/:userId/:storyNo" element={<GetStory />} />
        <Route path="/middle-page/:purpose/:storyNo" element={<MiddlePage />} />
        <Route path="/register/:purpose/:storyNo" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
