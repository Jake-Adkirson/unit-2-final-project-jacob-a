import { useState, useEffect, useRef } from 'react';
import WelcomePage from './WelcomePage';

const SignInSignUp = () => {
    const name =  useRef(); //uses useRef, useState and local storage to simulate account sign up and sign in
    const email = useRef();
    const password = useRef();
    const age = useRef();
    const state = useRef();
    const prefWatercraft = useRef();
    const localSignIn = localStorage.getItem('signUp');
    const localEmail = localStorage.getItem('email');
    const localPassword = localStorage.getItem('password');
    const [showWelcome, setShowWelcome ] = useState(false);
    const [show, setShow] = useState(false);

    useEffect( () => {
        if(localSignIn){
            setShowWelcome(true);
        }
        if(localEmail){
            setShow(true);
        }
    })

    const handleClick = () => {
        if(email.current.value && password.current.value)
        {
            localStorage.setItem('name', name.current.value);
            localStorage.setItem('email', email.current.value);
            localStorage.setItem('password', password.current.value);
            localStorage.setItem('age', age.current.value);
            localStorage.setItem('prefWatercraft', prefWatercraft.current.value);
            localStorage.setItem('state', state.current.value);
            localStorage.setItem('signUp', email.current.value);
            alert('Account created successfully!');
        } else {
            alert('Please fill out all fields.');
        }
    }

    const handleSignIn = () => {
        if(email.current.value == localEmail && password.current.value == localPassword){
            localStorage.setItem("signUp", email.current.value);
            alert('Sign in successful.');
            window.location.reload();
        } else {
            alert('Please enter valid login.');
        }
    }

    return( //uses conditional formatting to redirect to welcome page once signed in and additional conditional formatting to display inputs for sign in or sign up
    <div>
        {showWelcome ? <WelcomePage /> :
        (show ?
        <div className="SignIn">
            <h2>Sign In</h2>
            <form>
                Email: <input required type="email" name="email" ref={email} placeholder="Enter email..." />
                Password: <input required type="password" name="password" ref={password} placeholder="Enter password..." />
                <br/>
                <button onClick={handleSignIn}>Sign In</button>
            </form>
        </div>
        : 
    <div className="SignUpHeader">
        <h2>Sign Up</h2>
        <div className="SignUp">
            <form>
                Name: <input required type="text" name="name" ref={name} placeholder="Enter name..." />
                <br/>
                Age: <input required type="text" name="age" ref={age} placeholder="Enter age..." />
                <br/>
                Preferred Watercraft: <input required type="text" name="prefWatercraft" ref={prefWatercraft} placeholder="Enter watercraft..." />
                <br/>
                State: <input required type="text" name="state" ref={state} placeholder="Enter state..." />
                <br/>
                Email: <input required type="email" name="email" ref={email} placeholder="Enter email..." />
                <br/>
                Password: <input required type="password" name="password" ref={password} placeholder="Enter password..." />
                <br/>
                <button onClick={handleClick}>Sign Up</button>
            </form>
        </div>
    </div>
        )} 
    </div>
    );
}

export default SignInSignUp;
