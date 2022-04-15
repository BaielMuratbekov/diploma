import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./components/Pages/About/About";
import {Nav} from './components/Header/Nav'
import { HomePage } from './components/Pages/Home-page'
import { Sale } from "./components/Pages/Sale/Sale";
import { Player } from "./components/Pages/Player-page/Player";
import { store } from "./components/redux";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Routes>

            <Route index element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/player" element={<Player />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter >
    </Provider>
  );
}

export default App;
