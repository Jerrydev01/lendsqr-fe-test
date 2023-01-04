import React, { useEffect, useState } from "react";
import style from "./tableData.module.scss";
import { BsFilter, BsThreeDotsVertical } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import Filter from "../Filter/Filter";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../../../assets/dashboard/userdetails.svg";
import img2 from "../../../assets/dashboard/blacklist.svg";
import img3 from "../../../assets/dashboard/activeuser.svg";
import { UserTypes } from "../../../type/type";
import TableDataMobile from "./TableDataMobile";

const pageNumberList: number[] = [10, 20, 30, 50, 70, 90, 100];

const TableData = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [userPageNumber, setUserPageNumber] = useState(10);
  const [userId, setUserId] = useState(1);

  // check if user id is matches data id
  const handleShowUserId = (userId: number) => {
    if (userId) {
      setUserId(userId);
    } else {
      setUserId(1);
    }
  };

  const usersPerPage = userPageNumber;

  const pagesVisited = pageNumber * usersPerPage;

  const handlePageNumber = (e: any) => {
    setUserPageNumber(e.target.value);
  };

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const { pathname } = useLocation();

  // await function  to fetch data with axios
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      setData(response.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <article className="">
      <section className={`${style.table}`}>
        <table className={`${style.table__table} full-width`}>
          <thead>
            <tr>
              <th>
                organization{" "}
                <button onClick={handleShow} className="">
                  <BsFilter />
                </button>
              </th>
              <th>
                Username{" "}
                <button onClick={handleShow} className="">
                  <BsFilter />
                </button>
              </th>
              <th>
                Email{" "}
                <button onClick={handleShow} className="">
                  <BsFilter />
                </button>
              </th>
              <th>
                Phone number{" "}
                <button onClick={handleShow} className="">
                  <BsFilter />
                </button>
              </th>
              <th>
                Date joined{" "}
                <button onClick={handleShow} className="">
                  <BsFilter />
                </button>
              </th>
              <th>
                Status{" "}
                <button onClick={handleShow} className="">
                  <BsFilter />
                </button>
              </th>
            </tr>
          </thead>

          {/* add loading */}
          {isLoading ? (
            <tr className={`flex ${style.loader}`}>Loading...</tr>
          ) : (
            data
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((user: any) => {
                return (
                  <>
                    <tbody key={user.id}>
                      <tr key={user.id}>
                        <td>{user.orgName}</td>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{user.profile.phoneNumber}</td>
                        <td>{user.createdAt}</td>
                        <td>
                          <span>{"active"}</span>
                        </td>
                        <td className={style.icon}>
                          <button onClick={() => handleShowUserId(user.id)}>
                            <BsThreeDotsVertical />
                          </button>
                        </td>
                      </tr>
                    </tbody>

                    <div
                      className={`${
                        userId === user.id ? style.user : style.userHidden
                      }`}
                    >
                      {userId === user.id ? (
                        <>
                          <div className={style.user__groupDetail}>
                            <Link
                              className={style.user__edit}
                              to={`${pathname}/${user.id}`}
                            >
                              <span className="">
                                <img src={img1} alt="" />
                              </span>{" "}
                              View Details
                            </Link>
                            <span className={style.user__edit}>
                              <span className="">
                                <img src={img2} alt="" />
                              </span>
                              Blacklist User
                            </span>
                            <span className={style.user__edit}>
                              <span className="">
                                <img src={img3} alt="" />
                              </span>
                              Activate User
                            </span>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </>
                );
              })
          )}
          {show ? (
            <div className={style.table__filter}>
              <Filter data={data} setData={setData} />
            </div>
          ) : null}
        </table>
        <div className={`${style.table__pagination}`}>
          <div className={style.table__pageshow}>
            {/* how to increase usersPerPage row*/}
            <span className="">Showing</span>
            <select
              name="usersPerPage"
              id="usersPerPage"
              onChange={handlePageNumber}
              value={userPageNumber}
              className=""
            >
              {pageNumberList.map((number) => {
                return (
                  <option key={number} value={number}>
                    {number}
                  </option>
                );
              })}
            </select>

            <span className="">out of {data.length}</span>
          </div>
          {/* math.cell in reactPaginate */}

          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={Math.ceil(data.length / usersPerPage)}
            onPageChange={changePage}
            containerClassName={`${style.pagination__btns}`}
            previousLinkClassName={`${style.pagination__btns__prev}`}
            nextLinkClassName={`${style.pagination__btns__next}`}
            disabledClassName={`${style.pagination__btns__disabled}`}
            activeClassName={`${style.pagination__btns__active}`}
          />
        </div>
      </section>
      <TableDataMobile
        data={data}
        pageNumber={pageNumber}
        isLoading={isLoading}
        handleShowUserId={handleShowUserId}
        userId={userId}
        fetchData={fetchData}
        handleShow={handleShow}
        show={show}
        changePage={changePage}
      />
    </article>
  );
};

export default TableData;
