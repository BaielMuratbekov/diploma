import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import Abouts from "./pages/Abouts";
import { Sale } from "./pages/Sale";
import { Player } from "./pages/Player";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checout";
import Auth from "./pages/Auth";
import SignOut from "./pages/SignOut";

function App() {
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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
