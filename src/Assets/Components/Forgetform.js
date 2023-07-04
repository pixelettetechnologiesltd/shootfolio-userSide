import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../Css/Loginform.css";
import { useForgotPasswordMutation } from "../../slices/userApiSlice";
import { toast } from "react-toastify";
const Signupform = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [forgotPassword]=useForgotPasswordMutation();
  const submitHandler = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const email = formData.email;
       const res=await forgotPassword({email}).unwrap();
       toast.success(res?.status);
    }
  };
  return (
    <div>
      <Form
        className="mt-5"
        noValidate
        validated={validated}
        onSubmit={submitHandler}
      >
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Control
            className="makefieldgightmore"
            placeholder="Enter your email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide A Email.
          </Form.Control.Feedback>
        </Form.Group>
        <div className="makesignupbtncenter">
          <button className="formsubmitbutton" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Signupform;
