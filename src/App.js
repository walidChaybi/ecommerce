import Home from "./routes/home/home";
import { Route, Routes } from "react-router-dom";

function Nav() {
  return (
    <div>
      <h1>i'm Nav</h1>
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Nav />
            <Home />
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
