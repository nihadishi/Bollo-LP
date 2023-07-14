import { BrowserRouter, Routes, Route, Redirect, Navigate } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Introduction from "./pages/Home/Introduction.jsx";
import Questions from "./pages/Questions/Questions.jsx";
import Navbar from "./static/header/navbar-menu/Navbar.jsx";
import Footer from "./static/footer/Footer.jsx"
import './style/main.scss'
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Navbar lang='0'/><Introduction lang='0'/><About lang='0'/><Questions lang='0'/><Footer lang='0'/></>}/>
      <Route path="/az" element={<><Navbar lang='0'/><Introduction lang='0'/><About lang='0'/><Questions lang='0'/><Footer lang='0'/></>}/>
      <Route path="/en" element={<><Navbar lang='1'/><Introduction lang='1'/><About lang='1'/><Questions lang='1'/><Footer lang='1'/></>}/>
      <Route path="/ru" element={<><Navbar lang='2'/><Introduction lang='2'/><About lang='2'/><Questions lang='2'/><Footer lang='2'/></>}/>
      <Route path='*' element={<NotFound><Navigate to='/'/></NotFound>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
