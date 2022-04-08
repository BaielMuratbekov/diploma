import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./components/Header";

import { HomePage } from './components/Pages/Home-page'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>

      </div>
    </BrowserRouter >
  );
}

export default App;
