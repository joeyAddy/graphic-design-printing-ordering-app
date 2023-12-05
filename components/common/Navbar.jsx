"use client";
import { Context } from "@/context";
import { auth } from "@/firebase-config";
import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useEffect } from "react";
import logo from "@/assets/images/EDYgraphicS.png";

const Navbar = () => {
  const router = useRouter();

  const { user, setUser } = useContext(Context);

  useEffect(() => {
    const init = async () => {
      const { Collapse, Chip, Ripple, Dropdown, initTE } = await import(
        "tw-elements"
      );
      initTE({ Collapse, Chip, Ripple, Dropdown });
    };
    init();

    console.log(user);
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut(auth);

      setIsLoading(false);
      localStorage.removeItem("user");
      setUser(null);
      window.location.href = "/signin";
      console.log(response, "response");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <nav
      className="sticky z-[50] top-0 right-0 left-0 flex w-full items-center justify-between bg-white py-6 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <div className="flex items-center">
          <button
            className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* <!-- Navbar brand --> */}
          <a className="text-primary dark:text-primary-400" href="/">
            <span className="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0 flex items-center">
              <Image
                src={logo.src}
                width={200}
                height={20}
                alt="logo"
                className="aspect-auto"
              />
            </span>
          </a>
        </div>

        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContentY"
          data-te-collapse-item
        >
          <ul
            className="mx-auto lg:flex lg:flex-row md:space-x-4"
            data-te-navbar-nav-ref
          >
            <li data-te-nav-item-ref>
              <a
                className="block text-lg py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 hover:-translate-y-1 focus:text-blue-700 focus:underline focus:underline-offset-8 focus:und disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                href="/"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                disabled
              >
                Home
              </a>
            </li>
            <li data-te-nav-item-ref>
              <a
                className="block text-lg py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 hover:-translate-y-1 focus:text-blue-700 focus:underline focus:underline-offset-8 focus:und disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                href="/services"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Services
              </a>
            </li>
            <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
              <a
                className="block text-lg py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 hover:-translate-y-1 focus:text-blue-700 focus:underline focus:underline-offset-8 focus:und disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                href="/design-templates"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Templates
              </a>
            </li>
            <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
              <a
                className="block text-lg py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 hover:-translate-y-1 focus:text-blue-700 focus:underline focus:underline-offset-8 focus:und disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                href="/about-us"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                About us
              </a>
            </li>
            <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
              <a
                className="block text-lg py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 hover:-translate-y-1 focus:text-blue-700 focus:underline focus:underline-offset-8 focus:und disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
                href="/contact-us"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
          {user === null ? (
            <button
              type="button"
              onClick={() => {
                router.push("/signin");
              }}
              className="inline-block text-sm rounded bg-primary px-6 pt-2.5 pb-2 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Sign In
            </button>
          ) : (
            <div className="flex items-center space-x-3 gap-y-3 flex-wrap">
              <div
                data-te-chip-init
                data-te-ripple-init
                className="[word-wrap: break-word] my-[5px] flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                data-te-close="true"
              >
                <img
                  className="my-0 -ml-[12px] mr-[8px] h-[inherit] w-[inherit] rounded-[100%]"
                  src={`${
                    user[0]?.photoURL ||
                    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  }`}
                  alt="avatar"
                />
                {user[0].displayName || user[0].email || user[0].phoneNumber}
              </div>
              <Link
                href="/chat"
                className="text-sm border inline-block rounded-full px-6 py-1 font-medium leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                Messenger
              </Link>
              <button
                type="button"
                onClick={handleSignOut}
                className="text-sm inline-block border rounded-full px-6 py-1 font-medium leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                {isLoading ? "Signing out.." : "Sign out"}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
