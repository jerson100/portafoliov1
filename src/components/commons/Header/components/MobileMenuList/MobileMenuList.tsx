import {
  MobileMenuContainerStyle,
  MobileMenuItemStyle,
  MobileMenuItemlinkStyle,
  MobileNavigationStyle,
} from "./mobileMenuList.style";
const MobileMenuList = () => {
  return (
    <MobileNavigationStyle>
      <MobileMenuContainerStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/">Home</MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/about">About</MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/experience">
            Experiencie
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/projects">
            Projects
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/contact">
            Contact
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
      </MobileMenuContainerStyle>
    </MobileNavigationStyle>
  );
};

export default MobileMenuList;
