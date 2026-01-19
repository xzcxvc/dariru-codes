import React from "react";

type ShadowProps = {
  className?: string;
};
const Shadow = ({ className }: ShadowProps) => {
  return <div className={`${className} absolute -z-50 inset-0`} />;
};

export default Shadow;
