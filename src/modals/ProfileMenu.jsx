import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileMenu = ({useremail}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" relative cursor-pointer">
      <div className="flex items-center" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faUser} size="lg" />
      </div>

      {isMenuOpen && (
        <div className="absolute top-full right-0 bg-white border border-gray-400 p-5 shadow-md z-10">
          
           
           <p>{useremail}</p>
           
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
