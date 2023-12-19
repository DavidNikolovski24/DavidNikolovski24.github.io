import Link from "next/link";
import React from "react";
interface Props {
  text: string;
  link?: string;
  onClick?: () => void;
}
//
const PrimaryButton = ({ text, link, onClick }: Props) => {
  return (
    <>
      {link ? (
        <Link
          href={link}
          className="inline-block buttonStyled border-color text-center"
          target="_blank"
        >
          <p>{text}</p>
        </Link>
      ) : (
        <div
          className="inline-block buttonStyled border-color text-center cursor-pointer"
          onClick={() => {
            if (onClick) onClick();
          }}
        >
          <p>{text}</p>
        </div>
      )}
    </>
  );
};

export default PrimaryButton;
