// MODOS CLARO Y OSCURO
document.addEventListener('DOMContentLoaded', () => {
  const botonModoClaro = document.getElementById('modo-claro'); 
  const botonModoOscuro = document.getElementById('modo-oscuro');
  const modoBody = document.body;
  const header = document.querySelector('header');
  const aside = document.querySelector('aside');

  const activarModoClaro = () => {
    modoBody.classList.add('modo--Claro');
    modoBody.classList.remove('modo--Oscuro');
    header.classList.add('modo--claro__header');
    aside.classList.add('aside__claro');
    aside.classList.remove('aside__oscuro');

    botonModoOscuro.style.display = 'inline-flex';
    botonModoOscuro.style.alignItems = 'center';
    botonModoOscuro.style.justifyContent = 'center';
    botonModoClaro.style.display = 'none';
  };

  activarModoClaro(); //mi modo claro por defecto

  botonModoOscuro.addEventListener('click', () => { // Cambio a oscuro
      modoBody.classList.add('modo--Oscuro');
      modoBody.classList.remove('modo--Claro');
      header.classList.remove('modo--claro__header');
      aside.classList.add('aside__oscuro');
      aside.classList.remove('aside__claro');

      botonModoOscuro.style.display = 'none';
      botonModoClaro.style.display = 'inline-flex';
      botonModoClaro.style.alignItems = 'center'; 
      botonModoClaro.style.justifyContent = 'center'; 
  });

  botonModoClaro.addEventListener('click', activarModoClaro);
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
      location.reload();
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

  // seccion texto oculta
  textoAside.style.display = 'none';

  btnImagen.addEventListener('click', (event) => {
      event.preventDefault(); // para que no haga scroll
      scrollAseccion(imagenAside);
      activarSeccion(imagenAside);
      desactivarSeccion(textoAside);
  });

  btnTexto.addEventListener('click', (event) => {
      event.preventDefault(); // para que no haga scroll
      scrollAseccion(textoAside);
      activarSeccion(textoAside);
      desactivarSeccion(imagenAside);
  });

  const scrollAseccion = (section) => {
      window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
      });
  };

  const activarSeccion = (section) => {
      if (section.style.display !== 'inline-flex') {
          section.style.display = 'inline-flex';
      }
  };

  const desactivarSeccion = (section) => {
      if (section.style.display !== 'none') {
          section.style.display = 'none';
      }
  };
});


//BLEND MODE / CAMBIA FONDO

const inputColor = document.getElementById("inputColor");
const divImg = document.getElementById("imagen");

inputColor.addEventListener("input", (e) => {
  divImg.style.backgroundColor = e.target.value;
});

//span color 
const colorFondo = () => {
    const fondoColor = inputColor.value;  //valor input type color
    document.getElementById('fondo__seleccion').innerText = fondoColor; //el span que cambie
    divImg.style.backgroundColor = fondoColor; 
}
inputColor.addEventListener('input', colorFondo); 


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


//MEZCLA

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

const aplicarMezcla = () => {  
    const normalValor = normal.value;
    const aclararValor = aclarar.value;
    const oscurecerValor = oscurecer.value;
    const diferenciaValor = diferencia.value;
    const luminosidadValor = luminosidad.value;
    const multiplyValor = multiply.value;

    // Aplicar mezcla 
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

//CAMBIAR TEXTO 

const textSup = document.getElementById('arriba');
const textInf = document.getElementById('abajo');
const texAreaSup = document.getElementById('texto__superior');
const texAreaInf = document.getElementById('texto__inferior');

// h2 aca cambia

const actualizarTextos = (event) => {
  const textoModificado = event.target.value;

  if (event.target === texAreaSup) {
    textSup.innerText = textoModificado;
  } else if (event.target === texAreaInf) {
    textInf.innerText = textoModificado;
  }
}

texAreaSup.addEventListener('input', actualizarTextos);
texAreaInf.addEventListener('input', actualizarTextos)


//Sin textos Superior / Inferior

const sinTextoSuperior = document.getElementById('sin__texto--superior'); //mis input type="checkbox"
const sinTextoInferior = document.getElementById('sin__texto--inferior');

const textoCheked = () => {
  if (sinTextoSuperior.checked) {
    textSup.style.display = 'none'; //solo cuando hago click se vuelve display none
  } else {
    textSup.style.display = 'block'; 
  }
  //
  
  if (sinTextoInferior.checked) {
    textInf.style.display = 'none';//solo cuando hago click se vuelve display none
  } else {
    textInf.style.display = 'block'; 
  }
}

//Evento
sinTextoSuperior.addEventListener('change', textoCheked);
sinTextoInferior.addEventListener('change', textoCheked);
sinTextoSuperior.addEventListener('change', textoCheked);
sinTextoInferior.addEventListener('change', textoCheked);


const posicionTexto = () => {
  if ($('text-no-background-checkbox').checked) {
    $('top-text').style.position = 'absolute'
    $('bottom-text').style.position = 'absolute'
  } else {
    $('top-text').style.position = 'static'
    $('bottom-text').style.position = 'static'
  }
}
//FUENTES


        const fuentes = document.getElementById('fuente');

        const fuentesTexto = () => {
          const fuenteSeleccionada = fuentes.value;
          textSup.style.fontFamily = fuenteSeleccionada;
          textInf.style.fontFamily = fuenteSeleccionada;
        }

        // evento
        fuentes.addEventListener('change', fuentesTexto);

//TAMAÑO TEXTO

const tamanioTextoInput = document.getElementById('tamaño__texto--id');

        const actualizarTamanioTexto = () => {
          const tamanioTexto = tamanioTextoInput.value + 'px'; //el numero mas el pixel
          textSup.style.fontSize = tamanioTexto;
          textInf.style.fontSize = tamanioTexto;
        }

        //el evento
        tamanioTextoInput.addEventListener('input', actualizarTamanioTexto);

// LA ALINEACION

const cambiarAlineacion = (alineacion) => { //mi parametro es alineacion ,alineacion son los textos : text-align
  textSup.style.textAlign = alineacion;
  textInf.style.textAlign = alineacion;
}

document.getElementById('izquierda').addEventListener('click', () => { //evento click tex-align :left
  cambiarAlineacion('left');
});

document.getElementById('centro').addEventListener('click', () => { //evento click tex-align :center
  cambiarAlineacion('center');
});

document.getElementById('derecha').addEventListener('click', () => { //evento click tex-align :right
  cambiarAlineacion('right');
});

//COLOR AL TEXTO 

const colorTexto = () => {
  const color = document.getElementById('color').value.toUpperCase();

  document.getElementById('texto--color').innerText = color;
  textSup.style.color = color;
  textInf.style.color = color;
}
//Mi evento
document.getElementById('color').addEventListener('input', colorTexto)

//FONDO DE TEXTO

const checkboxFondo = document.getElementById('checkbox__fondo');
const fondoColorInput = document.getElementById('fondo__color');
const fondoSeleccionSpan = document.getElementById('fondo__texto');

function actualizarFondo() {
    if (!checkboxFondo.checked) {
        const color = fondoColorInput.value;
        fondoSeleccionSpan.innerText = color.toUpperCase();
        textSup.style.backgroundColor = color;
        textInf.style.backgroundColor = color;
    } else {
        fondoSeleccionSpan.innerText = 'transparent';
        textSup.style.backgroundColor = 'transparent';
        textInf.style.backgroundColor = 'transparent';
    }
}

//mis eventos
fondoColorInput.addEventListener('input', actualizarFondo);
checkboxFondo.addEventListener('change', actualizarFondo);


//CONTORNO

const ningunoBtn = document.getElementById('contorno__ninguno');
const claroBtn = document.getElementById('contorno__claro');
const oscuroBtn = document.getElementById('contorno__oscuro');

ningunoBtn.addEventListener('click', () => {
    textSup.style.textShadow = '';
    textInf.style.textShadow = '';
});

claroBtn.addEventListener('click', () => {
  //valores con generador de textShadow
  textSup.style.textShadow = '-2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff, 2px -2px 1px #fff';
    textInf.style.textShadow = '-2px -2px 1px #fff, 2px 2px 1px #fff, -2px 2px 1px #fff, 2px -2px 1px #fff'; 
});

oscuroBtn.addEventListener('click', () => {
  // valores con generador de texShadow
  textSup.style.textShadow = '-2px -2px 1px rgba(0, 0, 0, 0.3), 2px 2px 1px rgba(0, 0, 0, 0.3), -2px 2px 1px rgba(0, 0, 0, 0.3), 2px -2px 1px rgba(0, 0, 0, 0.3)';
  textInf.style.textShadow = '-2px -2px 1px rgba(0, 0, 0, 0.3), 2px 2px 1px rgba(0, 0, 0, 0.3), -2px 2px 1px rgba(0, 0, 0, 0.3), 2px -2px 1px rgba(0, 0, 0, 0.3)';
});

//ESPACIADO

const espaciado = () => {
  const espaciadoTexto = document.getElementById('espaciado__txt').value;
  textSup.style.letterSpacing = `${espaciadoTexto}px`
  textInf.style.letterSpacing = `${espaciadoTexto}px `
}
//el evento

document.getElementById('espaciado__txt').addEventListener('input', espaciado);


//INTERLINEADO

const interlineado = () => {
  const interlineadoTxt = document.getElementById('interlineado__texto').value;
  textSup.style.lineHeight = interlineadoTxt;
  textInf.style.lineHeight = interlineadoTxt;
}

document.getElementById('interlineado__texto').addEventListener('change', interlineado);
