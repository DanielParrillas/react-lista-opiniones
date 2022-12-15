import "../styles/Opinion.scss"
import renderToMarkdown from "../utilities/renderToMarkdown"

function Opinion(props) {
  return (
    <div className="container-opinion">
      <img
        className="image-opinion"
        src={require(`../images/testimonio-${props.image}.png`)}
        alt={"Foto de emma"}
      />
      <div className="container-text-opinion">
        <p className="name-opinion">
          <strong>{props.name}</strong> en {props.country}
        </p>
        <p className="position-opinion">
          {props.position} en <strong>{props.company}</strong>
        </p>
        <p className="text-opinion">
          <i>{renderToMarkdown(props.opinion)}</i>
        </p>
      </div>
    </div>
  );
};

export default Opinion;