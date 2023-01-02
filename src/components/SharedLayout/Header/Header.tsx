import React from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import {
  AiOutlineBell,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFillCaretDownFill } from "react-icons/bs";
import user from "../../../assets/user.png";
import style from "./header.module.scss";

const Header = ({ showNav, handleShowNav, setShowNav }: any) => {
  return (
    <section>
      <div className={`flex ${style.user}`}>
        <div className={`flex ${style.user__left}`}>
          <div className={`${style.user__bar}`}>
            <button onClick={handleShowNav} className="">
              {showNav ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
            <img src={logo} alt="" className="logoImage" />
          </div>
          <div className={`flex ${style.user__search}`}>
            <input
              id="search"
              type="text"
              className=""
              placeholder="Search for anything"
            />
            <label htmlFor="search" className="">
              <AiOutlineSearch />
            </label>
          </div>
        </div>
        <article className={`flex ${style.user__right}`}>
          <Link to="/">
            <span className="">Docs</span>
          </Link>
          <div className="">
            <AiOutlineBell />
          </div>
          <div className="">
            <img src={user} alt="" className="" />
          </div>
          <div className={`flex ${style.user__name}`}>
            <span className="">Adedeji</span>
            <BsFillCaretDownFill />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Header;
