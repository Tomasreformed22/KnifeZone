function ItemDetail({ name, price, stock }) {
  return (
    <div className="item-detail">
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
      <p>Stock disponible: {stock}</p>
      <button className="btn">Agregar al Carrito</button>
    </div>
  );
}

export default ItemDetail;
