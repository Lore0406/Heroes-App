import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
         <Routes>
            <Route exact='true' path="/marvel" element={ <MarvelScreen /> } />
            <Route exact='true' path="/heroe/:heroeId" element={ <HeroesScreen /> } />
            <Route exact='true' path="/dc" element={ <DcScreen /> } />
            <Route index element = { <MarvelScreen />} />
            {/* Ruta por defecto */}
            <Route path="*" element={<Navigate replace to="/marvel" />} />
         </Routes>
      </div>
    </>
  )
}
