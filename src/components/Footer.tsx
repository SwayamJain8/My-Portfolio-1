import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/Data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-4 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p
          className="text-white-200 md:mt-10 my-5
         text-center"
        >
          Reach out to me today and let&apos;s dicuss how I can help you achieve
          your goals.
        </p>
        <a href="mailto:jainswyam4006@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal">
          Copyright &#xa9; 2024 Swayam
        </p>
        <div className="flex items-center md:gap-3 lg:gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180
                 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 ml-3 mt-3"
            >
              <a href={profile.url}>
                <Image src={profile.img} alt="" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
