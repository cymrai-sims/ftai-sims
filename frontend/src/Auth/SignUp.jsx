import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser, user, loading } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  // ✅ Properly redirect only after render
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
        });
        console.log("User created:", result);
      })
      .catch((error) => {
        console.error("Error during sign-up:", error);
      });

    e.target.reset();
  };

  if (loading) {
    return (
      <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="card w-full max-w-sm shadow-2xl bg-gray-900 text-white p-6">
        <h2 className="text-2xl mb-4 text-center">Register Here</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input type="text" name="name" className="input input-bordered bg-black text-white border-white" />
          </div>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input type="email" name="email" className="input input-bordered bg-black text-white border-white" />
          </div>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input type="password" name="password" className="input input-bordered bg-black text-white border-white" />
          </div>
          <div className="form-control">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
