import React from "react";

const GridBackground = () => {
  return (
    <section
      className="fixed inset-0  
      pointer-events-none 
      min-w-full 
      min-h-screen 
      flex 
      items-center 
      justify-center 
      text-black 
      [background-image:linear-gradient(rgba(0,0,0,0.04)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.04)_2px,transparent_2px)] 
      [background-size:60px_60px] 
      [background-position:0_0,30px_30px]"
    >
      {/* Your content here */}
    </section>
  );
};

export default GridBackground;
