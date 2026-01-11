import BestItem from "@/components/BestItem/BestItem";
import FoodMenuHome from "@/components/FoodMenu/FoodMenu";
import OpeningHoursInfo from "@/components/OpenIngHour/OpeningHoursInfo";
import Reservation from "@/components/Reservation/Reservation";
import ShowCase from "@/components/ShowCase/ShowCase";
import HeroSilder from "@/components/Silders/HeroSilder";
import Testimonial from "@/components/Testimonial/Testimonial";
import Videos from "@/components/VideoPopUp/Videos";
import React from "react";


export default function HomeTwo() {
  return (
    <div>
      <HeroSilder />
      <ShowCase />
      <FoodMenuHome styleTwo={true} />
      <Testimonial />
      <OpeningHoursInfo typeTwo={true} />
      <BestItem />
      <Reservation />
      <Videos videoId={"UsD1MhKBmD4"} />
    </div>
  );
}
