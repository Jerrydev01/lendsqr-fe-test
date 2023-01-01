import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import style from "./sharedLayout.module.scss";

const SharedLayout = ({ children }: any) => {
  return (
    // dashboard layout

    <main>
      <main className="">
        <div className="">
          <Header />
        </div>
        <div className={`flex ${style.user}`}>
          <div className={style.user__menu}>
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
