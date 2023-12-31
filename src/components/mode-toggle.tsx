"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";

export default function ModeToggle({ className, ...props }: ButtonProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={className}
      {...props}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all -rotate-90 scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
