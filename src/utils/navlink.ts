import img1 from "../assets/navmenu/user-friends.svg";
import img2 from "../assets/navmenu/users.svg";
import img3 from "../assets/navmenu/loan.svg";
import img4 from "../assets/navmenu/handshake.svg";
import img5 from "../assets/navmenu/piggy-bank.svg";
import img6 from "../assets/navmenu/sack.svg";
import img7 from "../assets/navmenu/user-check.svg";
import img8 from "../assets/navmenu/karma.svg";
import img9 from "../assets/navmenu/briefcase.svg";
import img11 from "../assets/navmenu/savingp.svg";
import img12 from "../assets/navmenu/fees.svg";
import img13 from "../assets/navmenu/transaction.svg";
import img14 from "../assets/navmenu/service.svg";
import img15 from "../assets/navmenu/service2.svg";
import img16 from "../assets/navmenu/scroll.svg";
import img17 from "../assets/navmenu/chart-bar.svg";
import img18 from "../assets/navmenu/sliders-h.svg";
import img19 from "../assets/navmenu/badge-percent.svg";
import img20 from "../assets/navmenu/clipboard-list.svg";
import img21 from "../assets/navmenu/system.svg";
import img22 from "../assets/navmenu/logout.svg";

interface navType {
  customers: Array<{
    name: string;
    icon: string;
    link: string;
  }>;
  business: Array<{
    name: string;
    icon: string;
    link: string;
  }>;
  setting: Array<{
    name: string;
    icon: string;
    link: string;
  }>;
  logout: Array<{
    name: string;
    icon: string;
    link: string;
  }>;
}

export const navLink: navType = {
  customers: [
    {
      name: "Users",
      icon: img1,
      link: "/dashboard",
    },
    {
      name: "Guarantors",
      icon: img2,
      link: "/guarantor",
    },
    {
      name: "Loans",
      icon: img3,
      link: "/awards",
    },
    {
      name: "Decision Models",
      icon: img4,
      link: "/awards",
    },
    {
      name: "Savings",
      icon: img5,
      link: "/awards",
    },
    {
      name: "Loan Requests",
      icon: img6,
      link: "/awards",
    },
    {
      name: "Whitelist",
      icon: img7,
      link: "/awards",
    },
    {
      name: "Karma",
      icon: img8,
      link: "/awards",
    },
  ],
  business: [
    {
      name: "Organization",
      icon: img9,
      link: "/recent",
    },
    {
      name: "Loan Products",
      icon: img6,
      link: "/rated",
    },
    {
      name: "Savings Products",
      icon: img11,
      link: "/downloaded",
    },

    {
      name: "Fees and Charges",
      icon: img12,
      link: "/playlist",
    },
    {
      name: "Transactions",
      icon: img13,
      link: "/playlist",
    },
    {
      name: "Services",
      icon: img14,
      link: "/playlist",
    },
    {
      name: "Service Account",
      icon: img15,
      link: "/playlist",
    },
    {
      name: "Settlements",
      icon: img16,
      link: "/playlist",
    },
    {
      name: "Reports",
      icon: img17,
      link: "/playlist",
    },
  ],
  setting: [
    {
      name: "Preferences",
      icon: img18,
      link: "/settings",
    },
    {
      name: "Fees and Pricing",
      icon: img19,
      link: "/price",
    },
    {
      name: "Audit Logs",
      icon: img20,
      link: "/audit",
    },
    {
      name: "Systems Messages",
      icon: img21,
      link: "/system",
    },
  ],
  logout: [
    {
      name: "Logout",
      icon: img22,
      link: "/logout",
    },
  ],
};
