import "./App.css";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/Auth/PrivateRoutes";

function App() {
  return (
    <div className=" text-Heading font-display">
      {/* <AuthContext> */}
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />} exact />
        </Route>
        <Route path="/" element={<LoginPage />} />
      </Routes>
      {/* </AuthContext> */}
    </div>
  );
}

export default App;
