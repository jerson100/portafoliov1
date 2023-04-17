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
          <MobileMenuItemlinkStyle
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Inicio
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/about">
            Acerca de
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/experience">
            Experiencia
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/projects">
            Proyectos
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/contact">
            Contacto
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
      </MobileMenuContainerStyle>
    </MobileNavigationStyle>
  );
};

export default MobileMenuList;
