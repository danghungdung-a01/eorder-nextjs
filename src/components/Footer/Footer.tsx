'use client';
import React, { useRef, useLayoutEffect } from "react";
import Link from 'next/link';
import { footerAnimation, scrollUpBtn, scrollUpShow } from "../../lib/helper/main";
import { WhiteButton } from "../Button/Button";
import Image from "next/image";
import FontLiveSwitcher from "@/components/FontLiveSwitcher/FontLiveSwitcher";


const Footertext = {
  email: "info@tnkas.com",
  phoneone: "+49 931 6605 7362",
  phonetwo: "+49 931 6605 7362",
  addressone: "Goerdelerstraße 5, 97084 Würzburg",
  addresstwo: "Goerdelerstraße 5, 97084 Würzburg",
  timeone: "SUNDAY - FRIDAY: 8:30AM - 6PM",
  timetwo: "SATURDAY: 1PM - 6AM",
  copyright: "Copyright 2025 All Right Reserved by TNKAS",
};

const Footernav = [
  {
    title: "Home",
    link: "/",
    key: "home",
  },
  {
    title: "About",
    link: "/about",
    key: "about",
  },
  {
    title: "Menu",
    link: "/menu",
    key: "menu",
  },
  {
    title: "Chef",
    link: "/chef",
    key: "chef",
  },
  {
    title: "Contact",
    link: "/contact",
    key: "contact",
  },
];

export default function Footer() {
  const scrollup = useRef<HTMLDivElement | null>(null);
  const footerContainer = useRef<HTMLDivElement | null>(null);
  const footerHrTop = useRef<HTMLDivElement | null>(null);
  const footerHrBottom = useRef<HTMLDivElement | null>(null);
  const footerTimeBorder = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    footerAnimation(
      footerContainer.current,
      footerHrTop.current,
      footerHrBottom.current,
      footerTimeBorder.current
    );
    scrollUpShow(scrollup.current);
  }, []);

  return (
    <footer>
      <div className="ak-height-150 ak-height-lg-150"></div>
      <div className="ak-footer ak-style-1">
        <Image width={100} height={100} className="ak-bg footer-bg-img" src='/img/bg/footer_bg.png' alt="footer_bg" />
        <div className="container mx-auto md:px-6 px-4 ak-hr-container cs_primary_font" ref={footerContainer}>
          <div className="ak-braner-logo type-color-1 footer-logo">
            <div
              className="footer-log-elem"
              ref={scrollup}
              onClick={() => scrollUpBtn()}
            >
              <div className="footer-log-icon flex justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="13"
                  viewBox="0 0 30 13"
                  fill="none"
                >
                  <path
                    d="M28.991 12.2063L14.8322 1L0.67334 12.2063"
                    stroke="white"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <Image
                className="hidden dark:block"
                src="/img/logo/logo.png"
                alt="Elegencia logo"
                width={180}
                height={60}
                priority={false}
              />
              <Image
                className="block dark:hidden"
                src="/img/logo/logo_light.png"
                alt="Elegencia logo"
                width={180}
                height={60}
                priority={false}
              />
            </div>
          </div>
          <div className="ak-height-100 ak-height-lg-60"></div>
          <div className="ak-footer-hr-top" ref={footerHrTop}></div>

          <div className="footer-main">
            <div className="footer-eamil-menu">
              <div className="footer-email">
                <a href="mailto:info@tnkas.com">{Footertext.email}</a>
              </div>
              <div className="footer-menu">
                <ul>
                  {Footernav?.map((item) => {
                    return (
                      <li key={item.key}>
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="ak-height-75 ak-height-lg-5"></div>
            <div className="footer-info">
              <div className="fooer-phn">
                <a href={`tel:${Footertext.phoneone}`}>{Footertext.phoneone}</a>
                {/* <br />
                <a href={`tel:${Footertext.phonetwo}`}>{Footertext.phonetwo}</a> */}
              </div>
              <div className="footer-address">
                <a
                  href="https://maps.app.goo.gl/gAd1JdfRW5d6eHkn7"
                  target="_blank"
                >
                  {Footertext.addressone}
                  {/* <br />
                  {Footertext.addresstwo} */}
                </a>
              </div>
              <div className="footer-time">
                <p>{Footertext.timeone}</p>
                <div
                  className="footer-time-border my-1"
                  ref={footerTimeBorder}
                ></div>
                <p>{Footertext.timetwo}</p>
              </div>
              <div className="footer-btn">
                <WhiteButton to="reservations">Reservations</WhiteButton>
              </div>
            </div>
            <div>
              <FontLiveSwitcher />
            </div>
          </div>

          <div
            className="ak-footer-hr-bottom qodef-grid-item"
            ref={footerHrBottom}
          ></div>
          <div className="h-[20px] lg:h-[60px]"></div>

          <div className="copy-right-section">
            <p className="uppercase text-center text-black dark:text-white">
              {Footertext.copyright}
            </p>
          </div>

          <div className="pt-3 lg:pt-6"></div>
        </div>
      </div>
    </footer>
  );
}
