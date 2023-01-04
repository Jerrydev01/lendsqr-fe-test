import React from "react";
import style from "./navMenu.module.scss";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import img21 from "../../../assets/navmenu/home.svg";
import img9 from "../../../assets/navmenu/briefcase.svg";

import { navLink } from "../../../utils/navlink";
import { BsChevronDown } from "react-icons/bs";

interface Iprops {
  showNav: boolean;
  handleShowNav: () => void;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMenu = () => {
  const location = useLocation();
  const path = location.pathname;

  const { userId } = useParams();

  return (
    <section className={`${style.navMenu} `}>
      <div className="">
        <nav className="">
          <ul className="">
            <Link to="/">
              <li className={`flex ${style.navMenu__switch}`}>
                <img src={img9} alt="" />
                <span className="">Switch Organization</span>
                <span className="">
                  <BsChevronDown />
                </span>
              </li>
            </Link>
            <Link to="/">
              <li className={`flex ${style.navMenu__switch}`}>
                <img src={img21} alt="dashboard" />
                <span className="">Dashboard</span>
              </li>
            </Link>
            <li className=""></li>
            <h3 className="">Customers</h3>
            {navLink.customers.map((item, index) => (
              <Link key={item.name} to={`${item.link}`}>
                <li
                  className={`flex ${style.navMenu__links} ${
                    path === item.link ||
                    (path.includes("/users") && item.link === "/dashboard") ||
                    (path.includes(`/${userId}`) && item.link === "/dashboard")
                      ? style.navMenu__active
                      : style.navMenu__inactive
                  }`}
                >
                  <img src={item.icon} alt={item.name} />
                  <span className="">{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>

          <ul className="">
            <h3 className="">Business</h3>
            {navLink.business.map((item, index) => (
              <Link key={item.name} to={`${item.link}`}>
                <li
                  className={`flex ${style.navMenu__links} ${
                    path === item.link
                      ? style.navMenu__active
                      : style.navMenu__inactive
                  }`}
                >
                  <img src={item.icon} alt={item.name} />
                  <span className="">{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>

          <ul className="">
            <h3 className="">Settings</h3>
            {navLink.setting.map((item, index) => (
              <Link key={item.name} to={`${item.link}`}>
                <li
                  className={`flex ${style.navMenu__links} ${
                    path === item.link
                      ? style.navMenu__active
                      : style.navMenu__inactive
                  }      
                  ${
                    path.includes(`/dashboard/${userId}`)
                      ? path.includes("/system")
                      : item.link !== "/system"
                      ? "show"
                      : "hide"
                  }
                    `}
                >
                  <img src={item.icon} alt={item.name} />
                  <span className="">{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>
          <ul className="">
            {navLink.logout.map((item, index) => (
              <Link key={item.name} to={`${item.link}`}>
                <li
                  className={`flex ${style.navMenu__links} ${
                    style.navMenu__logout
                  } ${
                    path === item.link
                      ? style.navMenu__active
                      : style.navMenu__inactive
                  }      
                  ${
                    path.includes(`/dashboard/${userId}`)
                      ? path.includes("/logout")
                      : item.link !== "/logout"
                      ? "show"
                      : "hide"
                  }
                    `}
                >
                  <img src={item.icon} alt={item.name} />
                  <span className="">{item.name}</span>
                </li>
              </Link>
            ))}

            <li
              className={`flex ${style.navMenu__links} ${
                style.navMenu__version
              } ${path.includes(`/dashboard/${userId}`) ? "show" : "hide"}`}
            >
              v1.2.0
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default NavMenu;
