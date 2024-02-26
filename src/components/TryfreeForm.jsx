import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { closetryfreeform } from "../scripts/formhandle";
import "react-toastify/dist/ReactToastify.css";
import OtpInput from "react-otp-input";
const TryfreeForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [childname, setChildname] = useState("");
  const [showotpmodal, setShowotpmodal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading,setLoading]=useState(false);

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
      mobile: mobile,
      name: name,
    };

    try {
      // const config = { headers: { "Content-Type": "application/json","Access-Control-Allow-Origin": "*" } };
      const { data } = await axios.post(
        `https://api.up-skool.com/api/user/website-try`,
        userData
      );
      if (data.success) {
        setShowotpmodal(true);
        toast(data.msg);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Signup failed mobile might already exists");
    }
  };
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const enterOTP = otp.join("");
    const userData = {
      mobile: mobile,
      otp: enterOTP,
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
      const { data } = await axios.post(
        `https://api.up-skool.com/api/auth/verify-otp`,
        userData,
        config
      );
      if (data.success) {
        const token = window.btoa(JSON.stringify(data.data));
        handleOtpFormClose();
        window.location = `https://manage.up-skool.com/login?token=${token}`;
      } else {
        throw Error(data.msg);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("OTP verification failed");
      // console.log(error);
    }
  };
  const handleOtpFormClose = () => {
    setShowotpmodal(false);
    closetryfreeform();
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
        <div className="relative px-[32px] pt-[40px] max-w-[432px]  flex flex-col gap-4   overflow-y-auto bg-[url('/signupformbg.png')] bg-white bg-center bg-no-repeat bg-cover">
          <button
            onClick={closetryfreeform}
            className="absolute font-bold top-4 right-4 cursor-pointer "
          >
            <img
              src="/close.png"
              className="h-[14px] w-[14px]"
              alt="closeicon"
            />
          </button>
          <div className="flex justify-center">
            <h2 className="text-wrap text-[28px] font-bold text-[#9747FF] flex items-center gap-2 ">
              Try Karo Woh Bhi For Free!!
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="flex flex-col px-[5px] mb-[23px]">
                <label className="text-sm font-medium" htmlFor="name">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  className="px-4 py-2 border-2 border-black rounded-sm"
                  type="text"
                  id="name"
                  name="name"
                  maxLength="50"
                  minLength="2"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col px-[5px] mb-[23px]">
                <label className="text-sm font-medium" htmlFor="mobile">
                  Mobile <span className="text-red-600">*</span>
                </label>
                <input
                  className="px-4 py-2 border-2 border-black rounded-sm"
                  type="text"
                  id="mobile"
                  maxLength="10"
                  name="mobile"
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col px-[5px] mb-[23px]">
                <label className="text-sm font-medium" htmlFor="childname">
                  Your Child's Name <span className="text-red-600">*</span>
                </label>
                <input
                  className="px-4 py-2 border-2 border-black rounded-sm"
                  type="text"
                  id="childname"
                  name="childname"
                  maxLength="50"
                  onChange={(e) => setChildname(e.target.value)}
                  required
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
      )}
    </>
  );
};

export default TryfreeForm;
