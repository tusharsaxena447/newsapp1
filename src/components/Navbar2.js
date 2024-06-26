import React from "react";
import { Link, Outlet } from "react-router-dom";
import image from './image.png';
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
 
export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex  flex-col gap-2 lg:mb-0  lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/general" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
          General
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/business" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
          Business
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/entertainment" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
          Entertainment
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/health" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
          Health
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/science" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
          Science
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/sports" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
          Sports
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/technology" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
         Technology
        </Link>
      </Typography>
      
    </ul>
  );
 
  return (
    <>
      <Navbar className="sticky bg-gray-900 border-0 inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
        <a href="/general" className="flex hover:text-purple-900 text-lg focus:text-purple-900 items-center">
                        <img src={image} className="h-10 mr-3" alt="Top-30 Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Top-30</span>
                    </a>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className=" h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                  className=" h-6 w-6"
                  fill="none"
                  stroke="currentColor"
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
          {navList}
          
        </MobileNav>
      </Navbar>
      <Outlet/>
    </>
  );
}