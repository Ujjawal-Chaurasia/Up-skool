import React from "react";
import { useState } from "react";
import axios from "axios";
import { closesignupform } from "../scripts/formhandle";
import { copyContent } from "../scripts/clipboard";
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./loading.css";
import Countdowntimer from "./Countdowntimer";
const SignupForm = () => {
  const [showotpmodal, setShowotpmodal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [childname, setChildname] = useState("");
  const [grade, setGrade] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    //mobile validation
    const regex = /[^0-9]/g;
    if (mobile.length < 10 || regex.test(mobile)) {
      toast("Invalid phone number ");
      setLoading(false);
      return;
    }
    //name validation
    const namePattern = /^[a-zA-Z\s]{1,50}$/; // This pattern allows alphabets and spaces up to 50 characters
    if (!namePattern.test(name)) {
      toast("Please enter a valid name");
      setLoading(false);
      return;
    }
    if (!namePattern.test(childname)) {
      toast("Please enter a valid childname");
      setLoading(false);
      return;
    }

    const userData = {
      childname: childname,
      email: email,
      grade: grade,
      mobile: mobile,
      name: name,
    };

    try {
      const { data } = await axios.post(
        `https://api.up-skool.com/api/user/website`,
        userData
      );
      if (data.success) {
        setShowotpmodal(true);
        toast(data.msg);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.msg);
      console.log(error);
    }
  };
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const enterOTP = otp.join("");
    console.log(enterOTP);
    const userData = {
      mobile: mobile,
      otp: enterOTP,
    };
    try {
      const { data } = await axios.post(
        `https://api.up-skool.com/api/auth/verify-otp`,
        userData
      );
      if (data.success) {
        const token = window.btoa(JSON.stringify(data.data));
        handleOtpFormClose();
        window.location = `https://manage.up-skool.com/login?token=${token}`;
      } else {
        toast.error(data?.msg);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.msg);
      console.log(error);
    }
  };
  const handleOtpFormClose = () => {
    setShowotpmodal(false);
    closesignupform();
  };
  const handlecopyContent = () => {
    toast("Coupon copied to clipboard");
    copyContent();
  };
  return (
    <>
      <ToastContainer />
      {showotpmodal ? (
        <div className=" flex justify-center items-center  h-[100vh] w-[100vw]">
          <div className="relative px-[40px] py-[30px] max-w-[432px]  flex flex-col  overflow-y-auto bg-[url('/signupformbg.png')] bg-white bg-center bg-no-repeat bg-cover">
            <button
              onClick={handleOtpFormClose}
              className="absolute font-bold top-4 right-4 cursor-pointer "
            >
              <img
                src="/close.png"
                className="h-[14px] w-[14px]"
                alt="closeicon"
              />
            </button>
            <h2 className="text-[32px] font-bold">Sign Up</h2>
            <p className="mb-[10px] text-sm">
              Enter the OTP send on your number
            </p>
            <div className="w-[332px]  py-[15px] ">
              <OtpInput
                value={otp.join("")}
                onChange={(value) => setOtp(value.split(""))}
                numInputs={4}
                inputType="tel"
                inputStyle={{
                  width: "48px",
                  height: "40px",
                  border: "1px solid black",
                  borderRadius: "4px",
                  marginRight: "20px",
                }}
                renderInput={(inputProps, index) => (
                  <input {...inputProps} key={index} />
                )}
              />
            </div>
            <div className="px-[5px] mb-[23px] bg-[#9747FF] text-center rounded-[3px]">
              {loading ? (
                <div className="py-[7px]">
                  <button disabled className="loader "></button>
                </div>
              ) : (
                <button
                  onClick={handleOtpSubmit}
                  className="text-white font-semibold w-full  flex justify-center px-4 py-2"
                >
                  <span>Proceed</span>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center items-center  h-[100vh] w-[100vw] ">
          <div className="relative px-[32px] pt-[20px] max-w-[452px]  mx-4 flex flex-col  bg-[url('/signupformbg.png')] bg-white bg-center bg-no-repeat bg-cover">
            <button
              onClick={closesignupform}
              className="absolute font-bold top-4 right-4 cursor-pointer"
            >
              <img src="/close.png" alt="closeicon" />
            </button>
            <div>
              <h2 className="justify-center text-[24px] sm:text-[28px] mb-2 text-center font-bold text-[#9747FF] flex items-center gap-1 sm:gap-2 leading-none">
                <img
                  src="/clock.svg"
                  className="w-[28px] h-[28px]"
                  alt="clockimg"
                />{" "}
                <span>Sale Ends Soon!</span>
              </h2>
            </div>
            <div className="font-extrabold ">
              <Countdowntimer />
            </div>
            <div className="mb-1">
              <p className="text-center ">
                Grab<span className="text-[#9747FF]"> 20% </span> discount by
                using this coupon code:
              </p>
            </div>
            <div className="border-dotted border-2 border-black p-[5px] mx-[5px] mb-3">
              <button
                onClick={handlecopyContent}
                className="active:bg-[#8f9499] flex gap-1 items-center "
              >
                <span>Up-Skool - 20</span>
                <span className="w-[15px] h-[15px]">
                  <img src="/copypasteblack.png" alt="copyimg" />
                </span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col px-[5px] mb-2 ">
                  <label className="text-sm font-medium" htmlFor="name">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="px-2 py-2 border border-black rounded-sm"
                    type="text"
                    id="name"
                    name="name"
                    maxLength="50"
                    minLength="2"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col px-[5px] mb-2">
                  <label className="text-sm font-medium" htmlFor="mobile">
                    Mobile <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="px-2 py-2 border border-black rounded-sm"
                    type="text"
                    id="mobile"
                    maxLength="10"
                    name="mobile"
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col px-[5px] mb-2 ">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="px-2 py-2 border border-black rounded-sm"
                    type="email"
                    id="email"
                    name="email"
                    maxLength="50"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col px-[5px] mb-2 ">
                  <label className="text-sm font-medium" htmlFor="childname">
                    Child's Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="px-2 py-2 border border-black rounded-sm"
                    type="text"
                    id="childname"
                    name="childname"
                    maxLength="50"
                    onChange={(e) => setChildname(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col px-[5px] mb-2 ">
                  <label className="text-sm font-medium" htmlFor="grade">
                    Grade
                  </label>
                  <input
                    className="px-2 py-2 border border-black rounded-sm mb-[23px]"
                    type="text"
                    id="grade"
                    name="grade"
                    maxLength="50"
                    onChange={(e) => setGrade(e.target.value)}
                  />
                </div>
                <div className="px-[5px] mb-[23px] bg-[#9747FF] text-center rounded-[3px]">
                  {loading ? (
                    <div className="py-[7px]">
                      <button disabled className="loader "></button>
                    </div>
                  ) : (
                    <button className="text-white font-semibold w-full  flex justify-center px-4 py-2">
                      <span>Proceed</span>
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupForm;
