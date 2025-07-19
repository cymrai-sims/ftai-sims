import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

// Images
import logo from "../assets/Images/ftai-aviation.avif";
import software from "../assets/Images/software.png";

const Login = () => {
  const { loginUser, loading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Authentication loading state
  if (loading) {
    return (
      <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
    );
  }

  // Redirect if user is already logged in
  if (user) {
    navigate("/");
  }

  // Handle form submission for user login
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error.message));

    e.target.reset();
  };

  // Login Form
  return (
    <div>
      <div className="w-full h-screen login">
        <div className="flex flex-row items-center justify-center h-full">
          
          <div className="w-2/5 px-10">
            <div className="card-body">
              <div className="flex flex-row items-center justify-center gap-5 mb-10 pb-16">
                <img src={logo} alt="FTAI Logo" className="h-20" />
                <h4 className=" text-2xl"><span className='font-bold'>FTAI</span> AVIATION</h4>
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className="form-control flex flex-col justify-center mb-4 gap-2">
                  <label className="label">
                    <span className="label-text text-2xl pb-5 text-[var(--dark-main)]">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered outline-1 outline-[var(--blue-main)] p-3 text-3xl"
                  />
                </div>
                <div className="form-control flex flex-col justify-center my-4 pt-5 gap-2">
                  <label className="label">
                    <span className="label-text text-2xl pb-5 text-[var(--dark-main)]">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered outline-1 outline-[var(--blue-main)] p-3 text-3xl"
                  />
                </div>
                <div className="form-control pt-10">
                  <button className="btn bg-[var(--orange-main)] text-white w-full text-3xl p-5 hover:bg-[var(--blue-main)] focus:outline-none focus:ring-2 focus:ring-[var(--orange-main)] transition-all duration-300">Login</button>
                </div>
              </form>
            </div>
          </div>
          <div className="login-bg w-3/5 h-full text-center text-white flex flex-col justify-center items-center">
            <img src={software} alt="Software Image" className="w-3/5 h-3/5 object-cover" />
            <h3><span className="font-bold">FTAI</span> AVIATION</h3>
            <p className="py-2">
              Smart Inventory Management System
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;