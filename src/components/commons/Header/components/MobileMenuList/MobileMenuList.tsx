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
            title="Inicio"
          >
            Inicio
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/about" title="About">
            Acerca de
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/experience" title="Experience">
            Experiencia
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/projects" title="Proyectos">
            Proyectos
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
        <MobileMenuItemStyle>
          <MobileMenuItemlinkStyle to="/contact" title="Contacto">
            Contacto
          </MobileMenuItemlinkStyle>
        </MobileMenuItemStyle>
      </MobileMenuContainerStyle>
    </MobileNavigationStyle>
  );
};

export default MobileMenuList;
