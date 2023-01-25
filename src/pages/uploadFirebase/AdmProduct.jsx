import React from "react";

import "./AdmProduct.sass";
import { useState } from "react";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase";

const AdmProduct = () => {
  const [imageURL, setImageURL] = useState("");
  const [progress, setProgress] = useState(0);

  const handleUpload = (event) => {
    event.preventDefault();

    const file = event.target[0]?.files[0];
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageURL(url);
        });
      }
    );
  };

  return (
    <main id="adm">
      <header >
        <h2>Adicionar Produto</h2>
        <form onSubmit={handleUpload} className="formGroup">
          <div className="content">
            <label htmlFor="productTitle">Marca do Produto</label>
            <input type="text" className="formControl" required />
          </div>
          <div className="content">
            <label htmlFor="productDescription">Descrição do Produto</label>
            <input type="text" className="formControl" required />
          </div>
          <div className="content">
            <label htmlFor="productWeightUnt">Peso Unitário/Qtd</label>
            <input type="text" className="formControl" required />
          </div>
          <div className="content">
            <label htmlFor="productWeightBox">Peso Caixa/Qtd</label>
            <input type="text" className="formControl" required />
          </div>
          <div className="content">
            <label htmlFor="productImg">Imagem do produto</label>
            <input type="file" className="formControl" required />
          </div>
          <button className="btn btnSucess">Adicionar</button>
        </form>

        <br />
        {!imageURL && <progress value={progress} max="100" />}
        {imageURL && <img src={imageURL} className="image" alt="Imagem" />}
      </header>
    </main>
  );
};

export default AdmProduct;
