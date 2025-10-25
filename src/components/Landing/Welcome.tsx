import React from "react";
import { BiStar } from "react-icons/bi";
import cw from "../../assets/content-writing.webp";
import tw from "../../assets/typewriter.webp";

const Welcome: React.FC = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex gap-2">
          <BiStar color="#fed50a" />
          <p className="text-secondary-text text-xl font-semibold">
            Discover more about us
          </p>
        </div>
        <div>
          <p className="text-primary-text text-8xl font-black">
            Welcome to <br /> our agency!
          </p>
        </div>
        <div className="mt-4">
          <p className="text-secondary-text text-right text-xl font-semibold">
            We help our clients to extract <br /> the most out of words. <br />{" "}
            We provide the <br />
            art of words.
          </p>
        </div>
      </div>
      <div className="mt-8 flex w-full px-12 gap-8">
        <div className="flex w-[50%] gap-4 justify-end">
          <img src={cw} alt="" className="h-[50vh] rounded-xs" />
          <img src={tw} alt="" className="h-[50vh] rounded-xs" />
        </div>
        <div className="flex w-[50%] text-muted items-start justify-center gap-8 font-medium text-sm">
          <div className="w-[50%]">
            <p className="text-justify">
              Words are more than sentences; they’re bridges between thoughts
              and emotions. <strong>Parth</strong> is a passionate content
              writer who believes that the right words can turn ideas into
              impact. With a blend of creativity and strategy, every piece
              written here is crafted to inspire action, spark curiosity, and
              build genuine connection. <br /><br />
              From blogs and articles to brand copy and storytelling, each
              project is handled with care — ensuring tone, style, and substance
              work in perfect harmony. Writing isn`t just a service here; it`s a
              craft, honed through understanding audiences and shaping messages
              that truly resonate.
            </p>
          </div>
          <div className="w-[50%]">
            <p className="text-justify">
              Behind every project is a commitment to authenticity and
              precision. The goal isn`t just to fill pages with words but to
              create meaning that lingers, stories that stay, and content that
              performs. Because great writing doesn`t just tell — it shows,
              moves, and matters. <br /><br />
              Each piece begins with understanding — of your brand, your
              audience, and your purpose. It`s about transforming ideas into
              narratives that breathe life into your message. Every paragraph is
              built with rhythm and intent, blending creativity with strategy so
              the final piece doesn`t just read beautifully but works
              beautifully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
