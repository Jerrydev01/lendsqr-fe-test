import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import {
  AiOutlineBell,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineUser,
} from "react-icons/ai";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import user from "../../../assets/user.png";
import style from "./header.module.scss";

const Header = ({ showNav, handleShowNav, setShowNav }: any) => {
  const [showUser, setShowUser] = useState(false);

  const handleShowUser = () => {
    setShowUser(!showUser);
  };

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
        {/* mobile user profile */}
        <article className={style.user__mobile}>
          <div className="flex">
            <button>
              <AiOutlineSearch />
            </button>
            <button onClick={handleShowUser} className="">
              <AiOutlineUser />
              <span className="">
                {showUser ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
              </span>
            </button>
            {showUser ? (
              <div
                onClick={() => setShowUser(false)}
                className={style.user__modal}
              >
                <Link to="#">
                  <span className="">
                    {" "}
                    <img src={user} alt="" className="" />
                  </span>
                  <span className="">
                    <span className="">Adedeji</span>
                  </span>
                </Link>
                <Link to="#">
                  <span className="">
                    <HiOutlineClipboardDocument />
                  </span>
                  <span className="">Docs</span>
                </Link>

                <Link to="#">
                  <span className="">
                    <AiOutlineBell />
                  </span>

                  <span className="">Notification</span>
                </Link>
              </div>
            ) : null}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Header;
