import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './pages/Users/Users'
import UserDetails from './pages/UserDetails/UserDetails'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='users' element={<Users />} /> 
            <Route path="users/:userId" element={<UserDetails />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
