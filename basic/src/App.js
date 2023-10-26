import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import OtherPage from "./page/Other";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="other" element={<OtherPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
