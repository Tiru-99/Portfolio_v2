'use client'

import DiagonalPattern from "./DiagonalPattern"; // adjust path as needed
import { cn } from "@/lib/utils";
type ContainerProps = {
  children: React.ReactNode;
  className?:string 
};

export default function Container({ children , className }: ContainerProps) {
  return (
    <div className={cn("relative mx-auto" , className)}>
      {/* Left diagonal pattern - positioned outside left border */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-16 -translate-x-full overflow-hidden">
        <DiagonalPattern side="left" />
      </div>
      
      {/* Right diagonal pattern - positioned outside right border */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-16 translate-x-full overflow-hidden">
        <DiagonalPattern side="right" />
      </div>
      
      {/* Main container with borders */}
      <div className="relative ">
        {children}
      </div>
    </div>
  );
}