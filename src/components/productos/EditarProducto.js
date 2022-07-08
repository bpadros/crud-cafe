import {React,useState,useEffect} from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// import { campoRequerido, rangoPrecio } from "../helpers/helpers";
const EditarProducto = () => {
const {id} = useParams()
console.log(id)
const [producto,setProducto] = useState({})
const URL = process.env.REACT_APP_API_URL+"/"+id

useEffect(async()=>{
// consultar 1 producto en particular,peticion GET
const respuesta = await fetch(URL)
console.log(respuesta)
},[])
 
 return (
    <Container>
    <h1 className="display-3 text-center my-4">Editar Producto</h1>
    <hr />
    <Form className="my-5">
      <Form.Group className="mb-3">
        <Form.Label>Nombre del producto*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: café"
         
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio*</Form.Label>
        <Form.Control
          type="number"
          placeholder="ej: 50"
          
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Categoria*</Form.Label>
        <Form.Select>
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