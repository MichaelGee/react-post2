
import '../styles/register.css';

import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm()
    
    const history = useHistory();

    const loginUser = ({ email, password}) => {

        if(!email || !password) {
            alert('Please enter a valid email address')
        }

        // check if users exist
        const user = localStorage.getItem(email);

        if(!user) {
            return alert("No Account Found. Please Register.")
        }

       

        //  this converts our stringified json data to an object
        const userdata = JSON.parse(user);

        if(password !== userdata.password) {
            alert('Email or Password is incorrect')
        }
        alert('Log in successful')
        history.push('./home');

    }

       return (
        <> 
         <div id="login-box">
            <div className="left">
                <h1>Welcome Back :) </h1>
            <form onSubmit={handleSubmit(loginUser)}>
                <input
                 type="text"
                 name="username"
                 placeholder="Username"
                 className='input-box'
                 {...register('userName', {required: true })}
                />

                <input
                 type="text"
                 name="email" 
                placeholder="E-mail"
                 className='input-box'
                 {...register('email', {required: true })}
                />

                <input
                 type="password"
                 name="password"
                 placeholder="Password" 
                className='input-box'
                {...register('password', {required: true })}
                />
               

                <button id='btn' type='submit' > Log Me In</button>

                <div>
                <a href="/register" id='old-user'> New User? Register Me </a>
                </div>
            </form>
            </div>
        </div>
        
        </>
    )
}
    

export default Login
