"use client";
import Image from "next/image";
import { TfiLinkedin } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { HiOutlineDocument } from "react-icons/hi2";
import ThemeToggle from "@/themeProvider/Switcher/ThemeSwitcher";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full justify-between mb-5 flex-grow-0">
      <a href="/" className="inline-block">
        <Image
          src={"/Logo/SmallLogo.png"}
          width={50}
          height={50}
          alt="Logo"
          className="hover:scale-125 duration-300 dark-filter dark:filter"
        />
      </a>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link
          href={"https://mk.linkedin.com/in/david-nikolovski-328394238"}
          target="blank"
          title="Linkedin"
          className="hover:scale-125  duration-300"
        >
          <TfiLinkedin size={"1.6rem"} />
        </Link>
        <Link
          href={"https://github.com/DavidNikolovski24/"}
          target="blank"
          title="Github"
          className="hover:scale-125  duration-300"
        >
          <FiGithub size={"1.6rem"} />
        </Link>
        <Link
          href={"mailto:david.nikolovski.00@gmail.com"}
          target="blank"
          title="Gmail"
          className="hover:scale-125  duration-300"
        >
          <SiGmail size={"1.6rem"} />
        </Link>
        <Link
          href={"/DavidNikolovskiResume(8).pdf"}
          target="_blank"
          rel="noopener noreferrer"
          title="Resume"
          className="hover:scale-125  duration-300"
        >
          <HiOutlineDocument size={"1.6rem"} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
