import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/redux";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./Pages/Home-page/Home-page";
import { Sale } from "./Pages/Sale/Sale";
import { About } from "./Pages/About/About";
import { Player } from "./Pages/Player-page/Player";
import NotFound from "./Pages/NotFound/NotFound";
import Product from "./Pages/Product";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import Category from "./Pages/Category";
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
