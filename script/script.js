// Titulo Animado - Index

const title = document.getElementById("herb-haven");
const letters = title.querySelectorAll(".letter");

function randomPosition() {
  const range = 70;
  return Math.floor(Math.random() * (range * 2 + 1)) - range;
}

function scrambleLetters() {
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const position = `translate(${randomPosition()}px, ${randomPosition()}px)`;
    letter.style.transform = position;
  }
}

function resetLetters() {
  let delay = 0; // delay inicial de 0 segundos
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    setTimeout(() => {
      letter.style.transform = "translate(0px, 0px)";
    }, delay);
    delay += 250;
  }
}

// Titulo Animado - Index Fim

// Navbar

function activate(col, divId) {
  var colunas = document.querySelectorAll("#colunas .col");
  for (var i = 0; i < colunas.length; i++) {
    colunas[i].classList.remove("active");
  }

  var divs = document.querySelectorAll(".div");
  for (var i = 0; i < divs.length; i++) {
    if (divs[i].id !== divId) {
      divs[i].classList.remove("active");
    }
  }

  col.classList.add("active");
  var div = document.getElementById(divId);
  div.classList.add("active");

  setTimeout(() => {
    col.classList.remove("active");
  }, 2000);
}

document.addEventListener('click', (event) => {
  const clickedElement = event.target;
  const activeColumn = document.querySelector('.col.active');

  if (!clickedElement.closest('.col')) {
    if (activeColumn) {
      activeColumn.classList.remove('active');
    }
  }
});

document.addEventListener('click', (event) => {
  const clickedElement = event.target;
  const cols = document.querySelectorAll('.col');
  let isColumnClicked = false;

  cols.forEach((col) => {
    if (col.contains(clickedElement)) {
      isColumnClicked = true;
    }
  });

  if (!isColumnClicked) {
    var activeDiv = document.querySelector('.div.active');

    if (activeDiv) {
      activeDiv.classList.add("active");
    }
  }
});

// Navbar Fim

// Imagem do Usuario - Login

let photo = document.getElementById('imgPhoto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
  file.click();
});

file.addEventListener('change', () => {

  if (file.files.length <= 0) {
    return;
  }

  let reader = new FileReader();

  reader.onload = () => {
    photo.src = reader.result;
  }

  reader.readAsDataURL(file.files[0]);
});

// Imagem do Usuario - Login Fim

// Veja Mais - Menos Usuario Inicio

const btnVejaMais = document.querySelector('.btn-veja-mais');
const btnVejaMenos = document.querySelector('.btn-veja-menos');
const informacoes = document.querySelector('.informacoes');

btnVejaMais.addEventListener('click', () => {
  btnVejaMais.style.display = 'none';
  informacoes.classList.add('animar-informacoes'); /* adiciona a nova classe com a animação */
  informacoes.style.display = 'flex'; /* altera o display para flex */
});

btnVejaMenos.addEventListener('click', () => {
  informacoes.style.display = 'none';
  btnVejaMais.style.display = 'block';
});

// Veja Mais - Menos Usuario Fim

const liBack = document.querySelectorAll('.back li');

liBack.forEach(li => {
  li.addEventListener('click', () => {
    const liId = li.getAttribute('id');
    const newInfo = prompt(`Digite o novo valor para ${li.innerText}:`);

    if (liId === 'nome') {
      const h1Username = document.querySelector('.text-user h1');
      h1Username.textContent = newInfo;
    } else if (liId === 'endereco') {
      const liAddress = document.querySelector('.informacoes li:first-child');
      liAddress.textContent = `Rua ${newInfo}`;
    } else if (liId === 'telefone') {
      const liPhone = document.querySelector('.informacoes li:nth-child(2)');
      liPhone.textContent = `(11) ${newInfo}`;
    } else if (liId === 'email') {
      const liEmail = document.querySelector('.informacoes li:last-child');
      liEmail.textContent = newInfo;
    }
  });
});

// teste











