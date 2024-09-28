import anime from 'animejs';
import { useRef } from 'react';
import useAuth from '../../CustomHooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {createUser} = useAuth();
    const from = location.state?. from?.pathname || '/';

    

    const formRef = useRef(null);

    const handleSubmit = (e) => {
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

    //  creating user
       createUser(email,password)
       .then(result=>{
        const user = result.user;
        // console.log('user created',user);
        Swal.fire({
            title: `{user} successfully signed up`,
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from, {replace:true})
       })
       .catch(err=>{
        console.log(err);
       })

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
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
                    Sign Up
                </button>
                <p>Already have an account? <button><Link className='text-blue-800' to='/login'>login here </Link></button> </p>
            </form>
        </div>
    </div>

    );
};

export default SignUp;