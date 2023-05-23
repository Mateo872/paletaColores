import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Background = ({ color, name, onDelete }) => {
  return (
    <div className="border color p-3 d-flex flex-column">
      <h4 className="mb-0">{name}</h4>
      <div className="container_color d-flex justify-content-center">
        <div className="background" style={{ backgroundColor: color }}></div>
      </div>
      <Button variant="danger" onClick={onDelete}>
        Borrar
      </Button>
    </div>
  );
};

export default Background;
