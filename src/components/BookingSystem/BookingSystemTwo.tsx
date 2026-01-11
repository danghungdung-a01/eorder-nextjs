'use client';
import React, { useLayoutEffect, useRef } from "react";
import VideoButton from "../VideoPopUp/VideoButton";
import SectionTitle from "../SectionTitle/SectionTitle";
import BookingSystem from "./BookingSystem";
import { imageZoomInOut } from "../../lib/helper/main";
import Image from "next/image";

type Props = {
  videoId: string;
};

export default function BookingSystemTwo({ videoId }: Props) {
  const imageContainer = useRef(null);
  const imageZoomIn = useRef(null);

  useLayoutEffect(() => {
    imageZoomInOut(imageContainer.current, imageZoomIn.current);
  }, [videoId]);
  return (
    <>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="ak-booking-system" ref={imageContainer}>
        <Image
          width={5000} height={1000}
          className="ak-booking-system-bg-img ak-bg"
          src="https://elegencia-react-ejev.vercel.app/assets/img/bg/bookingSystemBg.png"
          alt="..."
          ref={imageZoomIn}
          priority={false}
        />
        {/* <div className='absolute top-0 left-0 w-full h-full bg-[var(--overlay-mask)]'></div> */}
        <div className="ak-height-150 ak-height-lg-60"></div>
        <div className="container mx-auto md:px-6 px-4 relative">
          <div className="flex justify-center items-center flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="ak-height-lg-60"></div>
              <VideoButton videoId={videoId} />
              <div className="ak-height-lg-60"></div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="booking-system-map-second bg-[var(--surface-base)] p-5 rounded-md">
                <div className="booking-system-heading">
                  <SectionTitle
                    title={"Reservations"}
                    subTitle={"Reservations"}
                    animTwo={true}
                  />
                  <div className="ak-height-60 ak-height-lg-30"></div>
                  <BookingSystem />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ak-height-150 ak-height-lg-60"></div>
      </div>
    </>
  );
}
