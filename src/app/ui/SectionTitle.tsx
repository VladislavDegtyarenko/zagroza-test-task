import { SectionTitleProps } from "../types";

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-center text-accent-dark">{children}</h2>
      <span className="block w-[97px] h-[3px] bg-action mx-auto mt-4"></span>
    </>
  );
};

export default SectionTitle;
