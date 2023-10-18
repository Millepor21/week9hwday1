import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from "./components/Header";
import DashboardPage from "./pages/DashboardPage";
import PatientLoginPage from "./pages/PatientLoginPage";
import PatientRegisterPage from "./pages/PatientRegisterPage";
import Logout from "./components/Logout";

function App(): JSX.Element {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/register/patient" element={<PatientRegisterPage />} />
          <Route path="/login/patient" element={<PatientLoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
