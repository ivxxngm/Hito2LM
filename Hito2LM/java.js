// Carga los datos del archivo JSON
fetch('data/uwu.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No hay respuesta de la red');
    }
    return response.json();
  })
  .then(data => {
    // Genera la tabla de pedidos
    var tabla = document.getElementById('tablaPedidos');
    data.pedidos.forEach(pedido => {
      var fila = tabla.insertRow();
      fila.insertCell().innerText = pedido.nombre;
      fila.insertCell().innerText = pedido.apellidos;
      fila.insertCell().innerText = pedido.telefono;
      fila.insertCell().innerText = pedido.direccion.calle + ', ' + pedido.direccion.ciudad + ', ' + pedido.direccion.codigo_postal + ', ' + pedido.direccion.provincia;
      fila.insertCell().innerText = pedido.correo_electronico;
      fila.insertCell().innerText = pedido.fecha_inclusion;
      pedido.detalles_pedido.forEach(detalle => {
        fila.insertCell().innerText = detalle.numero_pedido;
        fila.insertCell().innerText = detalle.fecha_compra;
        fila.insertCell().innerText = detalle.fecha_entrega;
        fila.insertCell().innerText = detalle.total_factura;
        var productos = detalle.productos.map(producto => producto.nombre_producto + ' (' + producto.referencia + '): ' + producto.unidades + ' unidades a ' + producto.precio + '€').join(', ');
        fila.insertCell().innerText = productos;
      });
    });
  })
  .catch(error => {
    console.error('Hubo un problema con la petición Fetch:', error);
  });
