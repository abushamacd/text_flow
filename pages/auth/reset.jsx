import CustomHead from "@/components/CustomHead";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Auth.module.css";
import logo from "./../../public/images/logo.png";

const Reset = () => {
  return (
    <>
      <CustomHead title={"Forget Password"} />
      <div
        className={`flex justify-evenly items-center h-screen	bg-main-bg dark:bg-main-dark-bg text-custom_color`}
      >
        <div className="logo">
          <Image width={200} height={200} alt="logo" src={logo} />
        </div>
        <div
          className={`${styles.box} bg-main-bg dark:bg-secondary-dark-bg h-[320px] before:h-[320px] after:h-[320px]`}
        >
          <div
            className={`${styles.content} bg-main-bg dark:bg-secondary-dark-bg`}
          >
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-center">
                Forget Password
              </h3>
              <div className="form flex flex-col">
                <form className="space-y-6 flex flex-col">
                  <div className={`${styles.inputBox}`}>
                    <input
                      className={``}
                      type="email"
                      name="email"
                      id="email"
                      required="required"
                    />
                    <span className={``}>Email</span>
                    <i className="bg-custom_bg"></i>
                  </div>

                  <div className="links flex justify-between">
                    <Link href={`/auth/login`}>Sign In</Link>
                    <Link href={`/auth/registration`}>Sign Up</Link>
                  </div>
                  <input
                    className={`text-[#1D2434] w-24 px-4 py-2 rounded-lg mx-auto bg-custom_bg`}
                    type="submit"
                    value="Reset"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
