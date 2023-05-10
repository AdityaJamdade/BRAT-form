import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing.page";
import Form from "./pages/Form.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
