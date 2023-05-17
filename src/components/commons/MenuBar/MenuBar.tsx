import { useEffect, useState } from "react";
4;
import ReactDOM from "react-dom";
import { MenuToggle } from "../MenuToogle/MenuToogle";
import {
  MenuBarBgStyle,
  MenuBarContainerStyle,
  MenuBarListStyle,
  MenuItemStyle,
} from "./menuBar.style";
import {
  MenuBarContainerVariants,
  MenuItemVariants,
  MenuListVariants,
  SidebarVariants,
} from "./menuBar.variants";
import Link from "../Link/Link";

const items = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Projects",
    to: "/projects",
  },
  {
    title: "Contact",
    to: "/contact",
  },
];

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dimensionBody, setDimensionBody] = useState(0);
  useEffect(() => {
    setDimensionBody(document.documentElement.clientHeight);
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "visible";
  }, [isOpen]);
  const handleToogle = () => {
    setIsOpen((p) => !p);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <MenuBarContainerStyle
          animate={isOpen ? "open" : "closed"}
          initial="initial"
          variants={MenuBarContainerVariants}
          custom={dimensionBody}
        >
          <MenuBarBgStyle className="background" variants={SidebarVariants} />
          <MenuToggle toggle={handleToogle} />
          <MenuBarListStyle variants={MenuListVariants}>
            {items.map((item) => (
              <MenuItem
                toggle={handleToogle}
                key={item.title}
                title={item.title}
                to={item.to}
              />
            ))}
          </MenuBarListStyle>
        </MenuBarContainerStyle>,
        document.body
      )}
    </>
  );
};

const MenuItem = ({
  title,
  to,
  toggle,
}: {
  title: string;
  to: string;
  toggle: () => void;
}) => {
  return (
    <MenuItemStyle variants={MenuItemVariants}>
      <Link to={to} onClick={toggle}>
        {title}
      </Link>
    </MenuItemStyle>
  );
};

export default MenuBar;
