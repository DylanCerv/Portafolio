import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Page from "./Page";
import CV from "./CV";

export default function App() {

  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </div>
  );
}
