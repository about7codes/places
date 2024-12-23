import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";

import HomePage from "./pages/HomePage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage";
import VisitedPage from "./pages/VisitedPage";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/place/:id" element={<PlaceDetailsPage />} />
          <Route path="/visited" element={<VisitedPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
