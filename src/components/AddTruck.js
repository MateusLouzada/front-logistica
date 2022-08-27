import React, { useState } from "react";
import client from "../services/axios.config";

export default function AddTruck() {
  const [nickName, setNickName] = useState("");
  const [truckPlate, setTruckPlate] = useState("");
  const [truckColor, setTruckColor] = useState("");
  const [efficiency, setEfficiency] = useState(0.0);

  const setStateHandler = (event) => {
    const data = event.target.value;
    const etn = event.target.name;
    if (etn === "apelido") setNickName(data);
    if (etn === "placa") setTruckPlate(data);
    if (etn === "cor") setTruckColor(data);
    if (etn === "rendimento") setEfficiency(data);
  };

  const subTruckInfo = () => {
    client
      .post("/caminhoes", {
        apelido: nickName,
        placa: truckPlate,
        cor: truckColor,
        rendimento: efficiency,
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <h3>Adicionar um caminhão</h3>
      <label>
        Apelido
        <input type="text" name="apelido" onChange={setStateHandler} />
      </label>
      <label>
        Placa
        <input type="text" name="placa" onChange={setStateHandler} />
      </label>
      <label>
        Cor
        <input type="text" name="cor" onChange={setStateHandler} />
      </label>
      <label>
        Rendimento
        <input type="text" name="rendimento" onChange={setStateHandler} />
      </label>
      <button type="button" onClick={subTruckInfo}>
        Enviar
      </button>
    </div>
  );
}
