import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import styles from "./../styles/Auth.module.css";

const UserProfile = ({ setIsClicked }) => {
  return (
    <div className="absolute z-[999] right-4 top-16 bg-white dark:bg-[#050b2f] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg text-custom_color">User Profile</p>
        <button
          type="button"
          onClick={() => setIsClicked(false)}
          className={`text-[#00EBE7] text-[20px] p-3 duration-300 rounded-full hover:drop-shadow-xl hover:bg-light-gray`}
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src="https://i.ibb.co/MgsTCcv/avater.jpg"
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-custom_color">
            {" "}
            Abu Shama
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {" "}
            Super Admin{" "}
          </p>
          <p className="text-white text-sm font-semibold dark:text-gray-400">
            {" "}
            contact@imshama.com{" "}
          </p>
        </div>
        <label htmlFor="my-modal-4">
          <FaUserEdit className="text-custom_color text-[30px]" />
        </label>
      </div>
      <div className="mt-5">
        <button
          type="button"
          className={`text-[#fff] bg-secondary-dark-bg text-[20px] w-full p-3 duration-300 rounded-lg hover:drop-shadow-xl hover:bg-[#00EBE7]`}
        >
          Logout
        </button>
      </div>
      {/* Modal */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <div
          className={`flex justify-evenly items-center p-4 rounded-lg	bg-main-bg dark:bg-main-dark-bg text-custom_color`}
        >
          <div
            className={`${styles.box} bg-main-bg dark:bg-secondary-dark-bg h-[400px] before:h-[400px] after:h-[400px]`}
          >
            <div
              className={`${styles.content} bg-main-bg dark:bg-secondary-dark-bg`}
            >
              <div className="py-6 px-6 lg:px-8">
                <h3 className="mb-1 text-xl font-medium text-center">
                  Update Profile
                </h3>
                <div className="form flex flex-col">
                  <form className="space-y-6 flex flex-col">
                    <div className={`${styles.inputBox}`}>
                      <input
                        className={``}
                        type="password"
                        name="password"
                        id="password"
                        required="required"
                      />
                      <span className={``}>Old Password</span>
                      <i className="bg-custom_bg"></i>
                    </div>
                    <div className={`${styles.inputBox}`}>
                      <input
                        className={``}
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        required="required"
                      />
                      <span className={``}>New Password</span>
                      <i className="bg-custom_bg"></i>
                    </div>
                    <div
                      className={`${styles.inputBox} flex justify-around pb-2`}
                    >
                      <div
                        className={`image w-[50px] h-[50px] rounded-full border overflow-hidden`}
                      >
                        <img
                          className={`w-full h-full object-cover `}
                          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                          alt="userPhoto"
                        />
                      </div>
                      <div
                        className={`file flex flex-col justify-center items-center`}
                      >
                        <label
                          className={`cursor-pointer dark:bg-main-dark-bg px-4 py-2 rounded-lg`}
                          htmlFor="image"
                        >
                          Upload Image
                        </label>
                        <input
                          className={`hidden`}
                          type="file"
                          name="image"
                          id="image"
                        />
                      </div>
                      <i className="bg-custom_bg"></i>
                    </div>
                    <input
                      className={`text-[#1D2434] px-4 py-2 rounded-lg mx-auto bg-custom_bg`}
                      type="submit"
                      value="Sign Up"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default UserProfile;
