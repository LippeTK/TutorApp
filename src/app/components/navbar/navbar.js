import styles from "./navbar.css";
import Image from 'next/image'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <div>
          <a href="index.html" className="navbar-brand pe-0 me-0">
            <Image
              src="/img/logo.png"
              className={styles.logo}
              width="200"
              height="80"
            />
          </a>
        </div>
        {/* botao collapse */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* itens da navbar */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link ms-0 ps-0" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="meusCursos.html">
                Meus cursos
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="perfil.html">
                Perfil
              </a>
            </li>
          </ul>
          <div className="d-flex ms-auto ps-5">
            <button
              className="btn botao btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
