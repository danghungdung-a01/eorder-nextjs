'use client';
import React, { useLayoutEffect, useRef, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { imageZoomInOut } from "../../lib/helper/main";
import Image from "next/image";

type Props = {
  videoId: string;
};

export default function Videos({ videoId }: Props) {
  const [isOpen, setOpen] = useState(false);
  const imageContainer = useRef<HTMLDivElement>(null);
  const imageZoomIn = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (imageContainer.current && imageZoomIn.current) {
      imageZoomInOut(imageContainer.current, imageZoomIn.current);
    }
  }, [videoId]);

  return (
    <>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="video-section relative" ref={imageContainer}>
        <Image
          width={1000} height={1000}
          src="https://elegencia-react-ejev.vercel.app/assets/img/about/aboutVideoBg.jpg"
          alt="Video background"
          className="video-section-bg-img ak-bg"
          ref={imageZoomIn}
        />

        <button
          className="video-section-btn absolute inset-0 flex items-center justify-center"
          onClick={() => setOpen(true)}
        >
          <span className="ak-player-btn ak-accent-color">
            <span></span>
          </span>
        </button>

        <Modal
          open={isOpen}
          onClose={() => setOpen(false)}
          showCloseIcon={false}
          center={false}
          classNames={{
            overlay:
              "fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-0 m-0",
            modal:
              "w-screen h-screen max-w-none bg-black p-0 m-0 rounded-none overflow-hidden flex items-center justify-center",
          }}
        >
          <div className="relative w-full h-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
              title="YouTube video player"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            ></iframe>
          </div>
        </Modal>
      </div>
    </>
  );
}
