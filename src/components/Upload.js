import React, { useState } from "react";

export default function FileUploadPage() {
  //   const [selectedFile, setSelectedFile] = useState();

  //   const changeHandler = (event) => {
  //     setSelectedFile(event.target.files[0]);
  //   };

  //   const handleSubmission = () => {
  //     const formData = new FormData();

  //     formData.append('File', selectedFile)

  //     client.post('/upload').then(() => {
  //         alert('Arquivo enviado')
  //     }).catch((err) => {
  //         alert(err)
  //     })
  //   };

  return (
    <div>
      <h3>Adicionar localidades</h3>
      <form
        method="post"
        encType="multipart/form-data"
        action="http://localhost:8080/upload"
        target="_blank"
      >
        <input type="file" name="file" />
        <input type="submit" value="upload" />
      </form>
      {/* <input type="file" name="file" onChange={changeHandler} />
      <div>
        <button onClick={handleSubmission}>Enviar</button>
      </div> */}
    </div>
  );
}
