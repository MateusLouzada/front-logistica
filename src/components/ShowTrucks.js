import React, { useState, useEffect } from "react";
import client from "../services/axios.config";

export default function ShowTrucks() {
  const [trucks, setTrucks] = useState();

  useEffect(() => {
    client
      .get("/caminhoes")
      .then((res) => {
        setTrucks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {trucks ? (
        <div>
          {Object.entries(trucks).map(([key, value]) => (
            <tr key={key}>
              <td>{value.apelido}</td>
              <td>{value.placa}</td>
              <td>{value.cor}</td>
              <td>{value.rendimento}</td>
            </tr>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
