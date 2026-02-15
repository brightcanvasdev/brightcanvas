import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Work from "./pages/Work";

import BlogPage from "./pages/BlogPage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Tech from "./pages/Tech";
import Design from "./pages/Design";

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
          <Route path="/tech" exact element={<Tech />} />
          <Route path="/design" exact element={<Design />} />

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
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
