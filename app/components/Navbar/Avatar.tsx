import { UserInfoInterface } from "@/app/constants/Interface";
import Image from "next/image";
import React from "react";

const Avatar = ({ userData }: UserInfoInterface) => {
  const { name, imageUrl } = userData;

  return (
    <React.Fragment>
      {imageUrl ? (
        <div className="rounded-full">
          <Image src={imageUrl} height={44} width={44} alt={name} />
        </div>
      ) : (
        <div className="h-11 w-11 rounded-full border border-neutral-400 bg-warning-500 flex items-center justify-center">
          <p className="text-white font-semibold text-lg">
            {userData?.name?.charAt(0)?.toUpperCase()}
          </p>
        </div>
      )}
    </React.Fragment>
  );
};

export default Avatar;
