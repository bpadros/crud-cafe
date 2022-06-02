import React from 'react';
import { Form, Button, Container } from "react-bootstrap";


const EditarProducto = () => {
    return (
        <Container>
      <h1 className="display-3 text-center my-4">Editar Producto</h1>
      <hr />
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: café"
            defaultValue={producto.nombreProducto}
            ref={nombreProductoRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="ej: 50"
            defaultValue={producto.precioProducto}
            ref={precioProductoRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select value={categoria} onChange={(e)=>setCategoria(e.target.value)}>
            <option value="">Seleccione una opcion</option>
            <option value="bebida-caliente">Bebida Caliente</option>
            <option value="bebida-fria">Bebida Fria</option>
            <option value="sandwich">Sandwich</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Guardar cambios
        </Button>
      </Form>
    </Container>
    );
};

export default EditarProducto;