'use client'
import React, { useLayoutEffect, useRef } from "react";
import { imagesOverlayShow } from "../../lib/helper/main";
import Image from "next/image";

type ImagesOverlayProps = {
  image: string,
  imagesZoom: any,
}

export default function ImgesOverlay({ image, imagesZoom }: ImagesOverlayProps) {
  const imagesShowcontainer = useRef(null);
  const imagesShow = useRef(null);

  useLayoutEffect(() => {
    imagesOverlayShow(
      imagesShowcontainer.current,
      imagesShow.current,
      imagesZoom
    );
  }, [imagesZoom]);

  return (
    <div className="img-container-overlay rounded-[30px]" ref={imagesShowcontainer}>
      <Image
        width={1000} height={1000}
        src={`${image}`}
        alt="overlay-image"
        className="images-show"
        ref={imagesShow}
      />
    </div>
  );
}
