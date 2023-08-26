import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import Footer from "./components/Footer";
import FourOFour from "./pages/FourOFour";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Index />} />
          <Route path="/cards/new" element={<New />} />
          <Route path="/cards/:id" element={<Show />} />
          <Route path="/cards/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
