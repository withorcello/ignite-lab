import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

function fontSize(size: String) {
  switch (size) {
    case "sm":
      return " text-xs";
    case "md":
      return " text-sm";
    case "lg":
      return " text-md";
  }
}

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

export function Text({ size = "md", children, asChild }: TextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={`
        text-grey-100
        ${fontSize(size)}
      `}
    >
      { children }
    </Comp>
  );
}