import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddTeam from './Components/AddTeam'
import ViewTeams from './Components/ViewTeams'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddTeam />}></Route>
          <Route path='/view-teams' element={<ViewTeams />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
