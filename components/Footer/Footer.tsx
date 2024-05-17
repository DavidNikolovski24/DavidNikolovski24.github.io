import { PiCopyrightFill } from "react-icons/pi";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex-grow-0 mt-5">
      <div className="flex gap-1 items-center justify-end">
        <p className="text-xs font-light"> David Nikolovski {currentYear} </p>
        <PiCopyrightFill />
      </div>
    </footer>
  );
}
