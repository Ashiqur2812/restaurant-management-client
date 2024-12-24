import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signInUser, googleAuth } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginUser = { email, password };
        console.log(loginUser);
        signInUser(email, password)
            .then(res => {
                console.log(res.user);
            })
            .catch(error => {
                console.log('ERROR', error.message);
            });
    };


    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md ">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
                    </div>
                    <form onSubmit={handleLogin}>
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
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="btn bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full hover:animate-pulse"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="divider my-6">OR</div>
                    <button onClick={googleAuth}
                        class="bg-[linear-gradient(#e9e9e9,#e9e9e9_50%,#fff)] group w-50 h-16 inline-flex transition-all duration-300 overflow-visible p-1 w-full rounded-full group"
                    >
                        <div
                            class="w-full h-full bg-[linear-gradient(to_top,#ececec,#fff)] overflow-hidden shadow-[0_0_1px_rgba(0,0,0,0.07),0_0_1px_rgba(0,0,0,0.05),0_3px_3px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.12)] p-1 rounded-full hover:shadow-none duration-300"
                        >
                            <div
                                class="w-full h-full text-xl gap-x-0.5 gap-y-0.5 justify-center text-[#101010] bg-[linear-gradient(#f4f4f4,#fefefe)] group-hover:bg-[linear-gradient(#e2e2e2,#fefefe)] duration-200 items-center text-[18px] font-medium gap-4 inline-flex overflow-hidden px-4 py-2 rounded-full black group-hover:text-blue-600"
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
                                <span class="ml-2">Sign In with Google</span>
                            </div>
                        </div>
                    </button>
                    <p className="text-center mt-4 text-sm text-gray-600">
                        Don’t have an account?{' '}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>

        // <div className='bg-base-200'>
        //     <div className="flex justify-center items-center h-full py-12 w-full">
        //         <div className="grid gap-8">
        //             <section id="back-div" className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl">
        //                 <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2">
        //                     <h1 className="text-5xl font-bold text-center cursor-default dark:text-gray-300 text-gray-900">
        //                         Log in
        //                     </h1>
        //                     <form onSubmit={handleLogin} className="space-y-6">
        //                         <div>
        //                             <label htmlFor="email" className="block mb-2 text-lg dark:text-gray-300">Email</label>
        //                             <input name="email" className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300" type="email" placeholder="Email" required />
        //                         </div>
        //                         <div>
        //                             <label htmlFor="password" className="block mb-2 text-lg dark:text-gray-300">Password</label>
        //                             <input name="password" className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300" type="password" placeholder="Password" required />
        //                         </div>
        //                         <button className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">
        //                             LOG IN
        //                         </button>
        //                     </form>
        //                     <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
        //                         <p>
        //                             Don't have an account?
        //                             <Link to='/register' className="text-blue-400 transition hover:underline">Sign Up</Link>
        //                         </p>
        //                     </div>
        //                     <div id="third-party-auth" className="flex justify-center gap-4 mt-5">
        //                         <button onClick={googleAuth} className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
        //                             <img className="w-6 h-6" loading="lazy" src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/" alt="Google" />
        //                         </button>
        //                         <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
        //                             <img className="w-6 h-6" loading="lazy" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/" alt="LinkedIn" />
        //                         </button>
        //                         <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
        //                             <img className="w-6 h-6 dark:invert" loading="lazy" src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/" alt="GitHub" />
        //                         </button>
        //                         <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
        //                             <img className="w-6 h-6" loading="lazy" src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/" alt="Facebook" />
        //                         </button>
        //                         <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
        //                             <img className="w-6 h-6" loading="lazy" src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/" alt="Twitter" />
        //                         </button>
        //                         <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
        //                             <img className="w-6 h-6" loading="lazy" src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/" alt="Apple" />
        //                         </button>
        //                     </div>
        //                     <div className="mt-4 text-center text-sm text-gray-500">
        //                         <p>
        //                             By signing in, you agree to our
        //                             <Link className="text-blue-400 transition hover:underline">Terms</Link>
        //                             and
        //                             <Link className="text-blue-400 transition hover:underline">Privacy Policy</Link>.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </section>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Login;