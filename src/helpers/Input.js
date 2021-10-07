//Helper component to improve readablility of forms

import { Form } from 'react-bootstrap';

function Input({ id, label, type, value, handleChange }) {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label className="fw-bold">{label}</Form.Label>
      <Form.Control type={type} name={id} value={value} onChange={handleChange}/>
    </Form.Group>
  )
}

export default Input;