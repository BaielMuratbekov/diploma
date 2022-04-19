import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { About } from "./components/Pages/About/About";
import { HomePage } from './components/Pages/Home-page'
import { Sale } from "./components/Pages/Sale/Sale";
import { Player } from "./components/Pages/Player-page/Player";
import { store } from "./components/redux";
import { Layout } from "./components/Layout/Layout";
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
            </Routes>
          </Layout>
          
        </div>
      </BrowserRouter >
    </Provider>
  );
}

export default App;
