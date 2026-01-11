import HeroSiderTwo from "@/components/Silders/HeroSiderTwo";
import MovingText from "@/components/MovingText/MovingText";
import AboutContent from "@/components/AboutContent/AboutContent";
import OpeningHoursInfo from "@/components/OpenIngHour/OpeningHoursInfo";
import PortfolioSlider from "@/components/PortfolioSlider/PortfolioSlider";
import FoodMenu from "@/components/FoodMenu/FoodMenu";
import BestItem from "@/components/BestItem/BestItem";
import Testimonial from "@/components/Testimonial/Testimonial";
import BookingSystemTwo from "@/components/BookingSystem/BookingSystemTwo";

export default function Home() {
  return (
    <>
      <HeroSiderTwo />
      <MovingText />
      <AboutContent />
      <OpeningHoursInfo typeTwo={true} />
      <PortfolioSlider />
      <FoodMenu styleTwo={false} />
      <BestItem />
      <Testimonial />
      <BookingSystemTwo videoId="UsD1MhKBmD4" />
    </>
  );
}
