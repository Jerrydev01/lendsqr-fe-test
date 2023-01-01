import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import style from "./dashboardUser.module.scss";
import { BsArrowLeft } from "react-icons/bs";
import { formatMoney } from "../../../utils/currencyFormatter";
import { UserTypes } from "../../../type/type";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import GeneralDetail from "./Details/GeneralDetail";

interface Ilist {
  id: number;
  name: string;
}

const list: Ilist[] = [
  {
    id: 1,
    name: "General Details",
  },
  {
    id: 2,
    name: "Documents",
  },
  {
    id: 3,
    name: "Bank Details",
  },
  {
    id: 4,
    name: "Loans",
  },
  {
    id: 5,
    name: "Savings",
  },
  {
    id: 6,
    name: "App and System",
  },
];

const DashboardUser = () => {
  const [data, setData] = useState<UserTypes["datum"]>();
  const [active, setActive] = useState(1);
  const { userId } = useParams();

  // await function  to fetch data with axios
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  return (
    <section className={style.dashboard}>
      <section className={`padding__child ${style.singleUser}`}>
        <div>
          <Link className={`${style.singleUser__header}`} to="/dashboard">
            <span className="">
              <BsArrowLeft />
            </span>
            <span className="">Back to Users</span>
          </Link>
        </div>
        <div className={style.singleUser__main_header}>
          <h3 className="">User Details</h3>
          <div className="">
            <button className="">Blacklist User</button>
            <button className="">Activate User</button>
          </div>
        </div>
        {/* why is this code not working? */}

        <div className="">
          <article className={`flex ${style.singleUser__user_account}`}>
            <div className={style.user_avatar}>
              <img src={data?.profile?.avatar} alt="" className="" />
              <div className="">
                <h1 className="">
                  {data?.profile?.firstName} {data?.profile?.lastName}
                </h1>
                <p className="">{data?.accountNumber}</p>
              </div>
            </div>
            <div className={style.user_tier}>
              <p>User&#8217;s Tier</p>
              <div className="">
                <span className="">
                  {" "}
                  <AiFillStar />
                </span>
                <span className="">
                  <AiOutlineStar />
                </span>
                <span className="">
                  <AiOutlineStar />
                </span>
              </div>
            </div>
            <div className="">
              {/* make this code better */}
              <h1 className="">{formatMoney(data?.accountBalance as any)}</h1>
              <p
                className={style.bank}
              >{`${data?.profile?.bvn}/Providus Bank`}</p>
            </div>
          </article>
          <div className="">
            <ul className={style.singleUser__list}>
              {list.map((item) => (
                <li
                  onClick={() => setActive(item.id)}
                  key={item.id}
                  className={`${active === item.id ? style.active : ""}`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={style.dashboard__user_info}>
        {active === 1 ? <GeneralDetail data={data} /> : null}
      </section>
    </section>
  );
};

export default DashboardUser;
