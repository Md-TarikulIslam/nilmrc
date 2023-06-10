import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import DeptDrop from "./DeptDrop";
import ICTDrop from "./ICTDrop";
import GalleryDrop from "./GalleryDrop";
import ResearchDrop from "./ResearchDrop";
import NoticeDrop from "./NoticeDrop";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-0 lg:justify-center">
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/"
          className="flex items-center hover:text-blue-500 transition-colors  text-black"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/noc"
          className="flex items-center hover:text-blue-500 transition-colors text-black"
        >
          NOC
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/contact-us"
          className="flex items-center hover:text-blue-500 transition-colors text-black"
        >
          Contact Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <DeptDrop />
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/investigations-price"
          className="flex items-center hover:text-blue-500 transition-colors text-black"
        >
          Investigations Price
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="#"
          className="flex items-center hover:text-blue-500 transition-colors text-black"
        >
          Webmail
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <ICTDrop />
      </Typography>

      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="https://nilmrc-patient.netlify.app/"
          className="flex items-center hover:text-blue-500 transition-colors text-black"
        >
          Patients Portal
        </a>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <GalleryDrop />
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <ResearchDrop />
      </Typography>

      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/journal"
          className="flex items-center hover:text-blue-500 transition-colors text-black"
        >
          Journal
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NoticeDrop />
      </Typography>
    </ul>
  );
}

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 ">
      <div className=" text-blue-gray-900">
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
