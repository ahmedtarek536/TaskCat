import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import { Context } from "./pages/Context";

function App() {
  return (
    <BrowserRouter>
      <Context>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:user" element={<User />} />
        </Routes>
      </Context>
    </BrowserRouter>
  );
}

export default App;
