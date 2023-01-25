import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//import Firebase Firestore
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

//import components
import ButtonSmall from "../buttons/buttonSmall/ButtonSmall";

//import sass
import "./Card.sass";

import image from "../../assets/products/aves/Coxinhas_das_Asas_IQF_6kgs_Congeladas_Cancao_Alimentos 1.svg";

const Card = () => {
  const [files, setFiles] = useState([]);

  //ler em tempo real alterações no firebase
  useEffect(() => {
    const dbRef = query(collection(db, "produtos", "Aves", "peito"));
    onSnapshot(dbRef, (docsSnap) => {
      setFiles(
        docsSnap.docs.map((doc) => ({
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <div id="card">
        <h2>Produtos</h2>
        <div className="containerCard">
          {files.map((e, index) => {
            return (
              <div className="card" key={index}>
                <NavLink to="/produtos:id">
                  <div className="imageCard">
                    <img src={image} alt={e?.data?.description} />
                  </div>
                  <div className="textCard">
                    <p>{e?.data?.description}</p>
                    <h5>{e?.data?.title}</h5>
                  </div>
                  <ButtonSmall />
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
