import logo from './logo.svg';
import './App.css';
import './assets/css/root.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Crypto_info from './Components/Crypto_info';
import About from './Components/About';
import Content_sec from './Components/Content_sec';
import Currency_type from './Components/Currency_type';
import Rating_cards from './Components/Rating_cards';
import Subscription_sec from './Components/Subscription_sec';
import Sign_up from './Components/Sign_up';
import Footer from './Components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Pre_reloder from './Components/Pre_reloder';
import BackToTop from './Components/BackToTop';


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();


    const preloader = document.getElementById('preloader')
    setTimeout(() => {
      preloader.classList.add('d-none')
      preloader.classList.add('pointer-event-none')
      document.body.classList.remove('overflow-hidden')
    }, 3000)
    document.body.classList.add('overflow-hidden')

  }, []);

  return (
    <div>
      <Pre_reloder />
      <Header />
      <Crypto_info />
      <About />
      <Content_sec />
      <Currency_type />
      <Rating_cards />
      <Subscription_sec />
      <Sign_up />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
