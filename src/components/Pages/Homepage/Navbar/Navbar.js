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

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2 lg:justify-center">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/noc"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          NOC
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact Us
        </Link>
      </Typography>
      <DeptDrop />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Investigations Price
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Webmail
        </Link>
      </Typography>

      <ICTDrop />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="https://nilmrc-patient.netlify.app/"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Patients Portal
        </a>
      </Typography>
      <GalleryDrop />
      <ResearchDrop />
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Journal
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Notice
        </Link>
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
