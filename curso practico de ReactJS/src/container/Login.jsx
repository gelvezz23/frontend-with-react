import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GoogleIcon from '../assets/image/icons8-google-50.png';
import TwitterIcon from '../assets/image/icons8-twitter-50.png';
import '../assets/styles/components/Login.scss';
import { loginRequest } from '../actions';

const Login = (props) => {
    const [form, setValues] = useState({
        email:'',
    });   
    // Capturar valor del input y enviar lo al estado con hooks
    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name] : event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }

    return(
        
        <section className="login">
            <section className="login__container">
                <h2>Inicia sesion</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input
                        name="email" 
                        className="input--login" 
                        type="text" 
                        placeholder="Correo"
                        onChange={handleInput}
                    />
                    <input
                        name="password" 
                        className="input--login" 
                        type="password" 
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                    <button className="button">Iniciar sesión</button>
                    <div className="login__container--remmenber">
                        <label>
                            <input type="checkbox" name="" id="cbox1" className="" value="checkbos"/> Recuerdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    
                        <div><img src={GoogleIcon} alt="Google"/>Iniciar sesion con Google</div>
                        <div><img src={TwitterIcon} alt="Twitter"/>Iniciar sesion con Twitter</div>   

                </section>
                <p className="login__container--register">No tienes cuenta 
                <Link to="/register"> Registrate</Link></p>

            </section>
        </section>
    );
}

const mapDispatchToProps = {
    loginRequest,
};

//export default Login;
export default connect(null, mapDispatchToProps)(Login);