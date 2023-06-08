import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const menuItems = [
  {
    title: "Publication",
  },

];

export default function ResearchDrop() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <p
          {...triggers}
          variant="text"
          className="flex items-center gap-3 text-base text-black font-normal capitalize tracking-normal ml-1 lg:ml-0"
        >
        Research
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </p>
      </MenuHandler>
      <MenuList
        {...triggers}
        className="w-[4-rem] md:w-[8rem] overflow-visible"
      >
        <ul className="col-span-4 flex w-full flex-col">
          {menuItems.map(({ title }) => (
            <a href="#" key={title}>
              <MenuItem>
                <Typography variant="small" color="blue-gray" className="">
                  {title}
                </Typography>
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}
