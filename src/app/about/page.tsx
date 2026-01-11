import AboutContent from "@/components/AboutContent/AboutContent";
import CommonHero from "@/components/CommonHero/CommonHero";
import OpeningHoursInfo from "@/components/OpenIngHour/OpeningHoursInfo";
import Testimonial from "@/components/Testimonial/Testimonial";
import Videos from "@/components/VideoPopUp/Videos";
import React from "react";

export default function About() {
    return (
        <div>
            <CommonHero title={"About Us"} link={"/"} />
            <AboutContent />
            <Testimonial />
            <OpeningHoursInfo typeTwo={true} />
            <Videos videoId={"UsD1MhKBmD4"} />
        </div>
    );
}
