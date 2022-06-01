import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./warehouse.scss";

function Warehouse() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/category");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="Warehouse">
      <h1 className="titleProcess">Warehouse Management</h1>
      <div className="table_category">
        <div className="header">
          <div className="header__title" style={{ width: "20%" }}>
            ID Product
          </div>
          <div className="header__title" style={{ width: "27%" }}>
            Product Name
          </div>
          <div className="header__title" style={{ width: "20%" }}>
            Product Price
          </div>
          <div className="header__title" style={{ width: "23%" }}>
            Remaining Goods
          </div>
          <div
            className="header__title"
            style={{ width: "5%", opacity: "0", visibility: "hidden" }}
          ></div>
          <div
            className="header__title"
            style={{ width: "5%", opacity: "0", visibility: "hidden" }}
          ></div>
        </div>
        {cats.map((cat) => {
          return (
            <div className="content">
              <div className="content__item isSP" style={{ width: "20%" }}>
                {cat.idSP}{" "}
              </div>
              <div className="content__item nameSP" style={{ width: "27%" }}>
                {cat.nameSP}
              </div>
              <div className="content__item valueSP" style={{ width: "20%" }}>
                {cat.valueSP.toLocaleString()}
              </div>
              <div className="content__item reAmount" style={{ width: "23%" }}>
                {cat.reAmount}
              </div>
              <i
                class="fa-solid fa-pen-to-square content__item -icon edit"
                style={{ width: "5%", padding: "15px 25px" }}
              ></i>
              <i
                class="fa-solid fa-trash content__item -icon delete"
                style={{ width: "5%", padding: "15px 25px" }}
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Warehouse;
