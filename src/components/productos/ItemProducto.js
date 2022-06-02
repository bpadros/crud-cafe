import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const ItemProducto = (props) => {

  const eliminarProducto = () =>{
    console.log(props.producto.id)
  }
    return (
        <ListGroup.Item className="d-flex justify-content-between">
        <p>
          {props.producto.nombreProducto}
          <span className='fw-bolder'>-Precio:$ {props.producto.precioProducto}</span>
        </p>
        <div>  
        <Button variant="warning">Editar</Button>
          <Button variant="danger" onClick={()=> eliminarProducto()}>Borrar</Button>
        </div>
      </ListGroup.Item>
    );
};

export default ItemProducto;