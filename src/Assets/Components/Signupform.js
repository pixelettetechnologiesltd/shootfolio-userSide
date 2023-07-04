import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "../Css/Loginform.css";
import { useRegisterMutation} from "../../slices/userApiSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const Signupform = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [register]=useRegisterMutation();
  const navigate =useNavigate();
  const submitHandler = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const name = formData.name;
      const email = formData.email;
      const password = formData.password;
      try {
        const res = await register({name, email, password }).unwrap();
        console.log(res?.status);
        toast.success(res?.status);
       
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <div>
      <Form className="mt-5" noValidate validated={validated} onSubmit={submitHandler}>
        <Form.Group className="mb-3 " controlId="formBasicText">
          <Form.Control
            className="makefieldgightmore"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide A Name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicText">
          <Form.Control
            className="makefieldgightmore"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide A Email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="makefieldgightmore"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide A Password.
          </Form.Control.Feedback>
        </Form.Group>
       

        <div className="makesignupbtncenter">
          <Button className="formsubmitbutton" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Signupform;
