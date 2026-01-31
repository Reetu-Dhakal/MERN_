import './App.css';
import LoginPage from './pages/login.page';
import Registerpage from "./pages/register.page";
import HomePage from './pages/home.page.jsx';
import {BrowserRouter , Routes, Route} from 'react-router'
import NotFoundPage from './pages/notfound.page.jsx';

function App() {
  return (
    <main className="min-h-screen min-w-full  tracking-wider">
      <BrowserRouter>
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* dynamic routes */}
          {/* <Route path="/product/:slug/:id" element={<div><ProductPage /></div>} /> */}

          {/* not found route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
} 

export default App;
