import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import ClientRegister from "./components/Client_Registration";
import LSPRegister from "./components/LSP_Registration";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Client_Registration" element={<ClientRegister />} />
            <Route path="/LSP_Registration" element={<LSPRegister />} />
          </Routes>
        </Navbar>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
