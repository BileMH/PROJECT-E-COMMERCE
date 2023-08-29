// Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/action/user';
import { Navbar, Footer } from '../components';

const Register = () => {
  const [newUser, setNewUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log (newUser) ; // console
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(register(newUser));
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      {isAuth ? (
        navigate('/')
      ) : (
        <div className='cadre2'>
          <div className='cadres'>
            <Navbar />
            <div className="container my-3 py-3">
              <h1 className="text-center">Register</h1>
              <hr />
              <div className="row my-4 h-100">
                <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                  <form onSubmit={handleUser}>
                    <div className="form my-3">
                      <label htmlFor="Name">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        placeholder="Enter Your Name"
                        name="fullname"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form my-3">
                      <label htmlFor="Email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="Email"
                        placeholder="name@example.com"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form my-3">
                      <label htmlFor="Password">Password</label>
                      <input
                        type={passwordShown ? 'text' : 'password'}
                        className="form-control"
                        id="Password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                      />
                      <span onClick={togglePassword} className="password-toggle">
                        {passwordShown ? 'Hide' : 'Show'}
                      </span>
                    </div>
                    <div className="my-3">
                      <p>
                        Already have an account?{' '}
                        <Link to="/login" className="text-decoration-underline text-info">
                          Login
                        </Link>
                      </p>
                    </div>
                    <div className="text-center">
                      <button className="my-2 mx-auto btn btn-dark" type="submit">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
