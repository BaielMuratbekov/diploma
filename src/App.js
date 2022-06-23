import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import Abouts from './pages/About/Abouts'
import { Sale } from "./pages/Sale/Sale";
import { Player } from "./pages/Players/Player";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Cart from "./pages/CartPage/Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch({ type: "cart/restore" });
    
  },[]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/abouts" element={<Abouts />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/player" element={<Player />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
