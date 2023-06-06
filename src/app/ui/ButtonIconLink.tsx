import Link from "next/link";
import { ButtonIconLinkProps } from "../types";

const ButtonIconLinkProps = ({ icon, ...props }: ButtonIconLinkProps) => {
  return <Link {...props}>{icon}</Link>;
};

export default ButtonIconLinkProps;
