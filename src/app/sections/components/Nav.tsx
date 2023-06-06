import Link from "next/link";
import ButtonIconLink from "@/app/ui/ButtonIconLink";
import FacebookIcon from "../assets/FacebookIcon";
import InstagramIcon from "../assets/InstagramIcon";
import { NavProps } from "@/app/types";

const Nav = ({ color }: NavProps) => {
  return (
    <nav
      className={`flex  space-x-2 sm:space-x-6 lg:space-x-20 ${
        color === "white" ? "text-white" : "text-black"
      }`}
    >
      <li>
        <Link href="/">o que fazemos</Link>
      </li>
      <li>
        <Link href="/">como te ajudamos</Link>
      </li>
      <li>
        <Link href="/">fale conosco</Link>
      </li>
      <li className="flex space-x-4">
        <ButtonIconLink
          href="/"
          icon={<FacebookIcon />}
          alt="Visit our Instagram page!"
        />
        <ButtonIconLink
          href="/"
          icon={<InstagramIcon />}
          alt="Visit our Facebook page!"
        />
      </li>
    </nav>
  );
};

export default Nav;
