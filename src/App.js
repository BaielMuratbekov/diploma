import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Nav } from "./components/Header/Nav";
import { Contact } from "./components/Pages/Contact";

import { HomePage } from './components/Pages/Home-page'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </BrowserRouter >
  );
}

export default App;
