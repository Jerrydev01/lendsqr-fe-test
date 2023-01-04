import React, { useState } from "react";
import style from "./filter.module.scss";

const Filter = ({ data, setData }: any) => {
  const [formState, setFormState] = useState({
    organization: "",
    user: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  // filter data
  const filterDataFile = () => {
    const { organization, user, email, date, phoneNumber, status } = formState;

    const filteredData = data.filter((list: any) => {
      return list.userName.toLowerCase().includes(user.toLowerCase())
        ? list
        : list.email.toLowerCase().includes(email.toLowerCase())
        ? list
        : list.profile.phoneNumber
            .toLowerCase()
            .includes(phoneNumber.toLowerCase())
        ? list
        : list.createdAt.toLowerCase().includes(date.toLowerCase())
        ? list
        : list.orgName.toLowerCase().includes(organization.toLowerCase());
    });

    setData(filteredData);
    console.log(filteredData);
  };

  // handle change in input fields
  const handleChange = (e: any) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // handle submit of form
  const handleSubmit = (e: any) => {
    e.preventDefault();
    filterDataFile();
  };

  // handle reset data
  const handleReset = () => {
    setFormState({
      organization: "",
      user: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });

    window.location.reload();
    setData(data);
  };

  return (
    <section className={style.filter}>
      <form className="">
        <div className="">
          <label htmlFor="organization">Organization</label>
          <select
            name="organization"
            id="organization"
            value={formState.organization}
            onChange={handleChange}
            className={style.filter__select}
            required
          >
            <option value="">Select Organization</option>
            {data.map((value: any) => {
              return (
                <option value={value.id} key={value.id}>
                  {value.orgName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="">
          <label htmlFor="user">Username</label>
          <input
            value={formState.user}
            onChange={handleChange}
            type="user"
            name="user"
            id="user"
            placeholder="User"
            required
          />
        </div>
        <div className="">
          <label htmlFor="Email">Email</label>
          <input
            value={formState.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="Email"
            placeholder="Email"
            required
          />
        </div>
        <div className="">
          <label htmlFor="Date">Date</label>
          <input
            value={formState.date}
            onChange={handleChange}
            type="text"
            name="date"
            id="Date"
            placeholder="Date"
            required
          />
        </div>
        <div className="">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            value={formState.phoneNumber}
            onChange={handleChange}
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            required
          />
        </div>
        <div className="">
          <label htmlFor="name">Status</label>
          <select
            value={formState.status}
            onChange={handleChange}
            name="status"
            id="status"
            required
            className={style.filter__select}
          >
            <option value="1">Inactive</option>
            <option value="2">Pending</option>
            <option value="3">BlackList</option>
            <option value="4">Active</option>
          </select>
        </div>
        <div className="">
          <button onClick={handleReset} type="reset">
            Reset
          </button>
          <button onClick={handleSubmit} type="submit">
            Filter
          </button>
        </div>
      </form>
    </section>
  );
};

export default Filter;
