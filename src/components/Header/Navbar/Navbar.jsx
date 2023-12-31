import React from "react";
import { Navbar, MobileNav, IconButton } from "@material-tailwind/react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 text-black mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-semibold underline"
              : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-semibold underline"
              : ""
          }
        >
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-semibold underline"
              : ""
          }
        >
          Statistics
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="">
      <Navbar className="sticky  top-0 rounded-none py-2 md:px-10 px-5 lg:px-8 lg:py-3">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Logo />
          <div className="flex  items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className=" h-6 w-6 text-red-500 flex justify-center items-center hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color="red"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  color="red"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        <MobileNav open={openNav}>
          <hr className="h-[2px] bg-gray-200 mt-4" />
          {navList}
        </MobileNav>
      </Navbar>
    </div>
  );
}
