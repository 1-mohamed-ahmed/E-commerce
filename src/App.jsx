import "./App.css";

import Header from "./components/header";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Footer from "./components/footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
