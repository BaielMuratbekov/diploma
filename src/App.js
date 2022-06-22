import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/redux";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { About } from "./pages/About";
import { Sale } from "./pages/Sale";
import { Player } from "./pages/Player";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/player" element={<Player />} />
            <Route path="/products" element={<Products />} />
            <Route path=":productId" element={<Product />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:categoryId" element={<Category />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
