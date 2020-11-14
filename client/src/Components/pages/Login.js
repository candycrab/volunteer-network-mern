import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import { googleLogin } from "../../action/auth";
// logo
import logo from "../../images/logo.png";
import google from "../../images/google.png";

import GoogleLogin from "react-google-login";

const Login = ({ googleLogin, isAuth }) => {
   /* ! back and forward history */
   let history = useHistory();
   let location = useLocation();
   let { from } = location.state || { from: { pathname: "/" } };
   if (isAuth) {
      history.replace(from);
   }

   const responseGoogle = (response) => {
      googleLogin(response.profileObj);
   };

   return (
      <div className="py-50 login text-center">
         <div className="container">
            <Link to="/" className="logo">
               <img src={logo} alt="Logo" />
            </Link>
            <div className="login-container w-40 p-relative p-20">
               <div className="login-content w-100 middle">
                  <h1 className="heading">Login With</h1>

                  <GoogleLogin
                     clientId="18957343834-gsn0h52n0josanc0o15ppvoffp0cni34.apps.googleusercontent.com"
                     render={(renderProps) => (
                        <div
                           onClick={renderProps.onClick}
                           disabled={renderProps.disabled}
                           className="google flex w-85 p-5 mt-50 mb-30 cursor-pointer"
                        >
                           <img src={google} alt="Google" />
                           <p className="text-center w-100 f-500">
                              Continue with Google
                           </p>
                        </div>
                     )}
                     onSuccess={responseGoogle}
                     onFailure={responseGoogle}
                     isSignedIn={true}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { googleLogin })(Login);
