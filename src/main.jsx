import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Info from "./pages/Info.jsx"
import Browse from "./pages/Browse.jsx"
import Selection from "./pages/MovieSelection.jsx"
import NotFound from './pages/NotFound.jsx';
import {LayoutPage} from './pages/LayoutPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/layout' element={<LayoutPage/>}/>
      <Route path='/info' element={<Info/>}/>
      <Route path='/dashboard' element={<DashboardPage/>}/>
      <Route path='/browse' element={<Browse/>}/>
      <Route path='/selection' element={<Selection/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
          {/* <Link to={"link"}>This is link</Link> */}

    </BrowserRouter>
    
  </StrictMode>,
)

// hmr?
// index routes?
// {} in imports?
