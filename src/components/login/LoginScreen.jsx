import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "../../auth/AuthContext"
import { types } from "../../types/types"

export const LoginScreen = () => {

  let navigate = useNavigate()

  const { dispatch } = useContext( AuthContext )

  const pathToGo = localStorage.getItem("lastPathname") || "/"

  const handleClickLogin = () => {
    
    dispatch(
      // definimos action dentro de dispatch
      { 
        type: types.login,
        payload: {
          name: 'Osito'
        } 
      }
    )
    // definimos el path al hacer clic en login 
    navigate(pathToGo, {replace: true})
  }


  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={ handleClickLogin }
      >
        Login
      </button>

    </div>
  )
}
