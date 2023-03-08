import productos from "../../productos.json";
import { ProductCard } from "../ProductCard";
import styles from "./contenedorProductos.module.css";

export function ContenedorProductos() {
  return (
    <>
      <h2>Productos</h2>
      <ul className={styles.catalogoProductos}>
        {productos.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </ul>
    </>
  );
}
