import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import UnauthorizedPage from "./components/common/UnauthorizedPage";
import MainPage from "./MainPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/main-page"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path="/401" element={<UnauthorizedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
