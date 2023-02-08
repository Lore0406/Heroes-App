import React, { useContext } from 'react'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoutes } from './PrivateRoutes'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import { AuthContext } from '../auth/AuthContext'
import { PublicRoutes } from './PublicRoutes'


export const AppRouter = () => {

  const { user } = useContext(AuthContext)

  return (
    <Router>
    
      <Routes>
        {/* Rutas privadas - usuario registrado */}
        <Route element={<PrivateRoutes isAuthenticated={ user.logged } />}>
          <Route path="*" element={ <DashboardRoutes /> }/>
        </Route>
        {/* Ruta pública - redirige al usuario registrado*/}
        <Route element={<PublicRoutes isAuthenticated={ user.logged } />}>
          <Route exact='true' path="/login" element={ <LoginScreen /> }/>
        </Route>
        {/* Rutas abiertas - el acceso siempre es permitido */}
      </Routes>

    </Router>
  )
}
