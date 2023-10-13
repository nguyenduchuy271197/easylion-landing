import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const titleVariants = cva("capitalize", {
  variants: {
    variant: {
      h1: "text-4xl md:text-5xl font-bold",
      h2: "text-3xl font-bold sm:text-4xl",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, variant, ...props }, ref) => {
    const Heading = variant || "h1";
    return (
      <Heading
        className={cn(titleVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Title.displayName = "Title";

export { Title, titleVariants };
