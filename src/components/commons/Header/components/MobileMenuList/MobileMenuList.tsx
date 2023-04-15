import {
  MobileMenuContainerStyle,
  MobileMenuItemStyle,
  MobileMenuItemlinkStyle,
} from "./mobileMenuList.style";
const MobileMenuList = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default MobileMenuList;
