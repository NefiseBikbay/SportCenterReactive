import purchase1 from "../assets/img/purchase1.jpg";
import purchase2 from "../assets/img/purchase2.jpg";
import purchase3 from "../assets/img/purchase3.jpg";
import purchase4 from "../assets/img/purchase4.jpg";
import "../css/section/purcase.css";
function Purchase() {
  return (
    <section className="purcase sec-css">
      <h3 className="h3-bg">PURCHASE FROM US</h3>
      <hr className="hr-orange"></hr>
      <p className="p-css">
        Lorem ipsum is not simply random text. It has roots in a piece or
        classical at hampaen-syaney corege.
      </p>
      <div className="container cards">
        <div className="card card-1">
          <img src={purchase1} alt="kettlebell 5kg" className="img-fluid"></img>
          <div className="card-body">
            <h4>kettlebell / 5kg</h4>
            <p>
              {" "}
              <span class="text-decoration-line-through">89,99$</span> / 59,99$
            </p>
            <button>
              <i className="bi bi-cart-fill"></i>
              <span>Add To Cart</span>
            </button>
          </div>
        </div>

        <div className="card card-2">
          <img src={purchase2} alt="treadmill" className="img-fluid"></img>
          <div className="card-body">
            <h4>Treadmill</h4>
            <p>
              {" "}
              <span className="text-decoration-line-through">899,99$</span> /
              599,99$
            </p>
            <button>
              <i className="bi bi-cart-fill"></i>
              <span>Add To Cart</span>
            </button>
          </div>
        </div>

        <div className="card card-3">
          <img
            src={purchase3}
            alt="Adjustable Dumbbell"
            className="img-fluid"
          ></img>
          <div className="card-body">
            <h4>Adjustable Dumbbell</h4>
            <p>
              {" "}
              <span className="text-decoration-line-through">89,99$</span> /
              59,99$
            </p>
            <button>
              <i className="bi bi-cart-fill"></i>
              <span>Add To Cart</span>
            </button>
          </div>
        </div>

        <div className="card card-4">
          <img src={purchase4} alt="kettlebell 3kg" class="img-fluid"></img>
          <div className="card-body">
            <h4>kettlebell / 3kg</h4>
            <p>
              {" "}
              <span class="text-decoration-line-through">89,99$</span> / 59,99$
            </p>
            <button>
              <i className="bi bi-cart-fill"></i>
              <span>Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Purchase;
