import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import OtherPage from "./page/Other";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="other" element={<OtherPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
