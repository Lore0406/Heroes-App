import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-5'>
         <Routes>
            <Route exact='true' path="/marvel" element={ <MarvelScreen /> } />
            <Route exact='true' path="/hero/:heroId" element={ <HeroesScreen /> } />
            <Route exact='true' path="/dc" element={ <DcScreen /> } />
            <Route exact='true' path="/search" element={ <SearchScreen /> } />
            <Route index element = { <MarvelScreen />} />
            {/* Ruta por defecto */}
            <Route path="*" element={<Navigate to="/marvel" />} />
         </Routes>
      </div>
    </>
  )
}
