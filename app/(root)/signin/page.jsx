"use client";
import { useContext, useEffect, useState } from "react";
import {
  auth,
  facebookProvider,
  googleProvider,
  twitterProvider,
} from "@/firebase-config";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { Context } from "@/context";
import { FaGoogle, FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Login = () => {
  const { setUser, user } = useContext(Context);

  const [phone, setPhone] = useState("+234");
  const [otp, setOtp] = useState("");
  const [userPhoneData, setUserPhoneData] = useState("");
  const [optMessage, setOptMessage] = useState("");
  const [verifyMessage, setVerifyMessage] = useState("");
  const [loadingOTP, setLoadingOTP] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      const { Input, Ripple, initTE } = await import("tw-elements");
      initTE({ Input, Ripple });
    };
    init();
  }, []);

  useEffect(() => {
    if (user) {
      router.replace("/chat");
    }
  }, [user]);

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

  const handleSignWithPhoneNumber = (e) => {
    e.preventDefault();
    if (phone === "" || phone.length < 10) return;
    setLoadingOTP(true);

    let recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
    signInWithPhoneNumber(auth, `${phone}`, recaptcha)
      .then((result) => {
        console.log("====================================");
        console.log(result);
        console.log("====================================");
        setUserPhoneData(result);
        setLoadingOTP(false);
        setOptMessage("OTP has been successfully sent");
        // window.location.href = "/chat";
      })
      .catch((err) => {
        setLoadingOTP(false);
        window.location.reload;
        console.log(err);
        // window.location.reload();
      });
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (userPhoneData === "") return;
    setVerifying(true);
    try {
      const data = await userPhoneData.confirm(otp);
      console.log("====================================");
      console.log(data);
      console.log("====================================");

      setUser(data.user.providerData);
      setVerifying(false);
      setVerifyMessage("OTP Verified");

      localStorage.setItem("user", JSON.stringify(data.user.providerData));
      router.prefetch("/chat");
      window.location.href = "/chat";
    } catch (error) {
      setVerifying(false);

      console.log(error);
    }
  };

  return (
    <section className="min-h-[80vh] mx-36">
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
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
              </div>
              <div className="flex flex-col md:flex-row space-x-3">
                <div
                  className="relative mb-6 flex-1"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="phone"
                    placeholder="Phone Number "
                  />
                  <label
                    for="phone"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Enter your phone number
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={handleSignWithPhoneNumber}
                    className="inline-block rounded text-center bg-primary mb-6 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    {loadingOTP === true ? (
                      <FaSpinner className="animate-spin mx-auto" />
                    ) : (
                      " Send OTP"
                    )}
                  </button>
                </div>
              </div>
              <div id="recaptcha" className="mb-6" />
              {optMessage && (
                <p className="text-green-500 font-semibold text-lg mb-6">
                  {optMessage}
                </p>
              )}
              <div className="flex flex-col md:flex-row space-x-3">
                <div
                  className="relative mb-6 flex-1"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="otp"
                    placeholder="OTP Code "
                  />
                  <label
                    for="otp"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Enter the OTP{" "}
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handleVerifyOTP}
                    type="button"
                    className="inline-block rounded text-center bg-primary mb-6 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    {verifying === true ? (
                      <FaSpinner className="animate-spin mx-auto" />
                    ) : (
                      "Verify OTP"
                    )}
                  </button>
                </div>
                {verifyMessage && (
                  <p className="text-green-500 font-semibold text-lg mb-6">
                    {verifyMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
