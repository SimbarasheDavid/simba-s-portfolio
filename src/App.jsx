import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import WorksPage from "./pages/WorksPage"
import ContactPage from "./pages/ContactPage"



function App() {
  

  return (
    <>
  <Router>
    <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route exact path="/aboutpage" element={<AboutPage />} />
    <Route exact path="/workspage" element={<WorksPage />} />
    <Route exact path="/contactpage" element={<ContactPage />} />
    </Routes>
  </Router>
  
   
    </>
  )
}

export default App
