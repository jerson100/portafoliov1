import {
  MobileMenuContainerStyle,
  MobileMenuItemStyle,
} from "./mobileMenuList.style";
const MobileMenuList = () => {
  return (
    <nav>
      <MobileMenuContainerStyle>
        <MobileMenuItemStyle>About</MobileMenuItemStyle>
        <MobileMenuItemStyle>Experiencie</MobileMenuItemStyle>
        <MobileMenuItemStyle>Work</MobileMenuItemStyle>
        <MobileMenuItemStyle>Contact</MobileMenuItemStyle>
      </MobileMenuContainerStyle>
    </nav>
  );
};

export default MobileMenuList;
