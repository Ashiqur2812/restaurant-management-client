import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import pic from '../../assets/Register-pic.jpg';

const Login = () => {
    const { signInUser, googleAuth } = useContext(AuthContext);
    const location = useLocation();
    const from = location?.state || '/';
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginUser = { email, password };

        signInUser(email, password)
            .then(res => {
                Swal.fire({
                    title: "Login successful!!!",
                    icon: "success",
                    showClass: {
                        popup: 'animate__animated animate__bounceIn'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!!!",
                    showClass: {
                        popup: 'animate__animated animate__shakeX'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    }
                });
            });
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await googleAuth();
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {
                email: result?.user?.email
            });

            Swal.fire({
                title: "Login successful!!!",
                icon: "success",
                showClass: {
                    popup: 'animate__animated animate__bounceIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                }
            });
            navigate(from, { replace: true });
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Something went wrong!!!",
                showClass: {
                    popup: 'animate__animated animate__shakeX'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                }
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center " style={{ backgroundImage: `url(${pic})` }}>
            <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-2xl rounded-lg p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900">Welcome Back!</h1>
                    <p className="text-slate-900 mt-2">Login to your account</p>
                </div>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 transition-all duration-500 ease-in-out transform hover:scale-105 animate__animated animate__pulse animate__infinite hover:animate-none"
                    >
                        Login
                    </button>
                </form>
                <div className="divider my-6">OR</div>
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full bg-white text-gray-700  py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-200 transition-all duration-300 flex items-center justify-center "
                >
                    <svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 64 64"
                        height="32px"
                        width="24px"
                    >
                        <g fill-rule="evenodd" fill="none" stroke-width="1" stroke="none">
                            <g fill-rule="nonzero" transform="translate(3.000000, 2.000000)">
                                <path
                                    fill="#4285F4"
                                    d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
                                ></path>
                                <path
                                    fill="#34A853"
                                    d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
                                ></path>
                                <path
                                    fill="#FBBC05"
                                    d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
                                ></path>
                                <path
                                    fill="#EB4335"
                                    d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
                                ></path>
                            </g>
                        </g>
                    </svg>
                    <span className='pl-3'>Sign In with Google</span>
                </button>
                <p className="text-center mt-6 text-sm text-black">
                    Don’t have an account?{' '}
                    <Link to="/register" className="text-black hover:underline">
                        Register here
                    </Link>
                    <br />
                    <Link to="/" className="text-black ml-2 hover:underline">
                        Go Home
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;