'use client'
import React, { useLayoutEffect, useRef } from "react";
import classNames from "classnames";
import { sectionTitleAnim, sectionTitleAnimTwo } from "../../lib/helper/main";

type SectionTitleProps = {
  title?: string;
  subTitle?: string;
  tyle?: string;
  animTwo?: boolean;
  textWhite?: string;
};

export default function SectionTitle(props: SectionTitleProps) {
  const { title, subTitle, tyle, animTwo, textWhite } = props;
  const animTitle = useRef(null);
  const animTitleSection = useRef(null);
  useLayoutEffect(() => {
    if (animTwo) {
      sectionTitleAnimTwo(animTitle.current, animTitleSection.current);
    } else {
      sectionTitleAnim(animTitle.current, animTitleSection.current);
    }
  }, [title, animTwo]);

  const sectionClass = classNames("ak-section-heading ak-style-1", {
    "ak-type-1": tyle == "center",
  });

  return (
    <div className={sectionClass} ref={animTitleSection}>
      {subTitle && <div className="ak-section-subtitle">{subTitle}</div>}
      <h2 className="ak-section-title" ref={animTitle}>
        {textWhite && (
          <>
            <span className="dark:text-white text-black">{textWhite}</span> <br />
          </>
        )}
        {title}
      </h2>
    </div>
  );
}
