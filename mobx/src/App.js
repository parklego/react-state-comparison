import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import OtherPage from "./page/Other";

import CounterStore from "./store/counterStore";

const Store = new CounterStore();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home counter={Store} />} />
        <Route path="other" element={<OtherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
