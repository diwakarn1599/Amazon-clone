import { Link , useHistory } from 'react-router-dom';
import React ,{ useState} from 'react';
import './Login.css';
import {auth} from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>
    {
        e.preventDefault();
        // signin with firebase
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch(error => alert(error.message));
    }

    const register = e => 
    {
        e.preventDefault();
       
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                //on success
                alert("Amazon Account created successfully");
                if(auth)
                {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login" >
            <Link to="/">
                <img
                className="login_logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png' />
            </Link>

            <div className="login_container">

                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}  />
                    <h5>password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn}
                     className="login_signInButton">Sign In</button>
                </form>
                <p>
                By continuing, you agree to Diwakar's Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button type='submit' onClick={register} 
                 className="login_registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
