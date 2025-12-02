import React from "react";
import Navbar from "./Navbar";
import Gallardoprof from "/Gallardoprof.png";
import { Github, Linkedin, Mail } from "lucide-react";
import GallardoCV from "/GallardoCV.pdf";
import TextType from "../reactbits/TextType";
import TrueFocus from "../reactbits/TrueFocus";
import ProfileCard from "../reactbits/ProfileCard";

export default function Hero() {
  const roleTexts = [
    "Fullstack Developer",
    "Software Engineer / Developer",
    "Web Designer",
  ];

  const paragraphTexts = [
    "I engineer scalable, user-centric web applications that bridge the gap between complex backend logic and elegant frontend design.",
    "Dedicated to writing clean, efficient code, I transform innovative ideas into seamless digital experiences.",
    "I solve real-world problems with cutting-edge technology and creative solutions.",
  ];

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      <Navbar />

      <main
        id="home"
        className="z-10 flex flex-col items-center justify-center flex-1 w-full gap-8 px-4 pt-20 pb-8 sm:pt-24 sm:pb-12 md:flex-row md:px-6 lg:px-12 xl:px-20 md:pb-24 md:pt-32"
      >
        {/* Left Section: Text Content */}
        <section
          className="w-full text-center md:flex-1 md:text-left"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <header>
            <div className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              <TrueFocus
                sentence="Wel Tech Code"
                manualMode={false}
                blurAmount={5}
                borderColor="#f97316"
                glowColor="rgba(249, 115, 22, 0.6)"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </div>

            <h2 className="text-lg sm:text-2xl md:text-2xl lg:text-3xl font-bold text-orange-600 mb-3 sm:mb-4 min-h-[2.5rem]">
              <TextType
                text={roleTexts}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h2>
          </header>

          <div className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed min-h-[5rem]">
            <TextType
              text={paragraphTexts}
              typingSpeed={25}
              pauseDuration={2000}
              showCursor={false}
              cursorCharacter=""
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start sm:gap-6">
            <a href={GallardoCV} download>
              <button className="px-6 py-2 text-base font-medium text-white transition-all duration-300 border-2 border-orange-600 rounded-full sm:px-8 sm:py-3 sm:text-lg focus:outline-none hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-950">
                Download CV
              </button>
            </a>

            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="https://github.com/welwelg"
                className="text-gray-400 transition-colors duration-200 hover:text-white hover:scale-110"
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rogelio-gallardo"
                className="text-gray-400 transition-colors duration-200 hover:text-blue-400 hover:scale-110"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:welwelgallardo.business@gmail.com"
                className="text-gray-400 transition-colors duration-200 hover:text-orange-400 hover:scale-110"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Right Section: Profile Card */}
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex items-center justify-center w-full md:flex-1"
        >
          <ProfileCard
            name="Wel Tech Code"
            title="Web Developer"
            handle="weltechcode"
            status="Online"
            contactText="Contact Me"
            avatarUrl={Gallardoprof}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />
        </figure>
      </main>
    </div>
  );
}
