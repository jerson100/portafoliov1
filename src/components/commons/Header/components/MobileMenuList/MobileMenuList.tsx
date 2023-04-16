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
          <MobileMenuItemlinkStyle to="/about">About</MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/experience">
            Experiencie
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/works">Work</MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/contac">
            Contact
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
      </MobileMenuContainerStyle>
    </MobileNavigationStyle>
  );
};

export default MobileMenuList;
