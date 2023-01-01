import React from "react";
import { UserTypes } from "../../../../type/type";
import style from "./generaldetail.module.scss";
import { formatMoney } from "../../../../utils/currencyFormatter";

const GeneralDetail = ({ data }: any) => {
  return (
    <section className={style.detail}>
      <article className="">
        <h3>Personal Information</h3>
        <div className={style.detail__user}>
          <div className="">
            <h6>full Name</h6>
            <p>
              {data?.profile?.firstName} {data?.profile?.lastName}
            </p>
          </div>
          <div className="">
            <h6>Phone Number</h6>
            <p>{data?.profile?.phoneNumber}</p>
          </div>
          <div className="">
            <h6>Email Address</h6>
            <p>{data?.email}</p>
          </div>
          <div className="">
            <h6>Bvn</h6>
            <p>{data?.profile.bvn}</p>
          </div>
          <div className="">
            <h6>Gender</h6>
            <p>{data?.profile.gender}</p>
          </div>
          <div className="">
            <h6>Marital status</h6>
            <p>Single</p>
          </div>
          <div className="">
            <h6>Children</h6>
            <p>None</p>
          </div>
          <div className="">
            <h6>Type of residence</h6>
            <p>Parent’s Apartment</p>
          </div>
        </div>
      </article>

      <article className="">
        <h3>Education and Employment</h3>
        <div className={style.detail__user}>
          <div className="">
            <h6>level of education</h6>
            <p>{data?.education?.level}</p>
          </div>
          <div className="">
            <h6>employment status</h6>
            <p>{data?.education?.employmentStatus}</p>
          </div>
          <div className="">
            <h6>sector of employment</h6>
            <p>{data?.education?.sector}</p>
          </div>
          <div className="">
            <h6>Duration of employment</h6>
            <p>{data?.education?.duration}</p>
          </div>
          <div className="">
            <h6>office email</h6>
            <p>{data?.education?.officeEmail}</p>
          </div>
          <div className="">
            <h6>Monthly income</h6>
            <p>
              {formatMoney(data?.education?.monthlyIncome[0])} -{" "}
              {formatMoney(data?.education?.monthlyIncome[1])}
            </p>
          </div>
          <div className="">
            <h6>loan repayment</h6>
            <p>{formatMoney(data?.education?.loanRepayment)}</p>
          </div>
        </div>
      </article>
      <article className="">
        <h3>Socials</h3>
        <div className={style.detail__user}>
          <div className="">
            <h6>Twitter</h6>
            <p>{data?.socials?.twitter}</p>
          </div>
          <div className="">
            <h6>Facebook</h6>
            <p>{data?.socials?.facebook}</p>
          </div>
          <div className="">
            <h6>Instagram</h6>
            <p>{data?.socials?.instagram}</p>
          </div>
        </div>
      </article>

      <article className="">
        <h3>Guarantor</h3>
        <div className={style.detail__user}>
          <div className="">
            <h6>full Name</h6>
            <p>
              {data?.guarantor?.firstName} {data?.guarantor?.lastName}
            </p>
          </div>
          <div className="">
            <h6>Phone Number</h6>
            <p>{data?.guarantor?.phoneNumber}</p>
          </div>
          <div className="">
            <h6>email Address</h6>
            <p>{data?.guarantor?.address.slice(0, 6)}@yahoo.com</p>
          </div>
          <div className="">
            <h6>Relationship</h6>
            <p>{data?.guarantor?.gender}</p>
          </div>
        </div>
      </article>
      {/* guarntor 2 */}
      <article className="">
        <h3>{""}</h3>
        <div className={style.detail__user}>
          <div className="">
            <h6>full Name</h6>
            <p>
              {data?.guarantor?.firstName} {data?.guarantor?.lastName}
            </p>
          </div>
          <div className="">
            <h6>Phone Number</h6>
            <p>{data?.guarantor?.phoneNumber}</p>
          </div>
          <div className="">
            <h6>Email Address</h6>
            <p>{data?.guarantor?.address.slice(0, 6)}@gmail.com</p>
          </div>
          <div className="">
            <h6>Relationship</h6>
            <p>{data?.guarantor?.gender}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default GeneralDetail;
