declare module "framer-motion" {
  import { HTMLAttributes } from "react";

  interface MotionProps {
    initial?: Record<string, unknown>;
    animate?: Record<string, unknown>;
    transition?: Record<string, unknown>;
    whileInView?: Record<string, unknown>;
  }

  interface MotionDivProps
    extends HTMLAttributes<HTMLDivElement>,
      MotionProps {}

  export const motion: {
    div: React.ForwardRefExoticComponent<
      MotionDivProps & React.RefAttributes<HTMLDivElement>
    >;
  };
}
