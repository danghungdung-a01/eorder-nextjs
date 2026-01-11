'use client';
import React, { useState } from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import Image from "next/image";

import navitemlist from "@/lib/dataJson/navitemlist.json";

export default function NavMenu() {
  const [navBar, setNavbar] = useState("");
  const [navlist, setNavList] = useState("");

  const navBarShow = () => {
    if (navBar == "") {
      setNavbar("ak-toggle_active");
    } else {
      setNavbar("");
    }

    if (navlist == "") {
      setNavList("ak-show-moblie-nav-list");
    } else {
      setNavList("");
    }
  };

  return (
    <div className="ak-main_header">
      <div className="ak-nav-container">
        <div className="ak-main_header_in">
          <div className="ak-main_header_left">
            <Link className="ak-site_branding" href="/">
              <Image className="hidden dark:block" src="/img/logo/logo.png" alt="Site logo" width={120} height={40} priority />
              <Image className="block dark:hidden" src="/img/logo/logo_light.png" alt="Site logo" width={120} height={40} priority />
            </Link>
          </div>
          <div className="ak-main_header_right">
            <div className="ak-nav ak-medium">
              <ul id="ak-nav_list" className={`ak-nav_list ${navlist}`}>
                {navitemlist?.map((item, i) => {
                  return <MenuItem props={item} key={i} />;
                })}
              </ul>
              <span
                onClick={() => navBarShow()}
                id="navBar"
                className={`ak-munu_toggle ${navBar}`}
              >
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
