import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddTeam from './Components/AddVehicle'
import ViewBookings from './Components/ViewBookings'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddTeam />}></Route>
          <Route path='/view-bookings' element={<ViewBookings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
