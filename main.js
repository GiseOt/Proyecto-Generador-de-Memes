// MODOS CLARO Y OSCURO
document.addEventListener('DOMContentLoaded', () => {
    const botonModoClaro = document.getElementById('modo-claro'); 
    const botonModoOscuro = document.getElementById('modo-oscuro');
    const modoBody = document.body;
    const header = document.querySelector('header');

    botonModoClaro.style.display = 'none';

    botonModoOscuro.addEventListener('click', () => { //cambio a oscuro
        modoBody.classList.add('modo--Oscuro');
        modoBody.classList.remove('modo--Claro');
        header.classList.remove('modo--claro__header');

        botonModoOscuro.style.display = 'none';
        botonModoClaro.style.display = 'inline-flex';
        botonModoClaro.style.alignItems = 'center'; 
        botonModoClaro.style.justifyContent = 'center'; 
    });

    botonModoClaro.addEventListener('click', () => { //cambio a claro
        modoBody.classList.add('modo--Claro');
        modoBody.classList.remove('modo--Oscuro');
        header.classList.add('modo--claro__header');

        botonModoOscuro.style.display = 'inline-flex';
        botonModoOscuro.style.alignItems = 'center';
        botonModoOscuro.style.justifyContent = 'center';
        botonModoClaro.style.display = 'none';
    });
});

 // CARGAR IMAGEN CON LIBRERIA Y DESCARGAR
document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("fileInput");
  const downloadBtn = document.getElementById("btn--descarga"); // boton descarga
  const inputColor = document.getElementById("inputColor"); //color
  const divImg = document.getElementById("imagen"); //mi imagen que esta en el div
  const imagenContainer = document.getElementById("imagen-container"); //div que contiene el div de la imagen

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        divImg.style.backgroundImage = `url("${e.target.result}")`;
      };
      reader.readAsDataURL(file);
    }
  });

  downloadBtn.addEventListener("click", () => { //boton para descargar
    domtoimage.toBlob(imagenContainer).then((blob) => {
      window.saveAs(blob, "meme.png");
    });
  });

  inputColor.addEventListener("input", () => {
    divImg.style.backgroundColor = inputColor.value;
  });
});

//CARGAR CON URL
const cargarImagen = document.getElementById('imagen');
const actualizarImagen = () => {
  const urlImagen = document.querySelector('.url__imagen').value;

  if (urlImagen.length !== 0) {
    cargarImagen.style.backgroundImage = `url("${urlImagen}")`;
  }
};

document.querySelector('.url__imagen').addEventListener('input', actualizarImagen);

//SCROLL CON WINDOWS

document.addEventListener('DOMContentLoaded', () => {
  const btnImagen = document.querySelector('.btn-modos .imagen');
  const btnTexto = document.querySelector('.btn-modos .texto');
  const imagenAside = document.querySelector('.imagen__aside');
  const textoAside = document.querySelector('.texto__aside');

  btnImagen.addEventListener('click', () =>scrollAseccion(imagenAside)); 

  btnTexto.addEventListener('click', () => scrollAseccion(textoAside));

  const scrollAseccion = (section) => {
      window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
      });
  };
});

