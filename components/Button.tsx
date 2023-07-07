import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import React from "react";

const buttonVariants = cva(
  "text-white font-bold py-2 px-4 rounded flex m-auto",
  {
    variants: {
      variant: {
        default: "bg-blue-500 hover:bg-blue-700 ",
        primary: "bg-red-500 hover:bg-red-700",
        secondary: "bg-green-500 hover:bg-green-700",
      },
      size: {
        default: "text-sm",
        small: "text-xs",
        large: "text-lg",
        xlarge: "text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin my-auto" />
        ) : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
