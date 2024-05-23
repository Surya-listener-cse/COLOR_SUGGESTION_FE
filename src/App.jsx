import React from 'react'
import LandingPage from './components/landing-page/LandingPage'
import { BrowserRouter , Routes , Route , Navigate } from 'react-router-dom'
import SignIn from './components/authPage/SignIn'
import SignUp from './components/authPage/SignUp'
import Forgot from './components/authPage/Forgot'
import Reset from './components/authPage/Reset'
import Dashboard from './components/appPage/Dashboard'
import Home from './components/appPage/Home'
import Collections from './components/appPage/Collections'
import ColorSuggestion from './components/appPage/ColorSuggestion'
import Events from './components/appPage/Events'
import SeasonChoice from './components/appPage/SeasonChoice'
import AllDress from './components/appPage/AllDress'
import Tops from './components/appPage/Tops'
import Phants from './components/appPage/Phants'
import Tshirts from './components/appPage/Tshirts'
import AddClothes from './components/appPage/AddClothes'
import EditClothes from './components/appPage/EditClothes'
import EditDate from './components/appPage/EditDate'
import Users from './components/appPage/Users'
import EditUser from './components/appPage/EditUser'
import AddDate from './components/appPage/AddDate'
import EditSuggestion from './components/appPage/EditSuggestion'
import ActionColor from './components/appPage/ActionColor'
import AddColor from './components/appPage/AddColor'
export const API_URL = 'https://daily-dress-color-suggestion-for-women-m74k.onrender.com'


function App() {
  return <>
  
  <BrowserRouter>
  <Routes>
    {/* Landing Page  */}
    <Route path='/landing-page' element={<LandingPage/>}/>

    {/* Auth Page  */}
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/forgot-password' element={<Forgot/>}/>
    <Route path='/reset-password' element={<Reset/>}/>

    {/* Main App Page  */}
    <Route path='/dashboard' element={<Dashboard/>}>
      <Route path='home' element={<Home/>}/>

      <Route path='color-suggestion' element={<ColorSuggestion/>}/>
      <Route path='seasonal-suggestion' element={<SeasonChoice/>}/>
      <Route path='action-color' element={<ActionColor/>}/>
      <Route path='add-color' element={<AddColor/>}/>
      <Route path='edit-suggestion/:id' element={<EditSuggestion/>}/>



      <Route path='collection' element={<Collections/>}/>
      <Route path='all-dresses' element={<AllDress/>}/>
      <Route path='tops' element={<Tops/>}/>
      <Route path='phants' element={<Phants/>}/>
      <Route path='tShirts' element={<Tshirts/>}/>
      <Route path='add-clothes' element={<AddClothes/>}/>
      <Route path='edit-clothes/:id' element={<EditClothes/>}/>


      <Route path='edit-date/:id' element={<EditDate/>}/>
      <Route path='event' element={<Events/>}/>
      <Route path='add-event' element={<AddDate/>}/>

      <Route path='users' element={<Users/>}/>
      <Route path='edit-user/:id' element={<EditUser/>}/>



      <Route path='*' element={<Navigate to="home"/>}/>
      <Route path='' element={<Navigate to="home"/>}/>
      
       


    </Route>

    
     
    <Route path='*' element={<Navigate to="landing-page"/>}/>


  </Routes>
  </BrowserRouter>

  </>
}

export default App;