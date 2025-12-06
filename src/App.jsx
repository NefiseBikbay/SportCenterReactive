//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import "./css/main.css";
import "./css/common.css";
import "./css/section/class.css";
import "./css/section/contact.css";
import "./css/section/home.css";
import "./css/section/purcase.css";
import "./css/section/review.css";
import "./css/section/trainers.css";
import "./css/layouts/footer.css";
import "./css/layouts/header.css";

/* Yeni */
import Header from "./components/Header";
import Home from "./components/Home";
import Classes from "./components/Classes";
import Bmi from "./components/Bmi";
import Trainers from "./components/Trainers";
import Purchase from "./components/Purchase";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <Classes />
        <Bmi />
        <Trainers />
        <Purchase />
        <Review />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
