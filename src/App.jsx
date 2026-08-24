import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import GoogleAnalytics from "./components/GoogleAnalytics";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="bg-spotify-dark min-h-screen">
          <GoogleAnalytics />
          <div className="spotify-player-bar" aria-hidden="true" />
          <Navbar />

          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
