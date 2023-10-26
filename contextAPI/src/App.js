import "./App.css";
import UserProvider from "./context/UserProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import OtherPage from "./page/OtherPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="other" element={<OtherPage />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
