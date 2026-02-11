'use client'

import DiagonalPattern from "./DiagonalPattern"; // adjust path as needed

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="relative max-w-5xl mx-auto">
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