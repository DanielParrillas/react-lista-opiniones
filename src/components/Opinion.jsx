import React from "react";
import "../styles/Opinion.scss"

function Opinion() {
  return (
    <div className="container-opinion">
      <img
        className="image-opinion"
        src={require("../images/testimonio-emma.png")}
        alt={"Foto de emma"}
      />
      <div className="container-text-opinion">
        <p className="name-opinion">{"Emma Bostian"}</p>
        <p className="position-opinion">{"Ingeniera de Software en Spotify"}</p>
        <p className="text-opinion">{"Yo queria que ganara Marruecos😔 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</p>
      </div>
    </div>
  );
};

export default Opinion;