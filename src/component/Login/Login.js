import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h1>Please Login</h1>

            <button onClick={signInUsingGoogle} className="btn btn-info ">Google sing In</button>
        </div>
    );
};

export default Login;