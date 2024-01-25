import { NavLink } from "react-router-dom";
import ProfileMenu from "../modals/ProfileMenu";
import SigninModal from "../modals/SigninModal";
import { useContext, useEffect, useState } from "react";
import SignupModal from "../modals/SignupModal";
import FirebaseServices from "../services/FirebaseServices";
import  {AuthContext } from "../context/ AuthStore";

const Navbar = () => {
  // const { auth, setAuth } = useContext(AuthContext);
  const [isSigninModal, setIsSigninModal] = useState(false);
  const [isSignupModal, setIsSignupModal] = useState(false);
  const [userstate, setUserstate] = useState(null);

  useEffect(() => {
    const state = FirebaseServices.stateChanged((user) => {
      if (user) {
        setUserstate(user.email);
        
      } else {
        setUserstate(null);
        return null;
      }
    });
  }, []);

  const openSigninModal = () => {
    setIsSigninModal(true);
  };
  const closeSigninModal = () => {
    setIsSigninModal(false);
  };
  const openSignupModal = () => {
    setIsSignupModal(true);
  };
  const closeSignupModal = () => {
    setIsSignupModal(false);
  };

  const userLogout = () => {
    setUserstate(null);
    FirebaseServices.logout();
    // console.log("auth value on logout",auth)
    // setAuth(!auth);
  };

  return (
    <nav className=" text-2xl bg-blue-500 flex justify-end gap-4 p-4 items-center">
      <NavLink to="/" className="text-white hover:text-gray-300 px-4  ">
        Employee
      </NavLink>
      <NavLink to="/user" className="text-white hover:text-gray-300 px-4">
        User
      </NavLink>

      {userstate == null ? (
        <>
          <button
            className="  border-none p-2 bg-red-500 text-white rounded-xl text-md hover:bg-black  "
            onClick={openSigninModal}
          >
            Login
          </button>
          <button
            className="  border-none p-2 bg-red-500 text-white rounded-xl text-md hover:bg-black  "
            onClick={openSignupModal}
          >
            SignUp
          </button>
          {isSigninModal && <SigninModal closeSigninModal={closeSigninModal} />}
          {isSignupModal && (
            <SignupModal closeSignupModal={closeSignupModal} />
          )}{" "}
        </>
      ) : (
        <>
          <button
            onClick={userLogout}
            className="  border-none p-2 bg-red-500 text-white rounded-xl text-md hover:bg-black  "
          >
            logout
          </button>
          <ProfileMenu useremail={userstate} />
        </>
      )}
    </nav>
  );
};

export default Navbar;
