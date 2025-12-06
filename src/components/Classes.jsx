import { useState } from "react";
import yogaimg from "../assets/img/yoga.jpg";
import groupimg from "../assets/img/group.webp";
import stretimg from "../assets/img/stret.webp";
import soloimg from "../assets/img/solo.jpg";
function Classes() {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <section id="classes" className="sec-css">
      <h3 className="h3-bg">OUR CLASSES</h3>
      <hr className="hr-orange" />
      <p className="p-css">
        Lorem ipsum is not simply random text. It has roots in a piece or
        classical at hampaen-syaney corege.
      </p>
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "1" ? "active" : ""}`}
          data-tab="1"
          onClick={() => setActiveTab("1")}
        >
          Yoga
        </button>
        <button
          className={`tab-btn ${activeTab === "2" ? "active" : ""}`}
          data-tab="2"
          onClick={() => setActiveTab("2")}
        >
          Group
        </button>
        <button
          className={`tab-btn ${activeTab === "3" ? "active" : ""}`}
          data-tab="3"
          onClick={() => setActiveTab("3")}
        >
          Solo
        </button>
        <button
          className={`tab-btn ${activeTab === "4" ? "active" : ""}`}
          data-tab="4"
          onClick={() => setActiveTab("4")}
        >
          Stretching
        </button>
      </div>
      <div className="container tab-content">
        <div className={`content ${activeTab === "1" ? "active" : ""}`}>
          <div className="content-container">
            <h4>Why are your yoga?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              possimus voluptatum impedit odit perferendis dolorum placeat,
              exercitationem in officia autem maiores ab nostrum laboriosam
              sapiente nulla totam neque eum veniam.
            </p>
            <h4>When comes yoga your time.</h4>
            <p>
              Saturday-Sunday: 8:00am - 10:00am <br />
              Monday-Tuesday: 10:00am - 12:00pm <br />
              Wednesday-Friday: 3:00m - 6:00m
            </p>
          </div>
          <img className="img-fluid" src={yogaimg} alt="yoga" />
        </div>
        <div className={`content ${activeTab === "2" ? "active" : ""}`}>
          <div className="content-container">
            <h4>Why are your yoga?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              possimus voluptatum impedit odit perferendis dolorum placeat,
              exercitationem in officia autem maiores ab nostrum laboriosam
              sapiente nulla totam neque eum veniam.
            </p>
            <h4>When comes group your time.</h4>
            <p>
              Saturday-Sunday: 8:00am - 10:00am <br />
              Monday-Tuesday: 10:00am - 12:00pm <br />
              Wednesday-Friday: 3:00m - 6:00m
            </p>
          </div>
          <img className="img-fluid" src={groupimg} alt="group" />
        </div>
        <div className={`content ${activeTab === "3" ? "active" : ""}`}>
          <div className="content-container">
            <h4>Why are your yoga?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              possimus voluptatum impedit odit perferendis dolorum placeat,
              exercitationem in officia autem maiores ab nostrum laboriosam
              sapiente nulla totam neque eum veniam.
            </p>
            <h4>When comes solo your time.</h4>
            <p>
              Saturday-Sunday: 8:00am - 10:00am <br />
              Monday-Tuesday: 10:00am - 12:00pm <br />
              Wednesday-Friday: 3:00m - 6:00m
            </p>
          </div>
          <img className="img-fluid" src={soloimg} alt="solo" />
        </div>
        <div className={`content ${activeTab === "4" ? "active" : ""}`}>
          <div className="content-container">
            <h4>Why are your yoga?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              possimus voluptatum impedit odit perferendis dolorum placeat,
              exercitationem in officia autem maiores ab nostrum laboriosam
              sapiente nulla totam neque eum veniam.
            </p>
            <h4>When comes stretching your time.</h4>
            <p>
              Saturday-Sunday: 8:00am - 10:00am <br />
              Monday-Tuesday: 10:00am - 12:00pm <br />
              Wednesday-Friday: 3:00m - 6:00m
            </p>
          </div>
          <img className="img-fluid" src={stretimg} alt="Stretching" />
        </div>
      </div>
    </section>
  );
}
export default Classes;
