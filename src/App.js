import { MovieProvider } from "./MovieContext";
import { Home } from "./Pages/Home";
import { SearchAppBar } from "./components/NavBar/Appbar"; 
import { Navigate, Route, Routes } from "react-router-dom";

import { Favoritas } from "./Pages/Favoritas";

function App() {
  return (
    <MovieProvider>
      <div style={{ backgroundColor: "#080f28", minHeight: "100vh" }}>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Navigate to="/Inicio" />} />
          <Route path="/Inicio" element={<Home />} />
          <Route path="/Favoritas" element={<Favoritas />} />
        </Routes>
      </div>
    </MovieProvider>
  );
}

export default App;
