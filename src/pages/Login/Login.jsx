/* eslint-disable no-undef */
import anime from "animejs";
import { useRef } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../CustomHooks/useAuth";


const Login = () => {
    const { login} = useAuth();
    const formRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
       
        anime({
            targets: formRef.current,
            translateX: [0, 10, -10, 0], // shake animation
            duration: 500,
            easing: 'easeInOutQuad',
        });
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        // sign in
        login(email,password)
        .then(result=>{
           const user = result.user;
            console.log(user);
            form.reset()
            alert('logged in succes')
        })
        .catch(err=>{
            console.log(err.message);
        })


         }
    return (
        <div>

           <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form ref={formRef} onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white p-2 rounded-lg font-semibold hover:bg-indigo-700"
                >
                    login
                </button>
                <p>new here? <button><Link className='text-blue-800' to='/signup'>signup  here </Link></button> </p>
            </form>
        </div>
    </div>
           
        </div>
    );
};

export default Login;