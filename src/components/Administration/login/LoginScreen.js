import {useNavigate} from 'react-router-dom';


export const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    //Replace replaza la pantalla en vez de crear un historico. asi no se puede volver al login una vez ingresado
    navigate('/', {
      replace: true,
    });
  }

    return (
      <div className="container mt-5">
          <h1>LoginScreen</h1>
          <hr/>

          <button 
          className="btn btn-outline-primary"
          onClick={handleLogin}
          >
            Login
          </button>
      </div>
    )
  }
  