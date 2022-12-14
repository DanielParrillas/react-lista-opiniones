import React from "react";

function Opinion() {
  return (
    <div className="container-opinion">
      <img
        className="image-opinion"
        src={require("../images/testimonio-emma.png")}
        alt={"Foto de emma"}
      />
      <div className="contenedor-texto-opinion">
        <p className="nombre-opinion">{"Emma Bostian"}</p>
        <p className="cargo-opinion">{"Ingeniera de Software en Spotify"}</p>
        <p className="texto-opinion">{""}</p>
      </div>
    </div>
  );
}