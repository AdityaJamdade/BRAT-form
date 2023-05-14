import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing.page";
import Form from "./pages/Form.page";
import LoginPage from "./pages/Login.page";
import ForgotPasswordPage from "./pages/ForgotPassword.page";
import DashboardPage from "./pages/Dashboard.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/form' element={<Form />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/dashboard' element={<DashboardPage />} />
          <Route exact path='/forgot-password' element={<ForgotPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
