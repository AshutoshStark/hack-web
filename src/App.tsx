import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Roads from "./Pages/Road";
import Tools from "./Pages/Tools";
import Resourse from "./Pages/Resourses";
import Projects from "./Pages/Projects";



export default function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={
                <Home/>
            }/>
            <Route path="/road" element={
                <Roads/>
            }/>
            <Route path="/tool" element={
                <Tools/>
            }/>
            <Route path="/res" element={
                <Resourse/>
            }/>
            <Route path="/Proj" element={
                <Projects/>
            }/>
          </Routes>
        </BrowserRouter>
  );
}