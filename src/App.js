import Home from "./routes/home/home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Navigation/Navigation";
import SignIn from "./routes/Singn-in/SignIn";
function Shop() {
  return (
    <div>
      <h1>Shopping page</h1>
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
