import { useState, useRef, useEffect } from "react";
import bmi from "../assets/img/bmi-index.jpg";
function Bmi() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const imgRef = useRef(null);

  function calculateBMI() {
    const img = imgRef.current;
    if (!img) return;

    const h = Number(height) / 100;
    const w = Number(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      img.style.setProperty("--x", "0%");
      return;
    }

    const bmi = w / h ** 2;
    const bmiRounded = Number(bmi.toFixed(2));
    const imgWidth = img.offsetWidth;

    let xPos;

    if (bmiRounded < 18.5) {
      xPos = imgWidth * 0.21;
    } else if (bmiRounded <= 24.9) {
      xPos = imgWidth * 0.38;
    } else if (bmiRounded <= 29.9) {
      xPos = imgWidth * 0.54;
    } else if (bmiRounded <= 34.9) {
      xPos = imgWidth * 0.71;
    } else {
      xPos = imgWidth * 0.87;
    }

    img.style.setProperty("--x", xPos + "px");
  }
  useEffect(() => {
    calculateBMI();
  }, [height, weight]);

  return (
    <section>
      <div className="container bmi">
        <div className="bmi-info">
          <h3 className="h3-bg">BMI Calculator</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <label htmlFor="height">
            <input
              id="height"
              type="number"
              placeholder="Your Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            cm
          </label>
          <label htmlFor="weight">
            <input
              id="weight"
              type="number"
              placeholder="Your Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            kg
          </label>
        </div>

        <div className="img-wrap" ref={imgRef}>
          <h4>Your BMI</h4>
          <img src={bmi} alt="bmi calculator" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}
export default Bmi;
