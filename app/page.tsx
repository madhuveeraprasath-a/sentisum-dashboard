"use client";
import Image from "next/image";
import LoginComponent from "./components/LoginComponent";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const bookDemoHandler = () => {
    window.open("https://www.sentisum.com/about/book-demo", "_blank");
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      router.push("/dashboard");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex w-full md:w-1/2 bg-neutral-100 items-center justify-center p-10 relative">
        <div className="absolute top-4 left-6">
          <Image
            src="/images/sentisumLogo.webp"
            alt="Logo"
            height={80}
            width={80}
            className="mb-4"
          />
        </div>

        <div>
          <div className="text-[36px] md:text-[54px] font-bold leading-snug">
            Fix today&apos;s{" "}
            <span className="text-primary-500">experience</span>,
            <br />
            Build tomorrow&apos;s{" "}
            <span className="bg-primary-500 text-neutral-100 px-4 py-2 rounded-3xl">
              brand.
            </span>
          </div>
          <div>
            <button
              onClick={bookDemoHandler}
              className="h-11 rounded-lg bg-black text-neutral-100 font-semibold text-sm px-4 mt-8 transition-all duration-300"
            >
              BOOK A DEMO
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-neutral-200">
        <LoginComponent />
      </div>
    </div>
  );
}
