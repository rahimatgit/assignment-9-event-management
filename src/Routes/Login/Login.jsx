import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(userCredential => {
                const currentUser = userCredential.user;
                navigate(location?.state?location.state : "/");
            })
            .catch(error => {
                const errorMessage = error.message;
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            navigate(location?.state?location.state : "/");
        })
        .catch(error => {
            const errorMessage = error.message;
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold mb-10">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p>Sign in with <Link onClick={handleGoogleSignIn} className="text-blue-600 font-semibold">Google</Link></p>
                            <p>New to this website? Go to <Link className="font-semibold text-blue-800" to='/register'>Register</Link> page.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;