import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { copyContent } from "../scripts/clipboard";


const Couponcode = () => {
    const handlecopyContent=()=>{
        toast("Coupon copied to clipboard");
        copyContent();
    }
  return (
    <>
        <ToastContainer/>
        <button
        onClick={handlecopyContent}
        className="active:bg-[#8f9499] px-[16px] sm:px-[24px] py-[12px] text-[15px] border-dotted border-2 rounded flex gap-2 leading-none underline items-center font-bold"
    >
        <span>Up-Skool - 20</span><span
        ><img src="copypaste.png" alt="copyimg" /></span
        >
        </button>
  </>
  )
}

export default Couponcode