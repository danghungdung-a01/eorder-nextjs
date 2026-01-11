'use client';
import React, { useEffect, useRef } from "react";
import CommentUser from "../Comment/CommentUser";
import CommentConatctFrom from "../Comment/CommentConatctFrom";
import VideoButton from "../VideoPopUp/VideoButton";
import SectionTitle from "../SectionTitle/SectionTitle";
import { imageZoomInOut } from "../../lib/helper/main";
import Image from "next/image";

type BlogDetailsContainerAroundProps = {
  props?: {
    img?: string;
    desp?: string;
    testimonial?: string;
    shortTitle?: string;
    shortDesc?: string;
    videoImg?: string;
    shortDescTwo?: string;
    comment?: Array<{
      authorImg: string;
      name: string;
      commentmeta: string;
      commenttext: string;
    }>;
    reply?: Array<{
      authorImg: string;
      name: string;
      commentmeta: string;
      replytext: string;
    }>;
  } | undefined;
};

export default function BlogDetailsContainerAround({ props }: BlogDetailsContainerAroundProps) {
  const videoImg = useRef<HTMLImageElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const blogImg = useRef<HTMLImageElement>(null);
  useEffect(() => {
    imageZoomInOut(container.current, videoImg.current);
    imageZoomInOut(container.current, blogImg.current);
  }, []);
  return (
    <div ref={container}>
      <div className="ak-height-50 ak-height-lg-30"></div>
      <Image width={100} height={100} className="imagesZoom" src={props?.img ?? ''} alt="..." ref={blogImg} />
      <div className="ak-height-75 ak-height-lg-30"></div>
      <p>{props?.desp}</p>
      <div className="ak-height-75 ak-height-lg-30"></div>
      <div className="quote-option">
        <div className="testimonial-section">
          <div className="testimonial-icon-1">
            <Image className="dark:block hidden" width={100} height={100} src="/img/icon/testimonial_icon_l.svg" alt="..." />
            <Image className="dark:hidden block" width={100} height={100} src="/img/icon/testimonial_icon_llight.svg" alt="..." />
          </div>
          <div className="testimonial-info-section">
            <div className="testimonial-info">
              <p className="testimonial-info-subtitle">{props?.testimonial}</p>
            </div>
          </div>
          <div className="testimonial-icon-1">
            <Image className="dark:block hidden" width={100} height={100} src="/img/icon/testimonial_icon_r.svg" alt="..." />
            <Image className="dark:hidden block" width={100} height={100} src="/img/icon/testimonial_icon_rlight.svg" alt="..." />
          </div>
        </div>
      </div>
      <div className="ak-height-75 ak-height-lg-30"></div>
      <h4 className="anim-title-2 ak-white-color">{props?.shortTitle}</h4>
      <div className="ak-height-20 ak-height-lg-20"></div>
      <p>{props?.shortDesc}</p>
      <div className="ak-height-75 ak-height-lg-30"></div>
      <div>
        <div className="video-section">
          <Image
            width={100} height={100}
            src={props?.videoImg ?? ''}
            alt="..."
            ref={videoImg}
            className="video-section-bg-img ak-bg imagesZoom"
          />
          <VideoButton videoId={"UsD1MhKBmD4"} />
        </div>
      </div>
      <div className="ak-height-75 ak-height-lg-30"></div>
      <p>{props?.shortDescTwo}</p>
      <div className="ak-height-75 ak-height-lg-30"></div>
      <div className="blog-details-border"></div>
      <div className="ak-height-35 ak-height-lg-30"></div>
      <div className="social-link">
        <p>Social Share:</p>
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://bd.linkedin.com/">LinkedIn</a>
        <a href="https://www.instagram.com/">Instagram</a>
      </div>
      <div className="ak-height-100 ak-height-lg-60"></div>
      <CommentUser props={props} />
      <div className="ak-height-100 ak-height-lg-60"></div>
      <div className="contact-content">
        <div className="contact-form">
          <div className="contact-form-title ">
            <SectionTitle animTwo={true} textWhite={"Post A Comment"} />
          </div>
          <CommentConatctFrom />
        </div>
      </div>
    </div>
  );
}
