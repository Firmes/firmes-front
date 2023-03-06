import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getZodiac } from "../../helpers/getZodiac";
import logo from "../../assets/logo.png"
import elipLeft from "../../assets/Ellipse 1.png"
import moon from "../../assets/Subtract.png"
import elipRight from "../../assets/Ellipse 2.png"


export const Header = () => {
  const [date, setDate] = useState({
    day: null,
    month: null,
    year: null,
    hour: null,
    minutes: null,
  });
  const [zodiac, setZodiac] = useState(null);

  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  const startTime = () => {
    let today = new Date();

    setDate({
      day: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear(),
      hour: today.getHours(),
      minutes: checkTime(today.getMinutes()),
    });
    setZodiac(getZodiac(today.getMonth() + 1, today.getDate()));
  };

  useEffect(() => {
    startTime();
    setInterval(startTime(), 5000);
  }, []);


  return (
    <header className="hidden sm:flex flex-col text-white z-10 w-full p-4 bg-firmes-black">
      <nav>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-1/3 mr-36">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="max-w-xs" />
            </Link>
          </div>
          <div className="flex justify-between w-2/3 ">
            <div className="flex ">
              <div className="w-8 flex justify-center items-center">
                <img src={elipLeft} />
              </div>
              <div className="w-8 flex justify-center items-center">
                <img src={moon} />
              </div>
              <div className="w-8 flex justify-center items-center">
                <img src={elipRight} />
              </div>

              <h3 className="text-2xl mx-4 md:text-3xl "> {zodiac?.sign} </h3>
              <div className="w-8 flex justify-center items-center">
                <img src={zodiac?.img} />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl">
              {/* {coords?.latitud}/{coords?.longitud} */}
              N4°37'56.656''/W74°4'33.145''
            </h3>
            <div className="flex gap-4">
              <h2 className="text-2xl md:text-3xl">
                {" "}
                {date.day}/{date.month + 1}/{date.year}{" "}
              </h2>
              <h2 className="text-2xl md:text-3xl">
                {date.hour}:{date.minutes}
              </h2>

            </div>
          </div>
        </div>
        {/* <div className="flex">
          <h2 className="mx-2 text-2xl">
            {date.hour}:{date.minutes}
          </h2>
          <h2 className="text-2xl">
            {" "}
            {date.day}/{date.month + 1}/{date.year}{" "}
          </h2>
        </div> */}
      </nav>
    </header>
  );
};
