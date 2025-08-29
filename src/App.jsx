import Card from "./components/Card";
import Hero from "./components/Hero";
import { useRef } from "react";
import Timeline from "./components/Timeline";
import { data } from "./components/utils/data";
import { useGSAP } from "@gsap/react";
import Sponsors from "./components/Sponsors";
import gsap, { Power4 } from "gsap";
import TimerCounter from "./components/TimerCounter";
import ChatBox from "./components/ChatBox";
import ImageSlider from "./components/ImageSlider";
import About from "./components/About";
import Footer from "./components/Footer";
import Prize from "./components/Prize";
import Navbar from "./components/Navbar";
import GoToTop from "./components/GoToTop";


const App = () => {
  // Gsap Animation
  const comp = useRef();
  
  
  const style = {
    fontFamily: "Mukta, sans-serif",
  };
  return (
    <div
      ref={comp}
      className="relative scroll-smooth w-screen min-h-screen  overflow-x-hidden"
      style={style}
      id="home"
    >
      {/* Background Sky */}
      <div className="bg-gradient-to-b from-[#0f2027] to-[#203a43] fixed left-0 -z-20 w-screen h-screen">
        
      </div>
      <div className="d-block opacity-100">
        <Navbar />
        <Hero />
        <About />
        <Timeline />
        <TimerCounter />
        {/*<Prize />*/}
        <Sponsors />
       {/* <CommunityPartners/> */}
        <ImageSlider />
        {/* <Judges heading={"Judges"} lists={judgesList} />
        <Judges heading={"Mentors"} lists={mentorList} /> */}
        {/* Card Section */}
        <h1
          id="themes"
          className="text-[#f6921e] text-4xl  font-medium flex justify-center"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Themes
        </h1>
        <div className="flex justify-center min-h-screen py-10 items-center text-white gap-10 flex-wrap">
          {data.map((theme) => (
            <Card key={theme.id} theme={theme} />
          ))}
        </div>
        <Footer />
        {/* <ChatBox /> */}
      </div>
      {/* Scroll To Top Button */}
      <div className="d-block">
        <GoToTop />
      </div>
    </div>
  );
};

export default App;
