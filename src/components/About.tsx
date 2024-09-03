import Logo from "./logo.png";
import Image from "next/image";
import { Tabs } from "../components/ui/Tabs";
import DevImg from "./ui/DevImg";

import {
  RiUser2Fill,
  RiMailFill,
  RiHome2Fill,
  RiPhoneFill,
  RiGraduationCapFill,
  RiCalendar2Fill,
  RiBriefcase2Fill,
} from "react-icons/ri";
import { qualificationData, skillData } from "../Data";

const infoData = [
  {
    icon: <RiUser2Fill size={20} />,
    text: "Swayam Jain",
  },

  {
    icon: <RiMailFill size={20} />,
    text: "jainswyam4006@gmail.com",
  },

  {
    icon: <RiGraduationCapFill size={20} />,
    text: "B.Tech in Computer Science & Engineering",
  },
  {
    icon: <RiHome2Fill size={20} />,
    text: "India",
  },
];

const About = () => {
  const tabs = [
    {
      title: "Personal",
      value: "personal",
      content: (
        <div className="">
          <Personal />
        </div>
      ),
    },
    {
      title: "Qualification",
      value: "Qualification",
      content: (
        <div className="">
          <Qualification />
        </div>
      ),
    },
    {
      title: "Skills",
      value: "Skills",
      content: (
        <div className="">
          <Skill />
        </div>
      ),
    },
  ];
  return (
    <section id="about">
      <div className="1000px:h-[980px] h-[580px] pb-12 xl:py-24">
        <div className="container mx-auto pr-1  pl-1">
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            About me
          </h2>
          <div className="1000px:flex 1000px:flex-col 1000px:gap-10 1200px:flex-row">
            {/* Image  */}
            <div className="hidden 1000px:flex 1000px:justify-center 1000px:items-center  flex-1 relative">
              <DevImg
                containerStyles="bg-about_shape_dark 1200px:w-[505px] 1000px:w-[324px] 1000px:h-[324px] 1200px:h-[505px] bg-no-repeat relative"
                imgSrc="/logo.png"
              />
            </div>
            {/* tabs */}
            <div className="flex-1 relative ">
              <Tabs tabs={tabs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Personal = () => {
  return (
    <div className="text-center 1200px:text-left ">
      <h3 className="md:h3 lg:h3 mb-4 text-lg">
        Crafting Intuitive Websites with Cutting-Edge Technology
      </h3>
      <p className="subtitle max-w-xl mx-auto xl:mx-0 mb-4 text-sm">
        Hi, I&apos;m Swayam, a MERN Stack Developer with a strong emphasis on
        backend development. I build full-stack web applications that combine
        smooth user interfaces with powerful, efficient server-side operations.
      </p>
      {/* icons */}
      <div className="grid 2xl:grid-cols-1 mb-11">
        {infoData.map((item: any, index: any) => {
          return (
            <div
              className="flex items-center 1200px:items-start 1200px:justify-start gap-x-4 mx-auto 1200px:mx-0 justify-center"
              key={index}
            >
              <div className="">{item.icon}</div>
              <div className="mb-2 lg:text-[16px] md:text-[16px] text-[14px]">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const Qualification = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };
  return (
    <div className="">
      <h3 className="md:h3 lg:h3 mb-8 text-center 1200px:text-left text-lg">
        Awesome Journey
      </h3>
      {/* Experience & education wrapper */}
      <div className="grid md:grid-cols-2 gap-y-8">
        {/* education */}
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-4 items-center text-[15px] md:text-[22px] lg:text-[22px] text-primary">
            <RiGraduationCapFill />
            <h4 className="capitalize font-medium">
              {getData(qualificationData, "education").title}
            </h4>
          </div>
          {/* list */}
          <div className="flex flex-col gap-y-8">
            {getData(qualificationData, "education").data.map(
              (item: any, index: any) => {
                const { university, qualification, years } = item;
                return (
                  <div className="flex gap-x-8 group " key={index}>
                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                    </div>
                    <div>
                      <div className="text-base font-semibold md:text-xl lg:text-xl leading-none mb-2">
                        {university}
                      </div>
                      <div className="text-[14px] md:text-lg lg:text-lg leading-none text-muted-foreground mb-4">
                        {qualification}
                      </div>
                      <div className="text-[12px] lg:text-base md:text-base font-medium">
                        {years}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const Skill = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <div className="text-left">
      <h3 className="md:h3 lg:h3 text-lg mb-8">What I Use Everyday</h3>
      <div className="mb-16">
        <h4 className="text-[15px] md:text-[22px] lg:text-[22px] font-semibold mb-2">
          Skills
        </h4>
        <div className=" border-b border-border mb-4"></div>
        {/* skill list */}
        <div>
          {getData(skillData, "skills").data.map((item: any, index: any) => {
            const { name } = item;
            return (
              <div
                className="w-2/4 1200px:w-full text-center 1200px:text-left xl:textle mx-auto 1200px:mx-0"
                key={index}
              >
                <div className="font-medium lg:text-base md:text-base text-[14px]">
                  {name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* tools */}
      <div>
        <h4 className="text-[15px] md:text-[22px] lg:text-[22px] font-semibold mb-2 xl:text-left">
          Tools{" "}
        </h4>
        <div className=" border-b border-border mb-4"></div>
        {/* tool list */}
        <div className="flex gap-x-8 justify-center 1200px:justify-start">
          {getData(skillData, "tools").data.map((item: any, index: any) => {
            const { imgPath } = item;
            return (
              <div key={index}>
                <Image src={imgPath} width={48} height={48} alt="" priority />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
