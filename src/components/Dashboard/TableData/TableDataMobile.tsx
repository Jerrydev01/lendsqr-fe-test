import React, { useState, useEffect } from "react";
import style from "./tableData.module.scss";
import { Link, useLocation } from "react-router-dom";

import ReactPaginate from "react-paginate";
import { BsFilter, BsThreeDotsVertical } from "react-icons/bs";
import { BiSortAlt2 } from "react-icons/bi";
import img1 from "../../../assets/dashboard/userdetails.svg";
import img2 from "../../../assets/dashboard/blacklist.svg";
import img3 from "../../../assets/dashboard/activeuser.svg";
import Filter from "../Filter/Filter";

const TableDataMobile = ({
  data,
  setData,
  userId,
  pageNumber,
  isLoading,
  handleShowUserId,
  handleShow,
  fetchData,
  show,
  changePage,
}: any) => {
  const [userPageNumber, setUserPageNumber] = useState(4);
  const [isShowSort, setIsShowSort] = useState(false);

  const { pathname } = useLocation();
  const pageNumberList: number[] = [4, 8, 12, 16, 20];

  const usersPerPage = userPageNumber;
  const pagesVisited = pageNumber * usersPerPage;

  const handlePageNumber = (e: any) => {
    setUserPageNumber(e.target.value);
  };

  const handleShowSorting = () => {
    setIsShowSort(!isShowSort);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // sort data by ascending and descending

  const handleAscendSort = () => {
    const sortedData = data.sort((a: any, b: any) => {
      if (a.userName < b.userName) {
        return -1;
      }
      if (a.userName > b.userName) {
        return 1;
      }
      return 0;
    });
    setData(sortedData);
  };

  const handleDescendSort = () => {
    const sortedData = data.sort((a: any, b: any) => {
      if (a.userName > b.userName) {
        return -1;
      }
      if (a.userName < b.userName) {
        return 1;
      }
      return 0;
    });
    setData(sortedData);
  };

  return (
    <section className={style.table_mobile}>
      <div className={style.table_mobile__border}>
        <div className="">
          <div className={style.table_mobile__filter}>
            <button onClick={handleShow}>
              <span>
                <BsFilter />
              </span>
              <span>Filter</span>
            </button>
            <button onClick={handleShowSorting}>
              <span>
                <BiSortAlt2 />
              </span>
              <span>Sort</span>
            </button>
          </div>
        </div>
        <div className={style.table_mobile__header}>
          <span>
            {data.slice(pagesVisited, pagesVisited + usersPerPage).length} of{" "}
            {data.length} results
          </span>
          <span>
            <span>Pages:</span>
            <select
              name="page"
              id="page"
              value={userPageNumber}
              onChange={handlePageNumber}
            >
              {pageNumberList.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </span>
        </div>
        <div className={style.table_mobile__body}>
          {isLoading ? (
            <div className={`flex ${style.loader}`}>Loading...</div>
          ) : (
            data
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((user: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={style.table_mobile__body__item}
                    onClick={() => handleShowUserId(user.id)}
                  >
                    <div className={style.table_mobile__body__item__name}>
                      <span>{"Created"}:</span>
                      <span>{user?.createdAt}</span>
                      <img src={user?.profile?.avatar} alt="" />
                    </div>

                    <div className={style.table_mobile__body__item__name}>
                      <span>{"UserName"}:</span>
                      <div className={style.table_mobile__body__item__active}>
                        <span>{user.userName}</span>
                        <span
                          className={`flex ${style.table_mobile__body__item__link}`}
                        >
                          <span>active</span>
                          <span onClick={() => handleShowUserId(user.id)}>
                            <BsThreeDotsVertical />
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className={style.table_mobile__body__item__name}>
                      <span>Organization</span>
                      <span>{user?.orgName}</span>
                    </div>

                    <div className={style.table_mobile__body__item__name}>
                      <span>{"Email"}:</span>
                      <span>{user?.email}</span>
                    </div>

                    <div className={style.table_mobile__body__item__name}>
                      <span>{"Phone"}:</span>
                      <span>{user?.profile?.phoneNumber}</span>
                    </div>
                    <div className={style.mobile_user_position}>
                      <div
                        className={`${
                          userId === user.id ? style.user : style.userHidden
                        } ${style.mobile_userLink}`}
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
                    </div>
                  </div>
                );
              })
          )}
          <div className={style.table__mobile_filter}>
            {show ? (
              <div className={style.table__filter}>
                <Filter data={data} setData={setData} />
              </div>
            ) : null}
          </div>

          {isShowSort ? (
            <div className={style.table__mobile_sort}>
              <button onClick={handleAscendSort}>Ascending</button>
              <button onClick={handleDescendSort}>Descending</button>
            </div>
          ) : null}
        </div>
        <div className={style.pagination_mobile}>
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
      </div>
    </section>
  );
};

export default TableDataMobile;
