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

//BLEND MODE / CAMBIA FONDO

const inputColor = document.getElementById("inputColor");
const divImg = document.getElementById("imagen");

inputColor.addEventListener("input", (e) => {
  divImg.style.backgroundColor = e.target.value;
});

const filtrosLabels = document.querySelectorAll('.filtros__label');
const brillo = document.getElementById('brillo');
const opacidad = document.getElementById('opacidad');
const contraste = document.getElementById('contraste');
const desenfoque = document.getElementById('rango');
const grises = document.getElementById('grises');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue');
const saturacion = document.getElementById('saturacion');
const negativo = document.getElementById('negativo');

const aplicarFiltros = () => {
  const brilloValor = brillo.value;
  const opacidadValor = opacidad.value;
  const contrasteValor = contraste.value;
  const desenfoqueValor = desenfoque.value;
  const grisesValor = grises.value;
  const sepiaValor = sepia.value;
  const hueValor = hue.value;
  const saturacionValor = saturacion.value;
  const negativoValor = negativo.value;

  // Aplicar filtros a la imagen
  divImg.style.filter = `brightness(${brilloValor}) opacity(${opacidadValor}) blur(${desenfoqueValor}px) contrast(${contrasteValor}%) grayscale(${grisesValor}%) hue-rotate(${hueValor}deg) sepia(${sepiaValor}%) saturate(${saturacionValor}%) invert(${negativoValor})`;
};

const resetFiltros = () => {
  // Restablecer los valores de los controles de filtros
  document.getElementById("brillo").value = 1;
  document.getElementById("opacidad").value = 1;
  document.getElementById("rango").value = 0;
  document.getElementById("contraste").value = 100;
  document.getElementById("grises").value = 0;
  document.getElementById("hue").value = 0;
  document.getElementById("sepia").value = 0;
  document.getElementById("saturacion").value = 100;
  document.getElementById("negativo").value = 0;

  //Aplicar filtros
  aplicarFiltros();
};

document.getElementById("restablecer__filtros").addEventListener("click", resetFiltros);

// Agregar eventos a los input de filtros label
filtrosLabels.forEach(filtroLabel => {
  filtroLabel.addEventListener("input", aplicarFiltros);
});


//Mezcla

const inputBlendMode = document.getElementById('fondo__img');

inputBlendMode.addEventListener("input", (e) => {
  divImg.style.backgroundBlendMode = e.target.value;
});

const normal = document.getElementById('normal');
const aclarar = document.getElementById('lighten');
const oscurecer = document.getElementById('darken');
const diferencia = document.getElementById('difference');
const luminosidad = document.getElementById('luminosity');
const multiply = document.getElementById('multiply');

const aplicarMezcla = () => {  //PREGUNTAR EN CLASE
    const normalValor = normal.value;
    const aclararValor = aclarar.value;
    const oscurecerValor = oscurecer.value;
    const diferenciaValor = diferencia.value;
    const luminosidadValor = luminosidad.value;
    const multiplyValor = multiply.value;

    // Aplicar mezcla al elemento de la imagen
    divImg.style.filter = `brightness(${normalValor}%) lighten(${aclararValor}%) darken(${oscurecerValor}%) 
        contrast(${diferenciaValor}%) luminosity(${luminosidadValor}%) multiply(${multiplyValor}%)`;
};

// Eventos: Mezcla
normal.addEventListener('change', aplicarMezcla); //change o input??
aclarar.addEventListener('change', aplicarMezcla);
oscurecer.addEventListener('change', aplicarMezcla);
diferencia.addEventListener('change', aplicarMezcla);
luminosidad.addEventListener('change', aplicarMezcla);
multiply.addEventListener('change', aplicarMezcla);

// Evento : Blend Mode
inputBlendMode.addEventListener('input', (e) => {
    divImg.style.backgroundBlendMode = e.target.value;
});

// restablezco valor con boton
document.getElementById('restablecer__filtros').addEventListener('click', resetMezcla);

// Restablecer los valores
function resetMezcla() {
    normal.value = normal; // preguntar profe valores correctos
    aclarar.value = lighten;
    oscurecer.value = darken;
    diferencia.value = difference;
    luminosidad.value = luminosity;
    multiply.value = multiply;

    // Restablecer el valor del blend mode
    inputBlendMode.value = 'normal';

    // aplico la mezcla despues de restablecer valores
    aplicarMezcla();
}
