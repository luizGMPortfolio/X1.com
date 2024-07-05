//css
import "./App.css";
//imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Games from "./pages/Games/Games";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Games/:id" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
