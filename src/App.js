// import Login from './components/login'
// import Register from './components/register'
// import Reset from './components/reset'
// import Dashboard from './components/dashboard'
import Home from './Pages/home';
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="register" element={<Register />} />
        <Route path="reset" element={<Reset />} />
        <Route path="dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

