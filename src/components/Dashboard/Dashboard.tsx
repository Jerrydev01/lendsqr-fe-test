import React from "react";
import style from "./dashboard.module.scss";
import img1 from "../../assets/dashboard/icon1.svg";
import img2 from "../../assets/dashboard/icon2.svg";
import img3 from "../../assets/dashboard/icon3.svg";
import img4 from "../../assets/dashboard/icon4.svg";
import TableData from "./TableData/TableData";

interface totalUsersType {
  id: number;
  name: string;
  icon: string;
  count: string;
}

const totalUsers: totalUsersType[] = [
  {
    id: 1,
    name: "Users",
    icon: img1,
    count: "2,453",
  },
  {
    id: 2,
    name: "Active Users",
    icon: img2,
    count: "2,453",
  },
  {
    id: 3,
    name: "Users with Loans",
    icon: img3,
    count: "12,453",
  },
  {
    id: 4,
    name: "Users with Savings",
    icon: img4,
    count: "102,453",
  },
];

const DashboardCpn = () => {
  return (
    <section className="full-width">
      <div className={`${style.dashboard} full-width`}>
        <h4 className="">Users</h4>
        <div className={`${style.dashboard__users} full-width`}>
          {totalUsers.map((user) => {
            return (
              <div key={user.id} className={`${style.dashboard__users__item} full-width`}>
                <div className={`${style.dashboard__users__item__icon}`}>
                  <img src={user.icon} alt="" />
                </div>
                <div className={`${style.dashboard__users__item__name}`}>
                  <h4>{user.name}</h4>
                </div>
                <div className={`${style.dashboard__users__item__count}`}>
                  <h2>{user.count}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <section className="">
          <TableData />
        </section>
      </div>
    </section>
  );
};

export default DashboardCpn;
