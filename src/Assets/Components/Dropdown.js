import Dropdown from "react-bootstrap/Dropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/userApiSlice";
import { logout } from "../../slices/authSlice";
import "../Css/Dropdown.css";
function BasicExample() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <span className="sethamburg">
          <RxHamburgerMenu />
        </span>
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Home</Dropdown.Item>
        <Dropdown.Item href="/about">About Us</Dropdown.Item>
        <Dropdown.Item href="/contact">Contact</Dropdown.Item>
        <Dropdown.Item href="/portfolio">Portfolio</Dropdown.Item>
        <Dropdown.Item href="/performance">Performance</Dropdown.Item>
        {userInfo?.userInfo ? (
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        ) : (
          ""
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
