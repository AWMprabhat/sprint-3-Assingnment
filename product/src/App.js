import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="products/*" element={<Products />}>
          <Route path=":id" element={<Product />}></Route>
        </Route>
          <Route path="Error" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
