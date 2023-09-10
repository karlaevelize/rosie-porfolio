import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import PlansPrices from "./components/PlansPrices";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <PlansPrices id="plans-and-prices" />
    </>
  );
}

// Assets
// 1. http://res.cloudinary.com/delvoxvyc/image/upload/v1694350247/test_upload/zoa6mhp7pyrrek67bfdo.jpg
// 2. http://res.cloudinary.com/delvoxvyc/image/upload/v1694350311/test_upload/jcjvdltjaiqj0buzixjt.jpg
