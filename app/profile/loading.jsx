import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex-center">
      <Image
        src={"assets/icons/loader.svg"}
        alt="loading"
        width={50}
        height={50}
        className="object-contain"
      />
    </div>
  );
};

export default Loading;
