import React from "react";

export const MessageBar = () => {
  return (
    <section className="h-8 md:h-12 w-full md:flex max-w-full bg-purple-700 text-firmes-black p-2 items-center justify-center fixed z-40  bottom-0 overflow-hidden marquee running js-marquee">
      <div className="hidden marquee-inner md:flex justify-center items-center">
        <p className="hidden md:inline-block text-xs text-center lg:text-base 2xl:text-xl font-extrabold">ABSTRACT~IDEAS%LAT1NO’BASED[CREATIVECREATURES%%IMPACTSEEKERS&//CHANGEMAKERS++.EMPATHY&LOVE**EVOLVE()INTO==HIGHERSELF+MEANINGFUL%CONTENT`’INTUITION#BUILT 
        </p>
      </div>
      <p className="animation-message-bar sm:hidden text-sm">
      ABSTRACT~IDEAS%LAT1NO’BASED[CREATIVECREATURES%%IMPACTSEEKERS&//CHANGEMAKERS++.EMPATHY&LOVE**EVOLVE()INTO==HIGHERSELF+MEANINGFUL%CONTENT`’INTUITION#BUILT 
      </p>
    </section>
  );
};

