import { CardProps } from "../types";
import Image from "next/image";
import Paragraph from "../ui/Paragraph";

const Card = ({ src, title, description }: CardProps) => {
  return (
    <div className="pt-24 h-full">
      <div className=" relative p-4 lg:p-8 h-full rounded-[20px] shadow-[0_9px_27px_rgba(0,0,0,0.1)]">
        <div className="absolute w-32 h-32 lg:w-44 lg:h-44 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src={src} fill={true} alt="" className=""></Image>
        </div>
        <h3 className="text-lg font-semibold mt-32">{title}</h3>
        <Paragraph>{description}</Paragraph>
        <button className="relative w-6 h-6 rounded-full block ml-auto">
          <Image src="/plus.svg" fill={true} alt="add"></Image>
        </button>
      </div>
    </div>
  );
};

export default Card;
