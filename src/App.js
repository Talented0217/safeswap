import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Sell from './pages/MySell';
import ViewOrder from './pages/ViewOrder';
import CreateSale from './pages/CreateSale';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="sell" element={<Sell />}></Route>
          <Route path="buy" element={<ViewOrder />}></Route>
          <Route path="create" element={<CreateSale />}></Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
