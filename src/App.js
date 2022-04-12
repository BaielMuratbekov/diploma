import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./components/Pages/About/About";

import { HomePage } from './components/Pages/Home-page'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>

          <Route index element={<HomePage />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter >
  );
}

export default App;
