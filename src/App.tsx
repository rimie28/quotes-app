import Navbar from "./Components/Navbar.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar.tsx";
import SubmitQuote from "./Components/SubmitQuote.tsx";
import Quotes from "./Components/Quotes.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-4 mt-4">
            <Sidebar />
          </div>
          <div className="col-8 mt-4">
            <Routes>
              <Route path="/" element={<Quotes />} />
              <Route path="/add-quote" element={<SubmitQuote />} />
              <Route path="/categories/:categoryId" element={<Quotes />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
