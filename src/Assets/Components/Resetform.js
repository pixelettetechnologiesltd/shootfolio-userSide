import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../../Assets/Css/Loginform.css";
import { useResetPasswordMutation } from "../../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "../../Assets/Css/Login.css";
import { useNavigate } from "react-router-dom";
import { images } from "../../Images";
import Header from "./../Components/Header";
import Footer from "./../Components/Footer";
import { useParams } from "react-router-dom";

const Resetform = () => {
  const [validated, setValidated] = useState(false);
  const { token } = useParams();
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      if (formData.newPassword !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      try {
        const data = {
          token,
          newPassword: formData.newPassword,
          confirmPassword: formData.confirmPassword,
        };

        const res = await resetPassword(data).unwrap();
        if (res?.status === "Success") {
          navigate("/login");
        } else {
          toast.success(res?.status);
        }
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="loginpagebg">
        <Container>
          <Row>
            <Col md={12}>
              <p className="loginheadcenter">Reset Your Password</p>
            </Col>
          </Row>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <Form
                noValidate
                validated={validated}
                className="mt-5"
                onSubmit={submitHandler}
              >
                <Form.Group className="mb-3" controlId="validationCustom01">
                  <Form.Control
                    style={{ padding: "0.6rem 0.6rem" }}
                    className="makefieldgightmore"
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a new password.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationCustom02">
                  <Form.Control
                    className="makefieldgightmore"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please confirm your password.
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="makebtnsinrow">
                  <div className="submitbtn">
                    <button className="formsubmitbutton" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Resetform;
