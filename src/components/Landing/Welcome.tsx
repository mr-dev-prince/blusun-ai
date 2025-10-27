import React from "react";
import { BiStar } from "react-icons/bi";
import cw from "../../assets/content-writing.webp";
import tw from "../../assets/typewriter.webp";

const Welcome: React.FC = () => {
  return (
    <div className="h-fit w-full">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex gap-2">
          <BiStar color="#fed50a" />
          <p className="text-secondary text-xl font-semibold">
            Discover more about us
          </p>
        </div>
        <div>
          <p className="text-primary text-6xl md:text-8xl font-black">
            Welcome to <br /> our agency!
          </p>
        </div>
        <div className="mt-4">
          <p className="text-secondary text-right text-xl font-semibold">
            We help our clients to extract <br /> the most out of words. <br />{" "}
            We provide the <br />
            art of words.
          </p>
        </div>
      </div>
      <div className="mt-8 flex w-full gap-8 md:px-12">
        <div className="relative flex flex-col md:flex-row w-full md:w-[50%] justify-end md:gap-4">
          <img src={cw} alt="" className="md:h-[50vh] rounded-xs" />
          <img src={tw} alt="" className="md:h-[50vh] rounded-xs" />
          <p className="absolute text-4xl md:text-2xl font-extrabold text-primary bottom-[50%] left-12 md:-bottom-12 md:left-64 w-[70%]">
            We believe words should do more than speak - they should connect,
            inspire, and leave a lasting mark.
          </p>
        </div>
        <div className="hidden md:flex w-[50%] flex-col gap-12">
          <div className="text-muted flex w-full items-start justify-center gap-8 text-sm font-medium">
            <div className="w-[50%]">
              <p className="text-justify">
                Words are more than sentences; they’re bridges between thoughts
                and emotions. <strong>Parth</strong> is a passionate content
                writer who believes that the right words can turn ideas into
                impact. With a blend of creativity and strategy, every piece
                written here is crafted to inspire action, spark curiosity, and
                build genuine connection. <br />
                <br />
                From blogs and articles to brand copy and storytelling, each
                project is handled with care — ensuring tone, style, and
                substance work in perfect harmony. Writing isn`t just a service
                here; it`s a craft, honed through understanding audiences and
                shaping messages that truly resonate.
              </p>
            </div>
            <div className="w-[50%]">
              <p className="text-justify">
                Behind every project is a commitment to authenticity and
                precision. The goal isn`t just to fill pages with words but to
                create meaning that lingers, stories that stay, and content that
                performs. Because great writing doesn`t just tell — it shows,
                moves, and matters. <br />
                <br />
                Each piece begins with understanding — of your brand, your
                audience, and your purpose. It`s about transforming ideas into
                narratives that breathe life into your message. Every paragraph
                is built with rhythm and intent, blending creativity with
                strategy so the final piece doesn`t just read beautifully but
                works beautifully.
              </p>
            </div>
          </div>
          <div className="flex w-full justify-end">
            <p className="w-[40%] text-xl font-semibold">
              We a offer a full range of content writing services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
