import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <h1>Daniel R.</h1>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/sobremi">Sobre mí</Link></li>
      <li><Link to="/opinion">Opinión</Link></li>
      <li><Link to="/proyectos">Proyectos</Link></li>
    </ul>
  </nav>
);

export default Navbar;
