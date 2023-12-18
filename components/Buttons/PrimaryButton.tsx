import Link from "next/link";
import React from "react";
interface Props {
  text: string;
  link: string;
}
//
const PrimaryButton = ({ text, link }: Props) => {
  return (
    <Link
      href={link}
      className="inline-block buttonStyled border-color text-center"
      target="_blank"
    >
      <p>{text}</p>
    </Link>
  );
};

export default PrimaryButton;
