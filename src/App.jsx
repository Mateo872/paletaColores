import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Background from "./components/Background";

function App() {
  const [color, setColor] = useState("");
  const [backgrounds, setBackgrounds] = useState([]);

  useEffect(() => {
    const savedColors = localStorage.getItem("colors");
    if (savedColors) {
      setBackgrounds(JSON.parse(savedColors));
    }
  }, []);

  function saveLS(colors) {
    localStorage.setItem("colors", JSON.stringify(colors));
  }

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  function handleSaveColor() {
    if (color) {
      const newBackground = { color, name: color };
      const newBackgrounds = [...backgrounds, newBackground];
      setBackgrounds(newBackgrounds);
      saveLS(newBackgrounds);
      setColor("");
    }
  }

  function handleDeleteColor(index) {
    const newBackgrounds = [...backgrounds];
    newBackgrounds.splice(index, 1);
    setBackgrounds(newBackgrounds);
    saveLS(newBackgrounds);
  }

  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center mt-3 h-100">
        <div className="border p-3 d-flex flex-column">
          <h4 className="mb-0">Administrar colores</h4>
          <div className="container_color d-flex align-items-center gap-4">
            <div
              className="background"
              style={{ backgroundColor: color }}
            ></div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Ingrese un color. Ej: Blue"
              value={color}
              onChange={handleColorChange}
            />
          </div>
          <Button variant="primary" onClick={handleSaveColor}>
            Guardar
          </Button>
        </div>
        <div className="container_colors">
          {backgrounds.map((background, index) => (
            <Background
              key={index}
              color={background.color}
              name={background.name}
              onDelete={() => handleDeleteColor(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
