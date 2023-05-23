# Proyecto de Administración de Colores con React

Este es un proyecto desarrollado en React que te permite administrar una lista de colores y guardarlos en el LocalStorage del navegador.

## Descripción

El objetivo de este proyecto es proporcionarte una interfaz sencilla para ingresar colores y guardarlos para su posterior visualización. El formulario consta de un campo de entrada donde puedes ingresar un color en formato hexadecimal (#RRGGBB) o en formato de nombre (por ejemplo, "red", "blue", etc.). Al hacer clic en el botón "Guardar", el color se agregará a la lista de colores disponibles.

Cada color ingresado se mostrará en un componente llamado "Background", que muestra el nombre del color y su visualización en un cuadro de fondo. Junto a cada color, se encuentra un botón "Borrar" que te permite eliminar el color de la lista.

Además, los colores se guardan en el LocalStorage del navegador, lo que significa que se conservarán incluso si cierras y vuelves a abrir la aplicación.

## Funcionalidades

- Ingresar colores en formato hexadecimal o en formato de nombre.
- Visualizar y administrar una lista de colores.
- Guardar los colores en el LocalStorage para conservarlos entre sesiones.

## Tecnologías utilizadas

- React
- CSS (con Bootstrap para estilos básicos)

## Instrucciones de instalación

1. Clona este repositorio.
2. Navega a la carpeta del proyecto: `cd nombre-proyecto`.
3. Instala las dependencias del proyecto: `npm install`.
4. Inicia la aplicación: `npm run dev`.
5. Abre tu navegador web y accede a la URL: `http://localhost:3000`.

Demo: https://paletacoloresreact.netlify.app/
