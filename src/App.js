import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./components/Pages/About/About";
import {Nav} from './components/Header/Nav'
import { HomePage } from './components/Pages/Home-page'
import { Sale } from "./components/Pages/Sale/Sale";
import { Player } from "./components/Pages/Player-page/Player";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav/>
        <Routes>

          <Route index element={<HomePage />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/sale" element={<Sale/>}/>
          <Route path="/player" element={<Player />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter >
  );
}

export default App;
