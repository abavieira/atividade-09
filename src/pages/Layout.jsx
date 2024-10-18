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
      
      {/* Linha horizontal entre o cabeçalho e o conteúdo */}
      <hr style={hrStyle} />

      <div style={contentStyle}>
        <Outlet />
      </div>
    </>
  );
};

// Estilos atualizados para incluir logo no canto superior esquerdo e nav no direito
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between', // Alterado para space-between
  alignItems: 'center',
  padding: '1em 2em', // Ajuste o padding conforme necessário
};

const logoStyle = {
  fontSize: '2.5em',
  fontWeight: 'bold',
  color: '#333',
  textTransform: 'uppercase',
};

const navStyle = {
  display: 'flex',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
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

// Estilo para a linha horizontal
const hrStyle = {
  margin: '0', // Remover margens para alinhamento adequado
  border: 'none', // Remover borda padrão
  borderTop: '1px solid #ccc', // Estilo da linha
};

export default Layout;
