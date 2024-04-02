import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";
import { authenticateReducer } from "../redux/reducers/authenticateReducer";

const Navbar = ({ authenticate, setAuthenticate }) => {
  // const authenticate = useSelector((state) => state.auth.authenticate);
  // const dispatch = useDispatch();
  // const setAuthenticate = () => {
  //   dispatch((authenticate = false));
  //   navigate("/");
  // };
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    " H&M Home",
    "Sale",
    "지속가능성",
  ];
  let [width, setWidth] = useState(0);
  let navigate = useNavigate();

  // const goToLogin = () => {
  //   navigate("/login");
  // };
  const goHome = () => {
    navigate("/");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>

      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>

      {/* <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div className="login-text" onClick={goToLogin}>
            로그인
          </div>
        </div>
      </div> */}
      <div className="nav-section">
        <img
          width={100}
          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYt80C%2FbtqDeJAYUBo%2FJQbTuukRladq2AUOeqgiEK%2Fimg.jpg"
          onClick={goHome}
        />
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li>
              <a href="#" key={index}>
                {menu}
              </a>
            </li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input
            className="search-input"
            type="text"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
