import React from 'react'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'

import {
   BrowserRouter as Router,
   Routes,
   Route,
 } from "react-router-dom"


export const AppRouter = () => {
  return (
    <Router>
    
      <Routes>
         {/* El path en el caso de los dashboards no puede ser "/" tiene que ser el asterisco */}
         <Route path="*" element={ <DashboardRoutes /> }/>
         <Route exact='true' path="/login" element={ <LoginScreen /> }/>
         {/* Ruta por defecto
         <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>

    </Router>
  )
}
