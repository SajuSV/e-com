import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import { useCart } from "./context/useCart.jsx";
import { useEffect } from "react";

function App() {
  const { cartCount } = useCart();

  const location = useLocation();
  const navigate = useNavigate();


  return (
    <>
      <Header cartCount={cartCount} />
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default App;
