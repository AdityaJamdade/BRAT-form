import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage, LoginPage, DashboardPage, Form, ForgotPasswordPage, About } from "./pages";

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
          <Route exact path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
