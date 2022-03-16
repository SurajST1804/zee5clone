import React, { useState } from "react";

const Shashi = () => {
  let [file, setFile] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    console.log(...formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button>upload</button>
      </form>
    </div>
  );
};

export default Shashi;
