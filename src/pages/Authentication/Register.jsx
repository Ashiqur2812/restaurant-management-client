import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import pic from '../../assets/photo-1555396273-367ea4eb4db5-ixlib-rb-1-2.jpg';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const from = location?.state || '/';
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const registerUser = { name, email, password, photoURL };

        // Password validation
        if (!/[A-Z]/.test(password)) {
            return Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password must contain at least one uppercase letter.',
                showClass: {
                    popup: 'animate__animated animate__shakeX'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                }
            });
        }
        if (!/[a-z]/.test(password)) {
            return Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password must contain at least one lowercase letter.',
                showClass: {
                    popup: 'animate__animated animate__shakeX'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                }
            });
        }
        if (password.length < 6) {
            return Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password must be at least 6 characters long.',
                showClass: {
                    popup: 'animate__animated animate__shakeX'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                }
            });
        }

        createUser(email, password)
            .then(res => {
                Swal.fire({
                    title: "Sign up successful!!!",
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
                    title: "Something went wrong!",
                    text: error.message,
                    showClass: {
                        popup: 'animate__animated animate__shakeX'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    }
                });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${pic})` }}>
            <div className="bg-black bg-opacity-70 backdrop-blur-md shadow-2xl rounded-lg p-8 w-full max-w-md animate__animated animate__fadeInUp">
                <h1 className="text-4xl font-bold text-center text-white mb-6">
                    Join Us Today
                </h1>
                <form onSubmit={handleRegister} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label className="block text-white text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full p-3 border border-gray-600 rounded-lg bg-black bg-opacity-50 text-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-white text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-600 rounded-lg bg-black bg-opacity-50 text-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-white text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-600 rounded-lg bg-black bg-opacity-50 text-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300"
                            required
                        />
                    </div>

                    {/* PhotoURL Field */}
                    <div>
                        <label className="block text-white text-sm font-bold mb-2">Photo URL</label>
                        <input
                            type="url"
                            name="photoURL"
                            placeholder="Enter your photo URL"
                            className="w-full p-3 border border-gray-600 rounded-lg bg-black bg-opacity-50 text-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all duration-300"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full border border-gray-600 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-gold-500 to-gold-700 hover:from-gold-600 hover:to-gold-800 transition-all duration-500 animate__animated animate__pulse animate__infinite hover:animate-none"
                    >
                        Register
                    </button>
                </form>

                {/* Divider and Navigation */}
                <div className="divider my-6">
                    <span className="text-white">OR</span>
                </div>
                <p className="text-center text-sm text-gray-300">
                    Already have an account?
                    <Link to="/login" className="ml-1 text-gold-500 hover:underline">
                        Login here
                    </Link>
                    <br />
                    <Link to="/" className="text-gold-500 hover:underline">
                        Go Home
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;