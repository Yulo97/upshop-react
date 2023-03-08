export function ModalCarrito() {
  return (
    <div
      className="modal fade"
      id="modalCarrito"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Carrito
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <ul className="listaModalCarrito"></ul>
          </div>
          <div className="modal-footer justify-content-between">
            <div>
              <span id="carritoTotal">Total: </span>
            </div>
            <button type="button" className="btn btnPrimario">
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
