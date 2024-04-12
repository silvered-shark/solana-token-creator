import { FC } from "react";
import { LuMenu } from "next/link";
import NetworkSwitcher from "./NetworkSwitcher";

export const AppBar: FC = (props) => {
  const menu = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Tools",
      link: "#tools",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Price",
      link: "#price",
    },
    {
      name: "Faq",
      link: "#faq",
    },
  ];

  return (
    <div>
      <header id="navbar-sticky" className="navbar">
        <div className="container">
          <nav>
            <a href="/" className="logo">
              <img src="assets/images/logo1.png" alt="logo" className="h-10" />
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};
