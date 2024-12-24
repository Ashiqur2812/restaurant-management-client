import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const registerUser = { name, email, password, photoURL };
        console.log(registerUser);

        createUser(email, password)
            .then(res => {
                console.log(res.user);
            })
            .catch(error => {
                console.log('ERROR', error.message);
            });
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 to-pink-600">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md animate__animated animate__fadeInUp">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                        Create Your Account
                    </h1>
                    <form onSubmit={handleRegister}>
                        {/* Name Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* PhotoURL Field */}
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
                            <input
                                type="url"
                                name="photoURL"
                                placeholder="Enter your photo URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn btn-primary w-full animate__animated animate__pulse"
                        >
                            Register
                        </button>
                    </form>

                    {/* Divider and Navigation */}
                    <div className="divider my-6">OR</div>
                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;