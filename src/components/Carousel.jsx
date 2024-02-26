import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
const CarouselComponent = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <>
      <div className="pb-[40px] ">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          containerProps={{
            style: {
              width: "100%",
              justifyContent: "space-around",
              userSelect: "none",
            },
          }}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 25,
            },
            children: (
              <span>
                <img src="/right-arrow.png" alt="right" />
              </span>
            ),
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 25,
            },
            children: (
              <span>
                <img src="/left-arrow.png" alt="left" />
              </span>
            ),
          }}
          responsiveProps={[
            {
              itemsToShow: 2,
              itemsToScroll: 2,
              minWidth: 768,
            },
            {
              itemsToShow: 3,
              itemsToScroll: 3,
              minWidth: 1024,
            },
          ]}
          speed={400}
          easing="linear"
          autoplay
          autoplayDelay={3000}
        >
          <div>
            <div className="relative p-[30px] pb-[50px] mb-[80px] flex flex-col items-center mx-[5px] w-[270px] sm:w-[316px] shadow-[0_10px_10px_0_rgba(0,0,0,.1)] text-center">
              <div className="pb-1">
                <img
                  src="/invertedcommas.png"
                  alt="comma"
                  className=" w-[48px] h-[38px]"
                />
              </div>
              <p className="mb-8">
                “A big shout out to Upskool! Thank you for getting my
                four-year-old son Keshav’s interest in counting. He loves it.“
              </p>
              <div className="absolute bottom-[-74px]">
                <div className="flex justify-center mb-5">
                  <img
                    src="/avatar.png"
                    className="w-[70px] h-[70px]"
                    alt="avatar"
                  />
                </div>
                <h3 className="text-[18px] font-medium">Keshav's Mother</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="relative p-[30px] pb-[50px] mb-[80px] flex flex-col items-center mx-[5px] w-[270px] sm:w-[316px] shadow-[0_10px_10px_0_rgba(0,0,0,.1)] text-center">
              <div className="pb-1">
                <img
                  src="/invertedcommas.png"
                  alt="comma"
                  className=" w-[48px] h-[38px]"
                />
              </div>
              <p className="mb-8">
                “A big shout out to Upskool! Thank you for getting my
                four-year-old son Keshav’s interest in counting. He loves it.“
              </p>
              <div className="absolute bottom-[-74px]">
                <div className="flex justify-center mb-5">
                  <img
                    src="/avatar.png"
                    className="w-[70px] h-[70px]"
                    alt="avatar"
                  />
                </div>
                <h3 className="text-[18px] font-medium">Keshav's Mother</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="relative p-[30px] pb-[50px] mb-[80px] flex flex-col items-center mx-[5px] w-[270px] sm:w-[316px] shadow-[0_10px_10px_0_rgba(0,0,0,.1)] text-center">
              <div className="pb-1">
                <img
                  src="/invertedcommas.png"
                  alt="comma"
                  className=" w-[48px] h-[38px]"
                />
              </div>
              <p className="mb-8">
                “A big shout out to Upskool! Thank you for getting my
                four-year-old son Keshav’s interest in counting. He loves it.“
              </p>
              <div className="absolute bottom-[-74px]">
                <div className="flex justify-center mb-5">
                  <img
                    src="/avatar.png"
                    className="w-[70px] h-[70px]"
                    alt="avatar"
                  />
                </div>
                <h3 className="text-[18px] font-medium">Keshav's Mother</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="relative p-[30px] pb-[50px] mb-[80px] flex flex-col items-center mx-[5px] w-[270px] sm:w-[316px] shadow-[0_10px_10px_0_rgba(0,0,0,.1)] text-center">
              <div className="pb-1">
                <img
                  src="/invertedcommas.png"
                  alt="comma"
                  className=" w-[48px] h-[38px]"
                />
              </div>
              <p className="mb-8">
                “A big shout out to Upskool! Thank you for getting my
                four-year-old son Keshav’s interest in counting. He loves it.“
              </p>
              <div className="absolute bottom-[-74px]">
                <div className="flex justify-center mb-5">
                  <img
                    src="/avatar.png"
                    className="w-[70px] h-[70px]"
                    alt="avatar"
                  />
                </div>
                <h3 className="text-[18px] font-medium">Keshav's Mother</h3>
              </div>
            </div>
          </div>
        </ReactSimplyCarousel>
      </div>
    </>
  );
};

export default CarouselComponent;
