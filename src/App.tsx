import React from "react";
import { MemoryRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Transaction from "./components/transaction";
import Category from "./components/category";

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark header-box">
          <div className="container-fluid ">
            <Link className="nav-link" to="/">
              Expense App
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category">
                    Category
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/transaction">
                    Transaction
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
