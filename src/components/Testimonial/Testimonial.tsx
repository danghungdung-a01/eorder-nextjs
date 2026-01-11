'use client'
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import 'swiper/css';
import Image from "next/image";

const testimonialInfo = [
  {
    img: "/img/testimonial/testimonial_1.jpg",
    title: "Steven K. Roberts",
    subtitle: "From USA",
    content:
      "“Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.”",
  },
  {
    img: "/img/testimonial/testimonial_2.jpg",
    title: "K. Roberts",
    subtitle: "From ",
    content:
      "“Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.”",
  },
  {
    img: "/img/testimonial/testimonial_3.jpg",
    title: "Jon K. Sun",
    subtitle: "From ",
    content:
      "“Their talented team of passionate chefs masterfully crafts each dish, combining the finest ingredients with innovative techniques to present culinary creations that are as visually stunning as they are delicious.”",
  },
];

export default function Testimonial() {
  const swiperTestimonialRef = useRef<SwiperType | null>(null);
  return (
    <section className="container mx-auto md:px-6 px-4">
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="ak-slider ak-slider-3">
        <Swiper
          loop={true}
          slidesPerView={"auto"}
          onSwiper={(swiper) => {
            swiperTestimonialRef.current = swiper;
          }}
        >
          {testimonialInfo?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="container mx-auto md:px-6 px-4">
                  <div className="testimonial-section">
                    <div className="testimonial-icon-1">
                      <Image
                        className="dark:block hidden"
                        width={100} height={100}
                        src="/img/icon/testimonial_icon_l.svg"
                        alt="..."
                      />
                      <Image
                        className="dark:hidden block"
                        width={100} height={100}
                        src="/img/icon/testimonial_icon_llight.svg"
                        alt="..."
                      />
                    </div>
                    <div className="testimonial-info-section">
                      <div className="testimonial-info">
                        <Image
                          width={100} height={100}
                          src={item.img}
                          className="testimonial-info-img mx-auto"
                          alt="..."
                        />
                        <h6 className="testimonial-info-title">{item.title}</h6>
                        <p className="short-title">{item.subtitle}</p>
                        <p className="testimonial-info-subtitle">
                          {item.content}
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-icon-1">
                      <Image className="dark:block hidden" width={100} height={100} src="/img/icon/testimonial_icon_r.svg" alt="..." />
                      <Image className="dark:hidden block" width={100} height={100} src="/img/icon/testimonial_icon_rlight.svg" alt="..." />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="ak-swiper-controll-3">
        <div className="ak-swiper-navigation-wrap">
          <div className="ak-swiper-button-prev-3">
            <button
              className="btn-style-2 btn-size btn-style-round button-prev-next-2 rotate-svg"
              aria-disabled="false"
              onClick={() => swiperTestimonialRef.current?.slideNext()}
            >
              <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
                <g stroke="var(--brand-danger)" fill="none" fillRule="evenodd">
                  <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
                </g>
              </svg>
              <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
                <g stroke="var(--brand-danger)" fill="none" fillRule="evenodd">
                  <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="ak-swiper-button-next-3">
            <button
              className="btn-style-2 btn-size btn-style-round button-prev-next-2"
              aria-disabled="false"
              onClick={() => swiperTestimonialRef.current?.slidePrev()}
            >
              <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
                <g stroke="var(--brand-danger)" fill="none" fillRule="evenodd">
                  <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
                </g>
              </svg>
              <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
                <g stroke="var(--brand-danger)" fill="none" fillRule="evenodd">
                  <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
