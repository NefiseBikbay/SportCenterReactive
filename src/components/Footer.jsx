import logo from "../assets/img/logo.png";
function Footer() {
  return (
    <div className="container footer" id="footer">
      <img src={logo} alt="logo" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quod, quae, voluptate, voluptas quia quibusdam voluptatibus
        quos doloribus quidem fugiat. Quisquam voluptatum, quod, quae,
        voluptate, voluptas quia quibusdam voluptatibus quos doloribus quidem
        fugiat.
      </p>
      <div className="footer-nav">
        <ul>
          <h5>Information</h5>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Classes</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul>
          <h5>Helpful Links</h5>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Supports</a>
          </li>
          <li>
            <a href="#">Terms & Condition</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
