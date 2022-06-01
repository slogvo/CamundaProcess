import "./App.css";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Warehouse from "./pages/Warehouse/Warehouse";
import ViewCategory from "./pages/ViewCategory/ViewCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/warehouse" element={<Warehouse />}></Route>
          <Route path="/" element={<ViewCategory />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
