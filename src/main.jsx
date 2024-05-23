import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import "./styles/scrollbar.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./MainPage.jsx"
import Gallery from './Pages/pagOFpag/Gallery/Gallery.jsx'
import AboutUs from './Pages/pagOFpag/About/AboutUs.jsx'
import Shop from './Pages/Shop/Shop.jsx'
import Cart from './Pages/pagOFpag/Cart/Cart.jsx'
import ShopContextProvider from './Context/ShopContextProvider.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import SignupMainUser from './Pages/Profile/Signup/SignupMain.jsx'
import LoginMain from './Pages/Profile/Login/LoginMain.jsx'
import LoadingScreen from './Pages/LoadingPractice/LoadingScreen.jsx'
import {disableReactDevTools} from '@fvilers/disable-react-devtools';



const entries = performance.getEntriesByType("navigation");


entries.forEach((entry) => {
  if (entry.type === "reload") {
    console.log(`${entry.name} was reloaded!`);
    console.log(entry);
  }
});
disableReactDevTools()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
   <BrowserRouter>
   <main>
    <Routes>
      <Route path="/" element={<MainPage/>} /> 
      <Route path="/2tales" element={<MainPage/>} /> 
      <Route path="/2tales/gallery" element={<Gallery/>} />
      <Route path="/2tales/shop" element={<Shop/>} />
      <Route path="/2tales/about" element={<AboutUs/>} />
      <Route path="/2tales/shop" element={<Shop/>} />
      <Route path="/2tales/cart" element={<Cart/>} />
      <Route path="/2tales/profile" element={<Profile/>} />
      <Route path="/2tales/signup" element={<SignupMainUser/>} />
      <Route path="/2tales/loginMain" element={<LoginMain/>} />
      <Route path='/2tales/loadingScreen' element={<LoadingScreen/>} />
    </Routes>
   </main>
    </BrowserRouter>
    </ShopContextProvider>
  </React.StrictMode>,
)
