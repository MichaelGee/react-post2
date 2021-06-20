import { useHistory } from 'react-router-dom';
import {useForm } from 'react-hook-form';
import '../styles/register.css';

const Register = () => {

    const { register, handleSubmit } = useForm();

    const history = useHistory();
    
    const registerUser = ({ userName, email, password, confirmPassword}) => {
        
        if(password !== confirmPassword) {
            return alert('Password do not match')
        } 
        
        if (!email || !userName) {
            return alert("please enter a value")
        }
        // to check if user has already been registered.
        let userFound = localStorage.getItem(email);
        if(userFound) {
            return alert('You have already been registered. Please log in instead')
        }
        
        // this creates new users and saves their data to local storage
        const newUser = JSON.stringify({
            email: email,
            password: password
        })
        //the key is the users email and the object is the new user
        localStorage.setItem(newUser.email, newUser);
        alert('Hurray!!! You have been registered. ^_^')
    
    
        history.push('./home');

    }
  
    return (
        <>
        <div id="login-box">
            <div className="left">
                <h1> Register </h1>
                
            {/* <form onSubmit={handleSubmit(registerUser)}> */}
        <form onSubmit={handleSubmit(registerUser)}>
                <input
                 type="text"
                 name="username"
                 placeholder="Username"
                 className='input-box'
                 {...register("userName", { required: true })}
                />

                <input
                 type="text"
                 name="email" 
                placeholder="E-mail"
                 className='input-box'
                 {...register("email", { required: true })}

                />

                <input
                 type="password"
                 name="password"
                 placeholder="Password" 
                className='input-box'
                {...register("password", { required: true })}

                />

                <input
                 type="password"
                 name="password2"
                 placeholder="Retype password"
                 className='input-box'
                  {...register("confirmPassword", { required: true })}

                />

                <button id='btn' 
                type="submit"
                onClick={registerUser}
                > Register Me </button>

                <div>
                <a href="/login" id='old-user'> I already have an account </a>
                </div>
            </form>
            </div>
        </div>
    </>
    )

    }

export default Register;
