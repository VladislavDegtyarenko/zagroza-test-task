import { ParagraphProps } from "../types";

const Paragraph = ({
  children,
  center,
  accent,
  uppercase,
  className = "",
}: ParagraphProps) => {
  return (
    <p
      className={`text-base text-grey break-all mt-4 ${center ? "text-center" : ""} ${
        accent ? "text-accent" : ""
      } ${uppercase ? "uppercase" : ""} ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
