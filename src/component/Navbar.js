import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menulist = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    " H&M Home",
    "Sale",
    "지속가능성",
  ];
  return (
    <>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYt80C%2FbtqDeJAYUBo%2FJQbTuukRladq2AUOeqgiEK%2Fimg.jpg"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menulist.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div>
          <FontAwesomeIcon icon={faSearch} />
          <input className="search-input" type="text" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
