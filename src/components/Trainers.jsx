import trainer1 from "../assets/img/trainer1.jpg";
import trainer2 from "../assets/img/trainer2.jpg";
import trainer3 from "../assets/img/trainer3.jpg";

function Trainers() {
  return (
    <section id="trainers" className="sec-css">
      <h3 className="h3-bg">OUR BEST TRAINERS</h3>
      <hr className="hr-orange"></hr>
      <p className="p-css">
        Lorem ipsum is not simply random text. It has roots in a piece or
        classical at hampaen-syaney corege.
      </p>

      <div class="container trainers">
        <div class="img-container">
          <img src={trainer1} alt="Emily Miller" className="img-fluid"></img>
          <span className="layer"></span>
          <div className="overlay">
            <p>Emily Miller</p>
            <p>Strength Trainer</p>
          </div>
        </div>

        <div className="img-container">
          <img src={trainer2} alt="Jack Wilson" className="img-fluid"></img>
          <span className="layer"></span>
          <div className="overlay">
            <p>Jack Wilson</p>
            <p>Personal Trainer</p>
          </div>
        </div>

        <div className="img-container">
          <img src={trainer3} alt="Jane Doe" className="img-fluid"></img>
          <span className="layer"></span>
          <div className="overlay">
            <p>Jane Doe</p>
            <p>Cardio Trainer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Trainers;
