import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header style={headerStyle}>
        <div style={logoStyle}>ABVA</div>
        <nav style={navStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <Link to="/" style={linkStyle}>Home</Link>
            </li>
            <li style={liStyle}>
              <Link to="/blogs" style={linkStyle}>Blogs</Link>
            </li>
            <li style={liStyle}>
              <Link to="/contact" style={linkStyle}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div style={contentStyle}>
        <Outlet />
      </div>
    </>
  );
};

// Estilos atualizados para incluir logo
const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '1em 0'
};

const logoStyle = {
  fontSize: '2.5em',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '0.5em',
  textTransform: 'uppercase', // Deixa a logo em letras maiúsculas
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '0.5em 0',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
  margin: 0
};

const liStyle = {
  margin: '0 1em'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '1.2em'
};

const contentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70vh',
  textAlign: 'center'
};

export default Layout;
