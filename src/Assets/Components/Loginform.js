import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../../Assets/Css/Loginform.css";
import { useLoginMutation } from "../../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Container, Row, Col,Button, Image } from "react-bootstrap";
import "../../Assets/Css/Login.css";
import { useNavigate } from "react-router-dom";
import {images} from "../../Images"
import Header from "./../Components/Header"
import Footer from "./../Components/Footer"
import { setCredentails } from "../../slices/authSlice";
const Loginform = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const submitHandler = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      const email = formData.email;
      const password = formData.password;
      try {
        const res = await login({ email, password }).unwrap();
        dispatch(setCredentails({ ...res }));
        //toast.success(res?.status);
        navigate("/gamehome");
      
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <div>
         <Header/>
    <div className="loginpagebg">
      <Container>
        <Row>
          <Col md={12}>
            <p className="loginheadcenter">Sign in</p>
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
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide A Email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  className="makefieldgightmore"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide A Password.
                </Form.Control.Feedback>
              </Form.Group>
              <div className="makebtnsinrow">
                <div className="submitbtn">
                  <button className="formsubmitbutton" type="submit">
                    Submit
                  </button>
                </div>
                <div className='forgetbtn'>
                        <a className='forgetbtnloginform' href='/forget'>Forgot Password?</a>
                        {/* <button className='forgetbtnloginform'  href="/forget">Forgot Password?</button> */}
                    </div>
              </div>
              
            </Form>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="paddingformregistration">
            <div className="makehrandorinrow mt-5 mb-5">
              <hr className="registrationpagehr"></hr>
              <p className="registrationor">Or</p>
              <hr className="registrationpagehr"></hr>
            </div>
            <div className="makebuttonsincenterregistersociallogin">
              <Button className="registrationthroughgoogleaddmorepadding">
                <Image
                  className="setregistersocial"
                  src={images.registergoogle}
                />
                Continue with google
              </Button>
              <Button className="registrationthroughgoogle mt-4">
                <Image
                  className="setregistersocial"
                  src={images.registerfacebook}
                />
                Continue with facebook
              </Button>
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
    <Footer/>
    </div>
  );
};

export default Loginform;
