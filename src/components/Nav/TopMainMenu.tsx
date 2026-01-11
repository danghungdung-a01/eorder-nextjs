"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

// import logo from "/assets/img/logo/logo.png";

const Headerlogo = {
  title: "reservations",
  link: "/reservations",
};

type TopNavItem = {
  key?: React.Key | null;
  link: string;
  title: string;
};

export default function TopMainMenu(props: { Topnavlist: TopNavItem[]; }) {
  const { Topnavlist } = props;

  const [showTopNavFullScreen, setshowTopNavFullScreen] = useState("");
  const showTopnav = () => {
  const topAllList = gsap.utils.toArray(".top-main-menu-li");
    let i = 1;

    if (showTopNavFullScreen == "") {
      setshowTopNavFullScreen("active");
      gsap.set(".ak-main_header_right", {
        display: "none",
      });

      topAllList.forEach((item) => {
        gsap.fromTo(
          item as HTMLElement,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            delay: i++ * 0.4,
            opacity: 1,
          }
        );
      });
    } else {
      gsap.set(".ak-main_header_right", {
        display: "block",
        delay: 0.5,
        duration: 1.5,
      });

      topAllList.forEach((item) => {
        gsap.set(item as HTMLElement, {
          y: 0,
          opacity: 0,
        });
      });
      setshowTopNavFullScreen("");
    }
  };

  return (
    <div className="header-top">
      <div className="wrapper">
        <div className="header-logo">
          <Link href={Headerlogo?.link} className="logo">
            {Headerlogo?.title}
          </Link>
        </div>
        <div className="center-log md:absolute md:left-1/2 md:-translate-x-1/2 ">
          <Link href="/">
            <Image className="hidden dark:block" src="/img/logo/logo.png" alt="logo" width={120} height={40} priority />
            <Image className="block dark:hidden" src="/img/logo/logo_light.png" alt="logo" width={120} height={40} priority />
          </Link>
        </div>

        <div className="nav-toggles md:hidden flex" onClick={showTopnav}>
          <span
            id="navBar"
            className={`ak-munu_toggles-top ${showTopNavFullScreen}`}
          >
            <span></span>
          </span>
        </div>

        <ul className={`top-main-menu ${showTopNavFullScreen}`}>
          {Topnavlist?.map((item: { link: string; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, i: React.Key | null | undefined) => (
            <li className="top-main-menu-li" key={i}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
