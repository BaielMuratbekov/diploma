import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./components/redux";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./Pages/Home-page/Home-page";
import { Sale } from "./Pages/Sale/Sale";
import { About } from "./Pages/About/About";
import { Player } from "./Pages/Player-page/Player";
import NotFound from "./Pages/NotFound/NotFound";
import Product from "./Pages/Product";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          
          
          <Layout>
            <Routes>

              <Route index element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/player" element={<Player />} />

              <Route path="/products/:id" element={<Product />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
          
        </div>
      </BrowserRouter >
    </Provider>
  );
}

export default App;
