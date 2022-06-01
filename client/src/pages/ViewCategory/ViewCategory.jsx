import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./viewCategory.scss";

import axios from "axios";

function ViewCategory() {
  const [pros, setPros] = useState([]);
  useEffect(() => {
    const getPros = async () => {
      const res = await axios.get("/category");
      setPros(res.data);
    };
    getPros();
  }, []);
  return (
    <div className="ViewCategory">
      {/* <section class="destination">
        <p class="subtitle">Top Selling</p>
        <div class="cards">
          {pros.map((pro) => {
            return (
              <div class="card">
                <div class="image">
                  <img src={pro.img} alt="img" />
                </div>
                <div class="content">
                  <h3>{pro.nameSP}</h3>
                  <div class="time">
                    <i class="fas fa-location-arrow icon"></i>
                    <h4>TP.Hồ Chí Minh</h4>
                  </div>
                </div>
                <p class="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Optio ex fugiat eveniet qui, reprehenderit.
                </p>
                <div class="more">
                  <h3 class="Price">{pro.valueSP.toLocaleString()} VND</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section> */}
      <h3 className="title">Top Selling</h3>
      <div className="products">
        {pros.map((pro) => {
          return (
            <div className="product">
              <div className="product-image">
                <img src={pro.img} alt="" />
              </div>
              <div className="product-content">
                <div className="product-content__header">
                  <h3>{pro.nameSP}</h3>
                  <h4>
                    <i class="fas fa-location-arrow icon"></i>TP.Hồ Chí Minh
                  </h4>
                </div>
                <div className="product-content__body">
                  <span className="product-content__desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ducimus, aliquam hic, distinctio ipsa ex aspernatur totam
                  </span>
                </div>
                <div className="product-content__footer">
                  <h3 class="product-content__footer price">
                    {pro.valueSP.toLocaleString()} VND
                  </h3>
                  <Link to="/">
                    <div className="product-content__footer buy">Mua ngay</div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewCategory;
