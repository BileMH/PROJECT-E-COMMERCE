import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/action/user";
import { loginAdmin } from "../redux/action/admin";

const Login = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(user)) && dispatch(loginAdmin(admin));
  };

  const [passwordShown] = useState(false);
  

  return (
    <>
     
      <Navbar />

      <div className="container my-3 py-3">
        <h1 className="text-center">CONNEXION CLIENT</h1>
        {isAuth ? (
          navigate("/")
        ) : isAuthAdmin ? (
          navigate("/")
        ) : (
          <div className="cadre2">
            <div className="cadre">
              <form onSubmit={handleUser}>
                <div className="my-3">
                  <label htmlFor="floatingInput">Adresse e-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="floatingPassword">Mot de passe</label>
                  <div>
                   
                    <input
                      type={passwordShown ? "text" : "password"}
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Mot de passe"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                  onClick={handleUser}
                  disabled={isAuth || isAuthAdmin}
                >
                  Connexion
                </button>
                <hr />
                <div className="my-3">
                  <p>
                    New Here?{" "}
                    <Link
                      to="/register"
                      className="text-decoration-underline text-info"
                    >
                      Register
                    </Link>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Login;
