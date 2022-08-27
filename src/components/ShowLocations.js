import React, { useEffect, useState } from "react";
import client from "../services/axios.config";

export default function ShowLocations() {
  const [locations, setLocations] = useState();

  useEffect(() => {
    client
      .get("/localidades")
      .then((res) => {
        setLocations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {locations ? (
        <div>
          {Object.entries(locations).map(([key, value]) => (
            <tr key={key}>
              <td>{value.id}</td>
              <td>{value.nome}</td>
              <td>{value.distancia}</td>
            </tr>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
