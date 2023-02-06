import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

  let navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/")
    // navigate("/", {replace: true})
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

      {/* <Navigate /> */}
    </div>
  )
}
