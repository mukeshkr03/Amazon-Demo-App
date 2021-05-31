import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="111"
            title="Home Storage:How Constant Innovation Creates Radically Successful Businesses Kindle Edition"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="112"
            title="amazon basics home:How Constant Innovation Creates Radically Successful Businesses Kindle Edition"
            price={39.99}
            image="https://m.media-amazon.com/images/I/71X3M535pLL._AC_UL320_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="113"
            title="Apple iPhone charger:How Constant Innovation Creates Radically Successful Businesses Kindle Edition"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/A1JDzAOTARL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="114"
            title="amazon basics storage:How Constant Innovation Creates Radically Successful Businesses Kindle Edition"
            price={59.99}
            image="https://m.media-amazon.com/images/I/71OzyJYYRcL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="115"
            title="Humidifier, 4 L, Black:How Constant Innovation Creates Radically Successful Businesses Kindle Edition"
            price={69.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71n3DlokliL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="116"
            title="Home Storage:How Constant Innovation Creates Radically Successful Businesses Kindle Edition "
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
