import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {
  const { users,  createUser } = useContext(AuthContext);
  console.log(users);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredentials) => {
        const newUser = userCredentials.user;
        // setUsers(newUser);
        console.log(newUser);
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(email, password);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-1/3 mx-auto">
        <h2 className="text-center text-2xl font-semibold my-2">
          Register your account
        </h2>
        <form onSubmit={handleRegister}>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-amber-600">Register</button>
              </div>
            </div>
          </div>
        </form>
        <p className="my-2 text-center">
          Already have an account?Please
          <Link className="underline text-amber-700  " to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
