import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feature from "./components/feature";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/Main";
import Notfound from "./components/notfound";
import Pricing from "./components/pricing";
import Resources from "./components/resources";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
