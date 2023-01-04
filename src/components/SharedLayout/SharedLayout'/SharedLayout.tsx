import React, { useState } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import style from "./sharedLayout.module.scss";

interface Iprops {
  children: React.ReactNode;
}

const SharedLayout = ({ children }: Iprops) => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    // dashboard layout

    <main>
      <main className="">
        <div className="">
          <Header
            showNav={showNav}
            handleShowNav={handleShowNav}
            setShowNav={setShowNav}
          />
        </div>
        <div className={`flex ${style.user}`}>
          <div
            className={`${style.user__menu} ${
              showNav ? style.user__menuShow : style.user__menuHide
            }`}
          >
            <NavMenu />
          </div>
          <div className="">{children}</div>
          <Outlet />
        </div>
      </main>
    </main>
  );
};

export default SharedLayout;
