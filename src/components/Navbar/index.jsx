import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary justify-content-center">
      <div className="row container-fluid">
        <div className="col-4 d-flex justify-content-start">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
        <div className="col-4">
          <a className="navbar-brand d-flex justify-content-center" href="./index.html">
            <img src="./logo.png" alt="Logo de Up Shop" width="250px" />
          </a>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-end align-items-center" href="#">
            <div className={styles.navCarrito} data-bs-toggle="modal" data-bs-target="#modalCarrito">
              <i className={`bi bi-cart2 ${styles.carritoIcono}`}></i>
              <span className={styles.carritoCantidad}>0</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <ul className={`col-12 d-flex ${styles.navUl}`}>
          <li className={styles.categoriaProducto}>Remeras</li>
          <li className={styles.categoriaProducto}>Pantalones</li>
          <li className={styles.categoriaProducto}>Musculosas</li>
          <li className={styles.categoriaProducto}>Abrigos</li>
        </ul>
      </div>
    </nav>
  );
}
