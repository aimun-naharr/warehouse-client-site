import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Uploadproduct = () => {
    const handleUpload=(e)=>{
        e.preventDefault()
        const productName=e.target.product.value
        const quantity=e.target.quantity.value
        const price=e.target.price.value
        const description=e.target.description.value
        const supplierName=e.target.supplierName.value
        const image=e.target.image.value
        fetch('http://localhost:5000/uploadpd', {
  method: 'POST',
  body: JSON.stringify({
   productName, quantity, price, description, supplierName, image
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => {
     console.log(data.success)
     e.target.reset()
  });
        
    }
    return (
        <div className='w-50 mx-auto container'>
            <Form onSubmit={handleUpload}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Control type="text" name='product' placeholder="Product name" />
     </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Control type="number" name='quantity' placeholder="quantity" />
     </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Control type="number" name='price' placeholder="price" />
     </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Control type="text" name='description' placeholder="description" />
     </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Control type="text" name='supplierName' placeholder="Supplier name" />
     </Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control name='image' type="url" placeholder="image" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Upload
  </Button>
</Form>
        </div>
    );
};

export default Uploadproduct;