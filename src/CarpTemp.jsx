import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.nombre === producto.nombre);
      if (existe) {
        return prev.map((p) =>
          p.nombre === producto.nombre
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarProducto = (nombre) => {
    setCarrito((prev) => prev.filter((p) => p.nombre !== nombre));
  };

  const cambiarCantidad = (nombre, cantidad) => {
    if (cantidad === 0) {
      eliminarProducto(nombre);
      return;
    }
    setCarrito((prev) =>
      prev.map((p) =>
        p.nombre === nombre ? { ...p, cantidad } : p
      )
    );
  };

  const totalProductos = carrito.reduce((acc, p) => acc + p.cantidad, 0);

  const totalPrecio = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <CartContext.Provider value={{
      carrito,
      agregarProducto,
      eliminarProducto,
      cambiarCantidad,
      totalProductos,
      totalPrecio
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}