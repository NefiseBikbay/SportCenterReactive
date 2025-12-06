import rev1 from "../assets/img/client1.jpg";
import rev2 from "../assets/img/client2.jpg";
function Review() {
  return (
    <section id="review" className="sec-css">
      <div className="container">
        <h3 className="h3-bg">REVIEW CLIENT</h3>
        <hr className="hr-orange"></hr>
        <p className="p-css">
          Lorem ipsum is not simply random text. It has roots in a piece or
          classical at hampaen-syaney corege.
        </p>
        <div className="review-container">
          <div className="review rev1">
            <span className="rev-profile">
              <img src={rev1} alt="Client" className="img-fluid" />
              <p>
                Diet Expert
                <br /> <span className="fw">CFO</span>{" "}
              </p>
            </span>
            <p className="rev-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              sequi quia, libero voluptatibus ducimus earum quidem minus
              eveniet, ex esse rem sed numquam. Error magnam in vero molestiae
              tempora nostrum.
            </p>
          </div>
          <div className="review rev2">
            <span className="rev-profile">
              <img src={rev2} alt="Client" className="img-fluid" />
              <p>
                Cardio Trainer
                <br />
                <span className="fw">CEO</span>
              </p>
            </span>
            <p className="rev-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              sequi quia, libero voluptatibus ducimus earum quidem minus
              eveniet, ex esse rem sed numquam. Error magnam in vero molestiae
              tempora nostrum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Review;
