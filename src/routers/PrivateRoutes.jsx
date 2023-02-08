import { Navigate, Outlet, useLocation } from "react-router-dom"
import PropTypes from 'prop-types'

export const PrivateRoutes = ({
   isAuthenticated,
   children
}) => {
   const location = useLocation()

   localStorage.setItem("lastPathname", location.pathname)
   
   if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
   }
  
   return children ? children : <Outlet />;

}

PrivateRoutes.propTypes = {
   isAuthenticated: PropTypes.bool.isRequired,
}

