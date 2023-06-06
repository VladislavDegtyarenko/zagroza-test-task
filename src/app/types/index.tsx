import { ReactNode } from "react";
import { HTMLInputTypeAttribute } from "react";

export interface SectionTitleProps {
  children: ReactNode;
}

export interface ButtonProps {
  children: ReactNode;
  variant: "solid" | "solid-white" | "outlined";
  align?: "left" | "right";
  className?: string;
}

export interface ButtonIconLinkProps {
  alt?: string;
  href: string;
  icon: ReactNode;
}

export interface ContainerProps {
  children: ReactNode;
}

export interface ParagraphProps {
  children: ReactNode;
  center?: boolean;
  accent?: boolean;
  uppercase?: boolean;
  className?: string;
}

export interface CardProps {
  src: string;
  title: string;
  description: string;
}

export interface InputProps {
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}

export interface NavProps {
  color?: "black" | "white";
}
