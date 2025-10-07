import Image from 'next/image';
import { TfiLinkedin } from 'react-icons/tfi';
import { FiGithub } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
import { HiOutlineDocument } from 'react-icons/hi2';
import ThemeToggle from '@/themeProvider/Switcher/ThemeSwitcher';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

const Header = ({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: Dispatch<SetStateAction<string>>;
  activeTab: string;
}) => {
  return (
    <header className="flex w-full justify-between mb-5 flex-grow-0">
      <Image
        src={'/Logo/SmallLogo.png'}
        width={50}
        height={50}
        alt="Logo"
        className="hover:scale-125 duration-300 cursor-pointer inline-block"
      />

      {activeTab != 'Welcome' && (
        <button onClick={() => setActiveTab('Welcome')}>Back to home</button>
      )}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link
          href={'https://www.linkedin.com/in/david-nikolovski-328394238'}
          target="blank"
          title="Linkedin"
          className="hover:scale-125  duration-300"
        >
          <TfiLinkedin size={'1.6rem'} />
        </Link>
        <Link
          href={'https://github.com/DavidNikolovski24/'}
          target="blank"
          title="Github"
          className="hover:scale-125  duration-300"
        >
          <FiGithub size={'1.6rem'} />
        </Link>
        <Link
          href={'mailto:david.nikolovski.00@gmail.com'}
          target="blank"
          title="Gmail"
          className="hover:scale-125  duration-300"
        >
          <SiGmail size={'1.6rem'} />
        </Link>
        <Link
          href={'/DavidNikolovskiResume(10).pdf'}
          target="_blank"
          rel="noopener noreferrer"
          title="Resume"
          className="hover:scale-125  duration-300"
        >
          <HiOutlineDocument size={'1.6rem'} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
