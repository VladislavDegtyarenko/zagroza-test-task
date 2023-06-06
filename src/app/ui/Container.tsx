import { ReactNode } from "react";

import { ContainerProps } from "../types";

const Container = ({ children }: ContainerProps) => {
  return <div className="container">{children}</div>;
};

export default Container;
