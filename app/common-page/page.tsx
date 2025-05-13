"use client";
import { useAuthRedirect } from "../utills/useAuthRedirect";

const CommonPage = () => {
  useAuthRedirect();
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <p className="mt-4 text-lg text-center font-semibold">
        Redirection yet to given
      </p>
    </div>
  );
};

export default CommonPage;
