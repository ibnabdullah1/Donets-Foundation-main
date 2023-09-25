// Banner.js
import React, { useState } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = (e) => {
    handleSearch(inputValue);
  };

  return (
    <>
      <div
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          backgroundImage: `url('https://i.ibb.co/QrRb5KK/Rectangle-4281.png')`,
        }}
        className="text-center min-h-[80vh] md:mb-10"
      >
        <div className="overlay flex justify-center items-center">
          <div className="">
            <h2 className="text-4xl font-bold mb-6">
              I Grow By Helping People In Need
            </h2>
            <form onSubmit={handleSearchClick}>
              <div className="flex">
                <div className="relative w-[100%]">
                  <input
                    type="search"
                    value={inputValue}
                    onChange={handleChange}
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm pl-5 bg-gray-50 rounded-lg focus:border-none border-l-gray-300 border"
                    placeholder="Search here..."
                  />
                  <Link to="/">
                    <button
                      onClick={() => handleSearchClick()}
                      type="submit"
                      className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#FF444A] rounded-r-lg border"
                    >
                      Search
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
