"use client";
import { isArray } from "lodash";
import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

type NavChild = {
  key?: React.Key | null;
  link: string;
  title: string;
};

type NavItem = {
  key?: React.Key | null;
  link: string;
  title: string;
  childern?: NavChild[];
};

export default function MenuItem({ props }: { props: NavItem }) {
  const [showMenu, setShowMenu] = useState(false);

  const showsubnav = () => {
    setShowMenu(!showMenu);
  };

  const showActive = classNames("ak-munu_dropdown_toggle", {
    active: showMenu,
  });

  const showActivePrent = classNames("menu-item-has-children", {
    active: showMenu,
  });

  return (
    <li className={showActivePrent}>
      <Link href={props.link}>{props.title}</Link>
      {isArray(props.childern) && (
        <>
          <ul>
            {props.childern!.map((child: NavChild) => (
              <li key={child.key}>
                <Link href={child.link}>{child.title}</Link>
              </li>
            ))}
          </ul>
          <span className={showActive} onClick={showsubnav}></span>
        </>
      )}
    </li>
  );
}
