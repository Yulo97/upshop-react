import styles from "./productCard.module.css";

export function ProductCard({ product }) {
  return (
    <li className={styles.cardProduct}>
      <div className="card">
        <img src={product.imagen} className="card-img-top imagen-del-producto" />
        <div className="card-body justify-content-center">
          <h5 className="card-title">{product.nombre}</h5>
          <p className="card-text">Categoria: {product.categoria}</p>
          <p className="card-text">
            Precio: <span>${product.precio}</span>
          </p>
          <div className="d-flex">
            <a className="btn btnSecundario me-2">Ver</a>
            <a className="btn btnPrimario">Agregar al Carrito</a>
          </div>
        </div>
      </div>
    </li>
  );
}
