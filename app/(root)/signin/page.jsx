"use client";
import { useContext, useEffect, useState } from "react";
import {
  auth,
  facebookProvider,
  googleProvider,
  twitterProvider,
} from "@/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { Context } from "@/context";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Login = () => {
  const { setUser } = useContext(Context);

  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      const { Input, Ripple, initTE } = await import("tw-elements");
      initTE({ Input, Ripple });
    };
    init();
  }, []);

  const handleSignUpWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);

      if (response) {
        console.log(response);

        setUser(response.user.providerData);

        localStorage.setItem(
          "user",
          JSON.stringify(response.user.providerData)
        );

        router.push("/chat");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUpWithFacebook = async () => {
    try {
      const response = await signInWithPopup(auth, facebookProvider);

      if (response) {
        console.log(response);

        setUser(response.user.providerData);

        localStorage.setItem(
          "user",
          JSON.stringify(response.user.providerData)
        );

        router.push("/chat");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUpWithTwitter = async () => {
    try {
      const response = await signInWithPopup(auth, twitterProvider);

      if (response) {
        console.log(response);

        setUser(response.user.providerData);

        localStorage.setItem(
          "user",
          JSON.stringify(response.user.providerData)
        );
        router.prefetch("/chat");
        window.location.href = "/chat";
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("====================================");
  console.log(auth?.currentUser?.email);
  console.log("====================================");

  return (
    <section className="h-[80vh] mx-36">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              <div className="flex flex-col items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">Sign in with</p>

                <div className="flex mt-5">
                  <button
                    type="button"
                    onClick={handleSignUpWithFacebook}
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={handleSignUpWithTwitter}
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>

                  <button
                    onClick={handleSignUpWithGoogle}
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mx-1 h-9 w-9 flex items-center justify-center rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    <FaGoogle className="text-center" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
