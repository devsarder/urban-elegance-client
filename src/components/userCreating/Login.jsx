import { Link, useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
  const { signInUser, users } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(signInUser);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        if (user) {
          navigate("/");
        }
        form.reset("");
      })
      .catch((error) => {
        const err = error.message;
        const errCode = err.code;
        console.log(errCode, err);
      });
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="w-1/3 mx-auto">
        <h2 className="text-center text-2xl font-semibold my-2">
          Login your account
        </h2>
        <form onSubmit={handleSignIn}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-amber-600">Login</button>
              </div>
              <hr />
              <Link className="btn text-white bg-amber-800">
                <button>Login With Google </button>
              </Link>
            </div>
          </div>
        </form>
        <p className="my-2 text-center">
          Do not have an account?Please
          <Link className="underline text-amber-700  " to="/register">
            Register
          </Link>
        </p>
      </div>
      {/* <div className="text-center  text-red-700 text-lg">
        <p className={user && "hidden "}>{validation}</p>
      </div> */}
    </div>
  );
};

export default Login;
