import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/ContactPage";
import Work from "./pages/Work";

import { BrowserRouter, Routes, Route } from "react-router";
import BlogPage from "./pages/BlogPage";
import Footer from "./components/Footer";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col items-center w-full min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/work" exact element={<Work />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/contact" exact element={<ContactPage />} />
          <Route
            path="/blog/blogPage/:routeName"
            exact
            element={<BlogPage />}
          />
          <Route
            path="/work/workPage/:routeName"
            exact
            element={<WorkPage />}
          />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
